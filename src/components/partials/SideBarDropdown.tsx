import { isValidElement, Children, useState, useEffect } from "react";
import type { ReactChild } from "react";
import { useRouter } from "next/router";

export default function SideBarLink({ icon, label, children }) {
	const router = useRouter();
	const [ enabled, setEnabled ] = useState(false);
	const childrenHrefs = Children.map(Children.toArray(children), (c: ReactChild) => {
		return isValidElement(c) ? c.props.href : null;
	});

	useEffect(() => childrenHrefs.includes(router.asPath) && setEnabled(true), [childrenHrefs, router.asPath]);

	return (
		<>
			<a onClick={() => setEnabled(!enabled)} className={`cursor-pointer py-1 px-2 transition-all duration-200 rounded-md ${enabled ? "bg-purple-400 hover:bg-purple-500 dark:bg-purple-800 dark:hover:bg-purple-900 text-gray-50" : "bg-gray-200 hover:bg-gray-400 dark:bg-gray-800 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-50"} text-lg flex flex-row items-center space-x-2 w-full`}>
				{icon}
				<span className="font-semibold">{label}</span>
			</a>
			<div className={`ml-3 flex flex-col space-y-2 ${enabled ? "block" : "hidden"}`}>
				{children}
			</div>
		</>
	);
}
