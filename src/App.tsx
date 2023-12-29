import { Outlet } from 'react-router-dom';

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Router from "./Routing/Router";

import ModeController from './ModeController';

import BackgroundImage from './BackgroundImage/BackgroundImage';

import useMobile from './components/useMobile';

ModeController.setInstance();

export default function App() {
  return <Router>
    <Layout />
  </Router>;
}


function Layout() {
  const isMobile = useMobile();

  return <div className="h-screen flex flex-col">
    { !isMobile && <Header /> }
    <BackgroundImage className="flex-1">
      <div className="flex justify-center overflow-auto min-h-full" >
        <div className="bg-gray-100 bg-opacity-60 min-h-full lg:w-1/2">
          <Outlet />
        </div>
      </div>
    </BackgroundImage>
    { isMobile && <Footer /> }
  </div>
}





