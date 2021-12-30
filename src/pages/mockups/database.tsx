import { useEffect, useState, useMemo } from "react";
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

	const [ page, setPage ] = useState(1);
	const displayData = useMemo(() => {
		const start = (page - 1) * 5; // 5 items per page
		if(!users) return [];
		return users.slice(start, start + 5);
	}, [ users, page ]);

	return (
		<Layout title="Functional Database">
			<Section className="items-center">
				<p className="font-semibold text-xl mb-8">Functional Database</p>
				<div className="flex flex-row space-x-4 mb-8">
					<a onClick={() => { fetch("/api/generateusers").then(() => mutate("/api/users")); setPage(1); }} className="btn">Generate Users</a>
					<a onClick={() => { fetch("/api/clearusers").then(() => mutate("/api/users")); setPage(1); }} className="btn">Clear Database</a>
				</div>

				<div className="overflow-x-auto w-full">
					<table className="table w-full mb-4">
						<thead className="rounded-none">
							<tr className="py-2">
								{/*<th className="mx-2">
									<label>
										<input onClick={() => setSelectAll(!selectAll)} type="checkbox" className="checkbox" />
									</label>
								</th>*/}
								<th>Name</th>
								<th>Job</th>
								<th />
							</tr>
						</thead>
						<tbody>
							{!users ? <>{skeleton}{skeleton}{skeleton}{skeleton}{skeleton}</>
								: displayData.map((user: User) => (
									<tr key={user.id}>
										{/*<th>
											<label>
												<input checked={selectAll || null} type="checkbox" className="checkbox" />
											</label>
										</th>*/}
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
											<div className="dropdown dropdown-top dropdown-end">
												<div tabindex={0} className="btn btn-xs">Details</div>
												<ul tabindex={0} class="p-2 px-4 shadow menu dropdown-content bg-gray-300 dark:bg-gray-900 rounded-box w-52">
													<li className="text-red-400">
														<label for={`delete-${user.id}`}>Delete User</label>
													</li>
												</ul>
											</div>
										</th>
										<input type="checkbox" id={`delete-${user.id}`} className="modal-toggle" />
										<div className="modal">
											<div className="modal-box">
												<p>Are you sure you want to remove <span className="font-semibold">{user.username}</span> from the database?</p>
												<div className="modal-action">
													<a onClick={() => fetch(`/api/deleteuser?id=${user.id}`).then(() => mutate("/api/users"))} class="btn btn-error">Confirm</a>
													<label for={`delete-${user.id}`} className="btn">Close</label>
												</div>
											</div>
										</div>
									</tr>
								))
							}
							{/* db .map end here */}
						</tbody>
					</table>
					{users && users.length > 10 && <div className="flex flex-row justify-center space-x-4 mb-4 w-full">
						<a className="btn w-32" onClick={() => setPage(page - 1)} disabled={page === 1}>Prev</a>
						<a className="btn w-32" onClick={() => setPage(page + 1)} disabled={users.length < (page * 10)}>Next</a>
					</div>}
					{error && <p className="text-red-400 text-center mb-4">Oops! Something went wrong while fetching this information.</p>}
					{users && !users[0] && <p className="text-green-400 text-center mb-4">It&apos;s looking a little empty in here, try clicking that &quot;Generate Users&quot; button.</p>}
				</div>
			</Section>
		</Layout>
	);
}
