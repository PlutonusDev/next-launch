export default function Section({ children }) {
	return (
		<section className="container text-gray-900 dark:text-gray-50 mx-auto flex flex-col items-center px-2 py-16 md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
			{children}
		</section>
	);
}
