import { useState } from "react";
import { useTheme } from "next-themes";

import SEO from "../meta/SEO";
import NavBar from "../ui/NavBar";
import SideBar from "../ui/SideBar";

export default function MainLayout({ children, ...pageInfo }) {
	const [ sideBarOpen, setSideBarOpen ] = useState(false);
	const { resolvedTheme } = useTheme();

	return (
		<>
			<SEO {...pageInfo} />
			<div data-theme={resolvedTheme} className="bg-white dark:bg-gray-800 flex min-h-screen overflow-hidden">
				<SideBar sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen} />
				<div className="relative flex flex-col flex-1 overflow-x-hidden">
					<NavBar sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen} />
					<main className="mx-3 my-3">
						{children}
					</main>
				</div>
			</div>
		</>
	);
}
