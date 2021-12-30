import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req, res) {
	await prisma.$connect();

	await prisma.user.delete({
		where: { id: req.query.id }
	});
	res.json({ msg: "OK" });

	await prisma.$disconnect();
}
