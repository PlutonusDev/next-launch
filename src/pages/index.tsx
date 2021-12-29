import Layout from "../components/layouts";

export default function Index() {
	return (
		<Layout title="Hello, World!">
			<section className="container text-gray-900 dark:text-gray-50 mx-auto flex flex-col items-center px-2 py-16 md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
				<h1 className="text-3xl font-bold leading-none sm:text-4xl font-['Quicksand']">Say</h1>
				<h1 className="text-6xl text-purple-500 font-['Nanum_Pen_Script']">Hello!</h1>
				<h1 className="text-3xl font-bold leading-none sm:text-4xl font-['Quicksand'] mb-6">to next-launch</h1>
				<p className="text-lg text-center mx-2">
					<span className="font-semibold">next-launch</span> combines React, Next.JS, Prisma, MongoDB, and Express + many flexible,
					ready-to-use components to help you kickstart your next big project.
				</p>
			</section>
		</Layout>
	);
}
