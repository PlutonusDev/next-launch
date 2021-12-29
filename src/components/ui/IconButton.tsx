export default function IconButton({ icon, label, reversed = false, className }) {
	return (
		<a className={`flex flex-row items-center space-x-2 btn ${className || "dark:btn-primary"}`}>
			{!reversed && icon}
			<span className="text-md">{label}</span>
			{reversed && icon}
		</a>
	);
}
