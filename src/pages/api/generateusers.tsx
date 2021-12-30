import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import faker from "faker";

const positions = ["Director", "Executive", "Developer", "Human Resources", "IT", "Security", "Administration", "Receptionist", "Investor Relations", "Public Relations", "Marketing", "Internal Affairs" ];

export default async function handler(req, res) {
	await prisma.$connect();

	const users = [];
	for(let i = 0; i < 99; i++) {
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
