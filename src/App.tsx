import { Outlet } from 'react-router-dom';

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Router from "./Routing/Router";

import ModeController from './ModeController';

import BackgroundImage from './BackgroundImage/BackgroundImage';

import useMobile from './components/useMobile';
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
  const location = useLocation();
  const isMobile = useMobile();

  useEffect(() => {
    const mode: Mode = UrlParser.getModeFromUrl(location);
    ModeController.setMode(mode);
  }, []);

  return <div className="h-screen flex flex-col">
    { !isMobile && <Header /> }
    <BackgroundImage className="flex-1">
      <div className="flex justify-center overflow-auto min-h-full" >
        <div className="bg-gray-100 bg-opacity-60 min-h-full w-full lg:w-3/4 2xl:w-[60%]">
          <Outlet />
        </div>
      </div>
    </BackgroundImage>
    { isMobile && <Footer /> }
  </div>
}





