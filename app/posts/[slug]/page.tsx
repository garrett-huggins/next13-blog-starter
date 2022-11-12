import { getPostBySlug } from "../../../lib/api";
import markdownToHtml from "../../../lib/markdownToHtml";
import markdownStyles from "./markdown-styles.module.css";

export default async function Post({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug, ["title", "author", "content"]);

  const content = await markdownToHtml(post.content || "");

  return (
    <div className="container mx-auto">
      <main>
        <div className="w-full h-16  text-white">
          <p className="text-2xl">{post.title}</p>
          <p className="text-gray-400">{post.author}</p>
          <div
            className={markdownStyles["markdown"]}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </main>
    </div>
  );
}
