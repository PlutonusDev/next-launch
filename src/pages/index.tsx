import Layout from "../components/layouts";

import Section from "../components/ui/Section";
import IconButton from "../components/ui/IconButton";
import { FiGithub, FiChevronsRight } from "react-icons/fi";

export default function Index() {
	return (
		<Layout title="Hello, World!">
			<Section>
				<h1 className="text-3xl font-bold leading-none sm:text-4xl font-['Quicksand'] mb-2">Say</h1>
				<h1 className="text-6xl text-purple-500 font-['Nanum_Pen_Script'] animate-pulse">Hello!</h1>
				<h1 className="text-3xl font-bold leading-none sm:text-4xl font-['Quicksand'] mb-6">to next-launch</h1>

				<p className="text-lg text-center mx-2 mb-8">
					<span className="font-semibold">next-launch</span> combines React, Next.JS, Prisma, MongoDB, and Express + many flexible,
					ready-to-use components to help you kickstart your next big project.
				</p>

				<IconButton icon={<FiGithub />} label="View on Github" />
				<IconButton icon={<FiChevronsRight />} label="Explore Components" reversed className="btn-accent mt-4" />
			</Section>
		</Layout>
	);
}
