import assert from 'node:assert/strict';
import { after, before, test } from 'node:test';
import { access } from 'node:fs/promises';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { createServer } from 'vite';

let server;
before(async () => {
    server = await createServer({ server: { middlewareMode: true }, appType: 'custom' });
});
after(async () => { await server?.close(); });

const scenarios = [
    {
        page: 'CoursesTcm',
        courses: [
            ['262105120', 'Natürlich gesund durch die Erkältungszeit', '24.11.2026', '18:00 - 19:30 Uhr', '101 Seminarraum', '13,00 €'],
            ['262305603', 'Gemeinsam backen: Weihnachtlicher Honigkuchen', '02.12.2026', '17:00 - 19:00 Uhr', '201 Kochstudio', '19,00 €'],
            ['262105121', 'Gesunde Knie: beweglich bleiben', '08.12.2026', '18:00 - 19:30 Uhr', '101 Seminarraum', '13,00 €'],
        ],
    },
    {
        page: 'CoursesStep',
        courses: [
            ['262105122', 'Herausforderndes Verhalten bei Kindern', '05.12.2026', '10:00 - 12:00 Uhr', '303 Seminarraum', '13,00 €'],
        ],
    },
];

for (const { page, courses } of scenarios) {
    test(`${page} separates current booking details from closed inactive references`, async () => {
        const { default: Page } = await server.ssrLoadModule(`/src/Courses/${page}.tsx`);
        const fullHtml = renderToStaticMarkup(createElement(Page));
        const html = fullHtml.split('<details')[0];
        const cards = html.split('<h2 ').slice(1);
        assert.equal(cards.length, courses.length);
        for (const [index, details] of courses.entries()) {
            const card = cards[index];
            for (const expected of details) assert.ok(card.includes(expected), `Missing ${expected}`);
            assert.ok(card.includes('Dauer: 1 Termin'));
            assert.ok(card.includes('Amand-Goegg-Straße 2 - 4 | 77654 Offenburg'));
            assert.match(card, new RegExp(`href="https://www\\.vhs-offenburg\\.de/[^" ]+/${details[0]}"`));
            assert.ok(card.includes('target="_blank" rel="noopener noreferrer"'));
            const image = card.match(/<img[^>]+src="([^"]+)"[^>]+alt="([^"]+)"/);
            assert.ok(image, 'Course needs an image with an alternative description');
            await access(new URL(`../${image[1].replace(/^\//, '')}`, import.meta.url));
        }
        assert.doesNotMatch(html, /Kursstart:|Kursende:|2025|26110512|261303006/);
        const archive = fullHtml.slice(html.length);
        assert.match(archive, /^<details class=/);
        assert.doesNotMatch(archive.match(/^<details[^>]*>/)[0], /\bopen\b/);
        assert.ok(archive.includes('Frühere Kurse'));
        assert.doesNotMatch(archive, /Anmelden|href="https:\/\/www\.vhs-offenburg\.de/);
        if (page === 'CoursesTcm') {
            for (const title of ['Energiereich durch den Sommer', 'Menopause', 'Mächtig kochen', 'Gesundheitsprävention', 'Gesund durch den Winter', 'Fit für den Sommer', 'Online: TCM für dich und mich', 'Chinesische und naturheilkundliche Medizin einfach im Familienalltag']) {
                assert.ok(archive.includes(title), `Missing archived course: ${title}`);
            }
            assert.equal((archive.match(/<h3 /g) ?? []).length, 8);
            assert.ok(archive.includes('17.06.2026'));
            assert.ok(archive.includes('Das Heilkonzept der Chinesischen Medizin basiert'));
        } else {
            for (const title of ['Gut genug ist wirklich gut!', 'Elternkurs STEP (Teil 1)', 'Online: STEP-Elternkurs zur Ermutigung', 'STEP-Elternkurs für Eltern von Kindern unter 6 Jahren', 'STEP-Elternkurs für Eltern von Kindern zwischen 6–12 Jahren', 'STEP-Elternkurs Teil 2', 'Zwischen-Menschlichkeit heute']) {
                assert.ok(archive.includes(title), `Missing archived course: ${title}`);
            }
            assert.equal((archive.match(/<h3 /g) ?? []).length, 7);
            assert.ok(archive.includes('18.06.2026'));
            assert.ok(archive.includes('Wir reden mit unseren Kindern'));
        }
        if (page === 'CoursesTcm') {
            assert.ok(cards[1].includes('Zusätzliche Lebensmittelkosten: 8 bis 12 €'));
            for (const ingredient of ['Vollkorn-Dinkelmehl', 'Rosinen', 'Walnüsse', 'Zitronat', 'Orangeat']) {
                assert.ok(cards[1].includes(ingredient));
            }
            assert.equal((html.match(/Hinweis der VHS:/g) ?? []).length, 2);
        } else {
            assert.ok(html.includes('Eltern, Erziehungsberechtigte und alle'));
            assert.doesNotMatch(html, /unter 6|2-12|6–12/);
            assert.ok(html.includes('cartoon-encouragement-scientist.png'));
        }
    });
}
