"use client";
import { createPost } from "@/actions/action";

export default function Form() {
  const handleCreatePost = (e: FormData) => {
    console.log(e);
    createPost(e);
  };

  return (
    <form action={handleCreatePost} className="flex flex-col gap-y-2 w-[300px]">
      <input
        type="text"
        name="title"
        placeholder="Title"
        className="px-2 py-1 rounded-sm text-black"
      />
      <textarea
        rows={5}
        name="content"
        placeholder="Content"
        className="px-2 py-1 rounded-sm text-black"
      />
      <button type="submit" className="bg-blue-500 py-2 rounded-sm text-black">
        Create post
      </button>
    </form>
  );
}
