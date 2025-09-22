import { ReactNode } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import { Mode } from '../dataclasses/Mode';
import existingRoutes, { IRoute } from './Routes';
import EntryPage from '../EntryPage/EntryPage';
import Test from '../Test';

export default function Router({ children }: { children: ReactNode}) {
    const routes: Map<Mode, IRoute[]> = existingRoutes;

    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<EntryPage />} />
            <Route path="/test" element={<Test />} />
            
            <Route path={`/${Mode.STEP}/*`} element={children}>
                {routes.get(Mode.STEP)?.map(subRoute => 
                    <Route 
                        key={`route-${subRoute.path}`}
                        path={subRoute.path}
                        element={subRoute.element} 
                    />
                )}
            </Route>

            <Route path={`/${Mode.TCM}/*`} element={children}>
                {routes.get(Mode.TCM)?.map(subRoute => 
                    <Route 
                        key={`route-${subRoute.path}`}
                        path={subRoute.path}
                        element={subRoute.element} 
                    />
                )}
            </Route>
        </Routes>
    </BrowserRouter>
}