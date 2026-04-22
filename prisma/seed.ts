import { prisma } from "@/lib/prisma";

// create 1 user (at the moment we will only use this user)
async function main() {
  const user = await prisma.user.upsert({
    where: {
      email: "john.doe@example.com",
    },
    update: {},
    create: {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
    },
  });

  console.log("User created: ", user);
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });
