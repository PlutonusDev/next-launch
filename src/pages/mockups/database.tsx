import useSWR, { useSWRConfig } from "swr";
import fetcher from "../../lib/fetcher";

import Image from "next/image";
import Layout from "../../components/layouts";
import Section from "../../components/ui/Section";

declare type User = {
	username: string;
	country: string;
	workplace: string;
	position: string;
	avatar: string;
}

const skeleton = (
	<tr>
		<th>
			<label>
				<input type="checkbox" className="checkbox animate-pulse" disabled />
			</label>
		</th>
		<td>
			<div className="flex items-center space-x-3">
				<div className="avatar">
					<div className="bg-gray-900 dark:bg-gray-50 w-12 h-12 mask mask-squircle animate-pulse" />
				</div>
				<div>
					<div className="h-4 rounded bg-gray-900 dark:bg-gray-50 w-40 mb-1 animate-pulse" />
					<div className="h-3 rounded bg-gray-900 dark:bg-gray-50 w-28 animate-pulse" />
				</div>
			</div>
		</td>
		<td>
			<div className="h-4 rounded bg-gray-900 dark:bg-gray-50 w-42 mb-1 animate-pulse" />
			<span className="badge badge-outline badge-sm w-36 animate-pulse" />
		</td>
		<th>
			<button className="btn btn-xs w-24 animate-pulse" />
		</th>
	</tr>
);

export default function Reel() {
	const { data: users, error }: { data?: User[] | any, error?: String } = useSWR("/api/users", fetcher, { refreshInterval: 10000 });
	const { mutate } = useSWRConfig();

	return (
		<Layout title="Functional Database">
			<Section className="items-center">
				<p className="font-semibold text-xl mb-8">Functional Database</p>
				<div className="flex flex-row space-x-4 mb-8">
					<a onClick={() => { fetch("/api/generateusers").then(() => mutate("/api/users")) }} className="btn">Generate Users</a>
					<a onClick={() => { fetch("/api/clearusers").then(() => mutate("/api/users")) }} className="btn">Clear Database</a>
				</div>

				<div className="overflow-x-auto w-full">
					<table className="table w-full">
						<thead className="rounded-none">
							<tr className="py-2">
								<th className="mx-2">
									<label>
										<input type="checkbox" className="checkbox" />
									</label>
								</th>
								<th>Name</th>
								<th>Job</th>
								<th />
							</tr>
						</thead>
						<tbody>
							{!users ? <>{skeleton}{skeleton}{skeleton}{skeleton}{skeleton}</>
								: users.map((user: User) => (
									<tr key={user.username}>
										<th>
											<label>
												<input type="checkbox" className="checkbox" />
											</label>
										</th>
										<td>
										<div className="flex items-center space-x-3">
												<div className="avatar">
													<div className="w-12 h-12 mask mask-squircle">
														<Image alt="avatar" layout="fill" src={user.avatar} />
													</div>
												</div>
												<div>
													<div className="font-bold">
														{user.username}
													</div>
													<div className="text-sm opacity-50">
														{user.country}
													</div>
												</div>
											</div>
										</td>
										<td>
											{user.workplace}
											<br />
											<span className="badge badge-outline badge-sm">{user.position}</span>
										</td>
										<th>
											<button className="btn btn-ghost btn-xs">Details</button>
										</th>
									</tr>
								))
							}
							{/* db .map end here */}
						</tbody>
					</table>
					{error && <p className="text-red-400 text-center">Oops! Something went wrong while fetching this information.</p>}
					{users && !users[0] && <p className="text-green-400 text-center">It&apos;s looking a little empty in here, try clicking that &quot;Generate Users&quot; button.</p>}
				</div>
			</Section>
		</Layout>
	);
}
