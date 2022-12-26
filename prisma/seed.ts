import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
	const user = await prisma.user.upsert({
		where: { id: 1 },
		update: {},
		create: {
			firstName: "seed",
			lastName: "db",
			email: "seed@prisma.com",
			password: "seed",
			projects: {
				create: [
					{
						title: "The Rocketeer and Dave Stevens: A Documentary Film",
						description:
							"An authorized feature length documentary about the art and life of beloved illustrator Dave Stevens, creator of The Rocketeer.",
						country: "USA",
						media: {
							create: [
								{
									url: "img1",
									type: "image",
								},
								{
									url: "img2",
									type: "video",
								},
							],
						},

						Budget: 0,
						categories: {
							create: [
								{
									Name: "Art",
								},
								{
									Name: "Games",
								},
								{
									Name: "Technology",
								},
							],
						},

						
						moneyRaised: 43,
					},

					{
						title: "Project Mushroom",
						description:
							"A community platform for justice and action on an overheating planet.",
						country: "FR",
						media: {
							create: [
								{
									url: "img1",
									type: "image",
								},
								{
									url: "img2",
									type: "video",
								},
							],
						},
						Budget: 1000,
						categories: {
							create: [
								{
									Name: "Social",
								},
								{
									Name: "Environment",
								},
								{
									Name: "HealthCare",
								},
							],
						},

						
						moneyRaised: 0,
					},
				],
			},
			chats: {
				create: [
					{
						messages: {
							create: [
								{
									message: "hey there",
									senderId: 1,
									receiverId: 1,
								},
								{
									message: "hey!",
									senderId: 1,
									receiverId: 1,
								},
								{
									message: "can we meet soon ?",
									senderId: 1,
									receiverId: 1,
								},
							],
						},
					},
					{
						messages: {
							create: [
								{
									message: "hello ",
									senderId: 1,
									receiverId: 1,
								},
								{
									message: "hello!",
									senderId: 1,
									receiverId: 1,
								},
								{
									message: "how are u?",
									senderId: 1,
									receiverId: 1,
								},
							],
						},
					},
				],
			},
		},
	});
	console.log(user);
}
main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
