import prisma from "@/lib/db";
import Link from "next/link";
import DeletePost from "./deletePost";
import EditForm from "./editPost";

export default async function Post({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await prisma.post.findUnique({
    where: {
      slug: await slug,
    },
  });

  return (
    <div className="flex flex-col items-center mt-24">
      <h2 className="text-4xl font-bold mb-4">{post?.title}</h2>
      <div className="flex flex-col gap-3">
        <h2 className="text-xl">{post?.content}</h2>
        {post?.id && <DeletePost id={post.id} />}
      </div>
      <Link className="mt-8 underline" href={`/posts`}>
        voltar
      </Link>

      {post?.id && (
        <EditForm id={post.id} title={post.title} content={post.content} />
      )}
    </div>
  );
}
