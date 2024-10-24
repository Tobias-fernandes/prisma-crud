import prisma from "@/lib/db";
import Link from "next/link";
import Form from "./form";

export default async function Posts() {
  // const posts = await prisma.post.findMany();
  const user = await prisma.user.findUnique({
    where: { email: "tobys312@gmail.com" },
    include: { posts: true },
  });

  return (
    <div className="flex flex-col items-center mt-12">
      <h1 className="text-4xl font-bold">Posts ({user?.posts.length})</h1>
      <p className="text-lg">This is the posts page</p>

      <div className="mt-10 h-1 w-80 bg-white"></div>
      <ul className="py-10 space-y-5">
        {user?.posts.map((post) => (
          <li key={post.id} className="">
            <h2 className="text-blue-500 text-xl">{post.title}</h2>
            <Link href={`/posts/${post.slug}`} className="underline">
              go to post
            </Link>
          </li>
        ))}
      </ul>
      <div className="mb-10 h-1 w-80 bg-white"></div>

      <Form />
    </div>
  );
}
