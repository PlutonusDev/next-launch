import NavBar from "../ui/NavBar";

export default function MainLayout({ children, ...pageInfo }) {
	return (
		<>
			<div className="bg-gray-50 dark:bg-gray-800 flex h-screen overflow-hidden">
				<div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
					<NavBar />
					<main className="mx-3 my-3">
						{children}
					</main>
				</div>
			</div>
		</>
	);
}
