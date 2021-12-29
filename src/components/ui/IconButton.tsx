import Link from "next/link";

export default function IconButton({ icon, label, reversed = false, className = "", href, ...rest }) {
	return (
		<Link href={href}>
			<a className={`flex flex-row items-center space-x-2 btn ${className || "dark:btn-primary"}`} {...rest}>
				{!reversed && icon}
				<span className="text-md">{label}</span>
				{reversed && icon}
			</a>
		</Link>
	);
}
