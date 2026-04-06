import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleBody } from "@/components/news/ArticleBody";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getNewsBySlug, getNews } from "@/lib/data";
import { formatDate } from "@/lib/utils/formatDate";

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getNewsBySlug(slug);
  if (!article) {
    notFound();
  }

  const related = (await getNews()).filter((item) => item.id !== article.id);

  return (
    <div className="mx-auto w-full max-w-5xl space-y-10 px-6 py-16">
      <SectionHeading title={article.title} subtitle={article.excerpt ?? ""} />
      <Image
        src={article.cover_image ?? "/images/news/news-1.svg"}
        alt={article.title}
        width={960}
        height={520}
        className="h-64 w-full rounded-3xl object-cover"
      />
      <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-text-secondary">
        <span>{article.author_name ?? "SG Sports"}</span>
        <span>{article.published_at ? formatDate(article.published_at) : ""}</span>
      </div>
      <ArticleBody
        html={
          article.body ??
          "<p>SG Sports continues to set the pace with record-breaking performances and powerful team synergy.</p><p>Stay connected for updates, match results, and athlete spotlights.</p>"
        }
      />
      <div className="rounded-3xl border border-border bg-bg-secondary/70 p-6">
        <h3 className="font-display text-lg uppercase tracking-wide">
          Related Articles
        </h3>
        <div className="mt-4 space-y-2 text-sm text-text-secondary">
          {related.slice(0, 3).map((item) => (
            <Link key={item.id} href={`/news/${item.slug}`}>
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
