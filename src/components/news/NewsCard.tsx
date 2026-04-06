import Image from "next/image";
import Link from "next/link";
import type { NewsArticle } from "@/types/news";
import { formatDate } from "@/lib/utils/formatDate";

export function NewsCard({ article }: { article: NewsArticle }) {
  return (
    <Link
      href={`/news/${article.slug}`}
      className="group rounded-3xl border border-border bg-bg-secondary/70 p-6 transition hover:-translate-y-1"
    >
      <div className="overflow-hidden rounded-2xl">
        <Image
          src={article.cover_image ?? "/images/news/news-1.svg"}
          alt={article.title}
          width={320}
          height={220}
          className="h-44 w-full object-cover grayscale transition group-hover:grayscale-0"
        />
      </div>
      <div className="mt-4 space-y-2">
        <h3 className="font-display text-lg uppercase tracking-wide">
          {article.title}
        </h3>
        <p className="text-sm text-text-secondary">{article.excerpt}</p>
        <p className="text-xs uppercase tracking-[0.3em] text-text-secondary">
          {article.published_at ? formatDate(article.published_at) : ""}
        </p>
      </div>
    </Link>
  );
}
