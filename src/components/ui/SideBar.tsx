import { useEffect, useRef } from "react";

import SideBarLink from "../partials/SideBarLink";
import SideBarDropdown from "../partials/SideBarDropdown";

import { AiFillDatabase, AiFillHome } from "react-icons/ai";
import { HiColorSwatch, HiBriefcase } from "react-icons/hi";
import { MdFormatPaint, MdSpaceDashboard } from "react-icons/md";

export default function SideBar({ sideBarOpen, setSideBarOpen }) {
	const sidebar = useRef(null);

	useEffect(() => {
		const clickHandler = ({ target }) => {
			if(!sidebar.current) return;
			if(!sideBarOpen || sidebar.current.contains(target)) return;

			setSideBarOpen(false);
		}

		document.addEventListener("click", clickHandler);
		return () => document.removeEventListener("click", clickHandler);
	});

	return (
		<div className="lg:w-64">
			{/* Sidebar backdrop (mobile only) */}
			<div className={`sticky top-0 fixed inset-0 bg-gray-900 bg-opacity-40 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${sideBarOpen ? "bg-opacity-40" : "bg-opacity-0 pointer-events-none"}`} aria-hidden="true" />

			<div ref={sidebar} id="sidebar" className={`absolute text-gray-900 dark:text-gray-50 border-r border-gray-700 z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 flex-shrink-0 bg-gray-100 dark:bg-gray-900 p-4 transition-transform duration-200 ease-in-out ${sideBarOpen ? "translate-x-0" : "-translate-x-64"}`}>
				<div className="flex justify-between mb-4 pr-3 sm:px-2">
					<span className="mt-1 mx-auto text-center text-lg font-semibold">next-launch</span>
				</div>
				<div className="w-full border-b-4 border-gray-900 dark:border-gray-50 mb-3" />

				<div className="flex flex-col space-y-2">
					<SideBarLink icon={<AiFillHome />} label="Home" href="/" />
					<SideBarDropdown icon={<HiColorSwatch />} label="Components">
					</SideBarDropdown>
					<SideBarDropdown icon={<MdFormatPaint />} label="Mockups">
						<SideBarLink icon={<HiBriefcase />} label="Showcase" href="/mockups/reel" />
						<SideBarLink icon={<MdSpaceDashboard />} label="Dashboard" href="/mockups/dashboard" />
						<SideBarLink icon={<AiFillDatabase />} label="Database" href="/mockups/database" />
					</SideBarDropdown>
				</div>
			</div>
		</div>
	);
}
