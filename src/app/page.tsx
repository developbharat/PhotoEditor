import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Photo Editor | Develop Bharat",
  description: "Edit your photos in a secure environment.",
};

export default function Home() {
  return (
    <main>
      <h1>
        You can visit tool at:{" "}
        <Link
          className="text-blue-600 hover:text-blue-800 underline"
          href={"/photos"}
        >
          Photo Editor
        </Link>
      </h1>
    </main>
  );
}
