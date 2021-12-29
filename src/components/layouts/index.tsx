import { useState } from "react";

import SEO from "../meta/SEO";
import NavBar from "../ui/NavBar";
import SideBar from "../ui/SideBar";

export default function MainLayout({ children, ...pageInfo }) {
	const [ sideBarOpen, setSideBarOpen ] = useState(false);

	return (
		<>
			<SEO {...pageInfo} />
			<div className="bg-gray-50 dark:bg-gray-800 flex min-h-screen overflow-hidden">
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
