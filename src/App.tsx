import { Outlet } from 'react-router-dom';

import Header from "./Header/Header";
import Router from "./Routing/Router";

import ModeController from './ModeController';

import BackgroundImage from './BackgroundImage/BackgroundImage';


ModeController.setInstance();

export default function App() {
  return <Router>
    <Layout />
  </Router>;
}


function Layout() {
  return <div className="h-screen flex flex-col">
    <Header className="h-14" />
    <div className="flex text-center justify-center items-center text-4xl p-3">
      <p>Hallo Lotti</p>
    </div>
    <BackgroundImage className="flex-1">
      <div className="flex justify-center overflow-auto min-h-full" >
        <div className="border-x-8 bg-gray-100 bg-opacity-60 min-h-full w-1/2">
          <Outlet />
        </div>
      </div>
    </BackgroundImage>
  </div>
}





