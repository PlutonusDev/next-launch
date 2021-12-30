import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req, res) {
	await prisma.$connect();

	const users = await prisma.user.findMany();
	res.json(users);

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
