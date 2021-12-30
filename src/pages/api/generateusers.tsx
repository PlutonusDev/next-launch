import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import faker from "faker";

const positions = ["Director", "Executive", "Developer", "Human Resources", "IT", "Security", "Administration", "Receptionist", "Investor Relations", "Public Relations", "Marketing", "Internal Affairs" ];

export default async function handler(req, res) {
	await prisma.$connect();

	const existing = await prisma.user.count({});
	if(existing > 0) return res.send({ msg: "Already generated!" });

	const users = [];
	for(let i = 0; i < 24; i++) {
		users.push({
			username: faker.name.findName(),
			country: faker.address.country(),
			workplace: faker.company.companyName(),
			position: positions[Math.floor(Math.random() * positions.length)],
			avatar: `https://avatars.dicebear.com/api/avataaars/${require("crypto").randomBytes(5).toString("hex")}.svg`
		});
	}

	await prisma.user.createMany({ data: users });
	res.json({ msg: "OK" });

	await prisma.$disconnect();

	/* Mockup data
	return res.json([{
		name: "Joshua Hughes",
		country: "Australia",
		workplace: "Plutonus Softworks Pty. Ltd.",
		position: "Director",
		avatar: `https://avatars.dicebear.com/api/jdenticon/${require("crypto").randomBytes(5).toString("hex")}.svg`
	}]);
	*/
}
