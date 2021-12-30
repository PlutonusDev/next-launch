export default function Section({ children, className = "" }) {
	return (
		<section className={`container text-gray-900 dark:text-gray-50 mx-auto flex flex-col px-2 py-4 md:py-8 md:px-10 lg:px-16 xl:max-w-5xl ${className}`}>
			{children}
		</section>
	);
}
