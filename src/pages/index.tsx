import Layout from "../components/layouts";

import Section from "../components/ui/Section";
import IconButton from "../components/ui/IconButton";
import { FiGithub, FiChevronsRight } from "react-icons/fi";

export default function Index() {
	return (
		<Layout title="Hello from next-launch!">
			<Section>
				<h1 className="text-3xl font-bold leading-none sm:text-4xl font-['Quicksand'] mb-2">Say</h1>
				<h1 className="text-6xl text-purple-500 font-['Caveat'] animate-pulse">Hello!</h1>
				<h1 className="text-3xl font-bold leading-none sm:text-4xl font-['Quicksand'] mb-6">to next-launch</h1>

				<p className="text-lg text-center mx-2 mb-8">
					<span className="font-semibold">next-launch</span> combines React, Next.JS, Prisma, MongoDB, and Express + many flexible,
					ready-to-ship components to help you kickstart your next big project.
				</p>

				<div className="flex flex-col space-y-2 mb-12">
					<IconButton target="_blank" href="https://github.com/PlutonusDev/next-launch" icon={<FiGithub className="text-lg" />} label="View on Github" />
					<IconButton icon={<FiChevronsRight className="text-lg" />} href="/mockups/reel" label="Explore Components" reversed />
				</div>

				<h2 className="text-xl font-semibold text-center mb-4">Ready to get started?</h2>
				<div className="mockup-code w-full overflow-x-scroll">
					<pre data-prefix="$">
						<code>git clone https://github.com/PlutonusDev/next-launch <span className="text-green-300">my-project</span></code>
					</pre>
					<pre data-prefix="$">
						<code>cd <span className="text-green-300">my-project</span></code>
					</pre>
					<pre data-prefix="$">
						<code>npm install <span className="text-blue-300"># or yarn</span></code>
					</pre>
					<pre data-prefix="$">
						<code>npm start <span className="text-blue-300"># this may take a while, you can also use &apos;npm run dev&apos;</span></code>
					</pre>
					<pre data-prefix="&gt;">
						<code><span className="font-semibold text-green-300">ready</span> - started server on 0.0.0.0:3000</code>
					</pre>
				</div>
			</Section>
		</Layout>
	);
}
