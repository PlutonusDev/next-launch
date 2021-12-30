import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req, res) {
	await prisma.$connect();

	await prisma.user.deleteMany();
	res.json({ msg: "OK" });

	await prisma.$disconnect();
}
