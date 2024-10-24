import { Prisma, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const initialPost: Prisma.PostCreateInput[] = [
  {
    title: "Post 1",
    slug: "post-1",
    content: "Content of post 1",
    author: {
      connectOrCreate: {
        where: { email: "tobys312@gmail.com" },
        create: { email: "tobys312@gmail.com", hashedPassword: "123456789" },
      },
    },
  },
];

async function main() {
  console.log(`Start seeding`);

  for (const post of initialPost) {
    const newPost = await prisma.post.create({ data: post });
    console.log(`Created post with id: ${newPost.id}`);
  }

  console.log(`Seeding finished.`);
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
