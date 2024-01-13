import { Outlet } from 'react-router-dom';


import Navbar from './Navbar/Navbar';
import Router from "./Routing/Router";

import ModeController from './ModeController';

import BackgroundImage from './BackgroundImage/BackgroundImage';

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Mode from './components/Mode';
import UrlParser from './components/UrlParser';

ModeController.setInstance();

export default function App() {
  return <Router>
    <Layout />
  </Router>;
}


function Layout() {
  const NAVBAR_HEIGHT: number = 16

  const location = useLocation();

  useEffect(() => {
    const mode: Mode = UrlParser.getModeFromUrl(location);
    ModeController.setMode(mode);
  }, []);

  return <div className="">
    <Navbar className={`h-${NAVBAR_HEIGHT}`} />
    <BackgroundImage 
      className={`mb-${NAVBAR_HEIGHT} mt-0 md:mt-${NAVBAR_HEIGHT} md:mb-0 overflow-auto`}
      style={{
        height: `calc(100vh - ${NAVBAR_HEIGHT/4}rem)`,
      }}
    >
      <div className="flex justify-center min-h-full" >
        <div className="bg-gray-100 bg-opacity-75 min-h-full w-full lg:w-3/4 2xl:w-[60%] max-w-[2000px]">
          <Outlet />
        </div>
      </div>
    </BackgroundImage>
  </div>
}





