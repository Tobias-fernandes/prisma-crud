"use client";
import { editPost } from "@/actions/action";
import { useRouter } from "next/navigation";

export default function EditForm({
  id,
  title,
  content,
}: // slug,
{
  id: string;
  title: string;
  content: string;
  // slug: string;
}) {
  const router = useRouter();

  const handleAction = (e: FormData) => {
    console.log(e);
    editPost(e, id);
    router.push(`/posts`);
  };

  return (
    <form action={handleAction} className="flex flex-col gap-y-2 w-[300px]">
      <input
        type="text"
        name="title"
        placeholder="Title"
        defaultValue={title}
        className="px-2 py-1 rounded-sm text-black"
      />
      <textarea
        rows={5}
        name="content"
        placeholder="Content"
        defaultValue={content}
        className="px-2 py-1 rounded-sm text-black"
      />
      <button type="submit" className="bg-blue-500 py-2 rounded-sm text-black">
        Edit Post
      </button>
    </form>
  );
}
