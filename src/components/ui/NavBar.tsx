import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import { BsSunFill, BsCloudSunFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

export default function NavBar({ sideBarOpen, setSideBarOpen }) {
	const [ mounted, setMounted ] = useState(false);
	const { resolvedTheme, setTheme } = useTheme();

	useEffect(() => setMounted(true), []);

	return (
		<div className="navbar mb-2 shadow-lg bg-purple-400 dark:bg-purple-800 text-neutral-content">
			<div className="flex-1 px-2 mx-2">
				<a className="lg:hidden p-3 mr-2 btn btn-ghost btn-md text-xl" onClick={() => setSideBarOpen(!sideBarOpen)}>
					<GiHamburgerMenu />
				</a>
				<span className="text-gray-50 text-lg font-bold">
					next-launch
				</span>
			</div>
			<div className="flex-none px-2 mx-2">
				<div className="flex items-stretch">
					{mounted && <a onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")} className="btn btn-ghost btn-md text-lg p-3 text-md flex justify-center">
						{resolvedTheme === "dark" ? <BsSunFill /> : <BsCloudSunFill />}
					</a>}
				</div>
			</div>
		</div>
	);
}
