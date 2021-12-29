import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import { BsSunFill, BsCloudSunFill } from "react-icons/bs";

export default function NavBar() {
	const [ mounted, setMounted ] = useState(false);
	const { resolvedTheme, setTheme } = useTheme();

	useEffect(() => setMounted(true), []);

	return (
		<div className="navbar mb-2 shadow-lg bg-blue-700 text-neutral-content">
			<div className="flex-1 px-2 mx-2">
				<span className="text-gray-50 text-lg font-bold">
					next-launch
				</span>
			</div>
			<div className="flex-none px-2 mx-2">
				<div className="flex items-stretch">
					{mounted && <a onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")} className="btn btn-ghost rounded-btn btn-sm p-2 text-lg flex justify-center">
						{resolvedTheme === "dark" ? <BsSunFill /> : <BsCloudSunFill />}
					</a>}
				</div>
			</div>
		</div>
	);
}
