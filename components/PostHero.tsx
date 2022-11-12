import DateFormatter from "./DateFormatter";
import Image from "next/image";
import Link from "next/link";
import { getPostBySlug } from "../lib/api";

type Items = {
  [key: string]: string;
};

export default function PostHero() {
  const heroPost = getPostBySlug("hero-post", [
    "title",
    "excerpt",
    "slug",
    "date",
    "coverImage",
  ]);

  return (
    <Link href={`/posts/${heroPost.slug}`}>
      <div className="w-full mx-auto group">
        <Image
          alt={`cover image for ${heroPost.title}`}
          src={heroPost.coverImage}
          width={400}
          height={400}
          style={{ width: "100%" }}
        />

        <div className="grid mt-4 md:grid-cols-2 grid-cols-1">
          <div className="mb-2">
            <p className="font-semibold text-xl group-hover:underline">
              {heroPost.title}
            </p>
            <DateFormatter dateString={heroPost.date} />
          </div>
          <p>{heroPost.excerpt}</p>
        </div>
      </div>
    </Link>
  );
}
