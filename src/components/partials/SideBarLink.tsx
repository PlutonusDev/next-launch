import { useRouter } from "next/router";
import Link from "next/link";

export default function SideBarLink({ icon, label, href = "/" }) {
	const router = useRouter();

	return (
		<Link href={href} passHref={true}>
			<div className={`py-1 px-2 rounded-md ${router.asPath === href ? "bg-purple-400 hover:bg-purple-500 dark:bg-purple-800 dark:hover:bg-purple-900 text-gray-50" : "bg-gray-200 hover:bg-gray-400 dark:bg-gray-800 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-50"} text-lg flex flex-row items-center cursor-pointer space-x-2 w-full`}>
				{icon}
				<span className="font-semibold">{label}</span>
			</div>
		</Link>
	);
}
