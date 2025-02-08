import { Outlet, Link } from 'react-router-dom';
import { buttonVariants } from '@/components/ui/button';
import Router from "./Routing/Router";
import routes from './Routing/Routes';

import Logo from './assets/images/Logo_CS_1.png';
import { useNavigate } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import { Sidebar, SidebarProvider, SidebarHeader, SidebarContent, SidebarFooter, SidebarGroup, SidebarMenu, SidebarMenuItem, SidebarTrigger, useSidebar } from '@/components/ui/sidebar';
import ThemeToggle from '@/components/ThemeToggle';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Mode } from './dataclasses/Mode';
import UrlParser from './components/UrlParser';
import ScrollToTop from './components/ScrollToTop';
import { useMode } from '@/components/mode-provider';
import { SwitchButtonConditional } from './components/SwitchButton';

export default function App() {
	return <Router>
		<ScrollToTop />
		<Layout />
	</Router>;
}


function Layout() {
	const { setMode } = useMode();

	const location = useLocation();

	useEffect(() => {
		const mode: Mode = UrlParser.getModeFromUrl(location);
		setMode(mode);
	}, []);

	return <SidebarProvider>
		<AppSidebar />
		<main className="relative w-full">
			<MySidebar />
			<div className="flex justify-center min-h-full w-full overflow-hidden bg-gradient-to-br from-background to-muted/20">
				<div className="bg-muted/10 rounded-xl min-h-full w-full lg:w-3/4 2xl:w-[60%] max-w-[2000px] container-to-scroll overflow-auto" style={{ height: 'calc(100vh - 2rem)' }}>
					<Outlet />
				</div>
			</div>
		</main>
	</SidebarProvider>
}


function AppSidebar() {
	const { mode } = useMode();

	const navigate = useNavigate();

	return <Sidebar>
		<SidebarHeader className="bg-background text-foreground border-b border-border">
			<div className="flex items-center gap-2">
				<img
					src={Logo} 
					alt="logo" 
					className="w-10 h-10" 
					onClick={() => {
						navigate("/");
					}}
				/>
				<p className="text-lg font-bold">Dr. med. Cordelia Schulz</p>
			</div>
		</SidebarHeader>
		<SidebarContent className="bg-background text-foreground flex flex-col justify-end md:justify-start">
			<SidebarGroup>
				<SidebarMenu>
					{routes.get(mode)?.map((route) => (
						<Link to={route.path} key={route.path}>
							<SidebarMenuItem className={twMerge(buttonVariants({ variant: "outline" }), "w-full")}>
								{route.title}
							</SidebarMenuItem>
						</Link>
					))}
				</SidebarMenu>
			</SidebarGroup>
		</SidebarContent>
		<SidebarFooter className="bg-background text-foreground">
			<ThemeToggle />
			<SwitchButtonConditional currentMode={mode} />
		</SidebarFooter>
	</Sidebar>
}


// todo dependency: Sidebar width as defined in @/components/ui/sidebar.tsx
function MySidebar() {
	const { open, isMobile } = useSidebar();
	return <div className={`fixed bottom-5 right-8 md:fixed md:top-5 md:left-5  bg-muted/10 p-3 flex items-center justify-center w-fit h-fit rounded-lg z-50 transition-transform duration-300 ${(open && !isMobile) ? 'md:transform translate-x-[calc(16rem+1.25rem)]' : 'md:transform translate-x-5'}`}>
		<SidebarTrigger className="bg-background p-5 border border-border" size="lg" />
	</div>
}