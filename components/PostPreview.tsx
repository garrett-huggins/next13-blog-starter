import DateFormatter from "./DateFormatter";
import Image from "next/image";
import Link from "next/link";

type Items = {
  [key: string]: string;
};

export default function PostPreview({ post }: { post: Items }) {
  return (
    <Link href={`/posts/${post.slug}`}>
      <div className="max-w-[400px] space-y-2 mx-auto group">
        <Image
          alt={`cover image for ${post.title}`}
          src={post.coverImage}
          width={400}
          height={400}
        />
        <p className="font-semibold text-xl group-hover:underline">
          {post.title}
        </p>
        <DateFormatter dateString={post.date} />
        <p>{post.excerpt}</p>
      </div>
    </Link>
  );
}
