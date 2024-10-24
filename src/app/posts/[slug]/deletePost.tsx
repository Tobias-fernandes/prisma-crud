"use client";
import { deletePost } from "@/actions/action";
import { useRouter } from "next/navigation";

export default function DeleteForm({ id }: { id: string }) {
  const router = useRouter();

  const handleDeletePost = () => {
    deletePost(id);
    router.push("/posts");
  };

  return (
    <>
      <form action={handleDeletePost}>
        <button className="text-red-600">APAGAR POST</button>
      </form>
    </>
  );
}
