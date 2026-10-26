import { ReactNode } from 'react';

export default function PastCourses({ children }: { children: ReactNode }) {
    return <details className="m-3 rounded-xl border bg-card text-card-foreground">
        <summary className="cursor-pointer rounded-xl p-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring">
            <h2 className="inline text-xl font-bold">Frühere Kurse</h2>
        </summary>
        {children}
    </details>;
}
