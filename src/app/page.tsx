import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center mt-20">
      <h1 className="text-5xl">Welcome to my blog</h1>
      <Link className="mt-5 text-lg underline" href={"/posts"}>
        View posts
      </Link>
    </div>
  );
}
