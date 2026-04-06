import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { NewsCard } from "@/components/news/NewsCard";
import { getNews } from "@/lib/data";

export default async function NewsPage() {
  const news = await getNews();
  const [featured, ...rest] = news;

  return (
    <div className="mx-auto w-full max-w-6xl space-y-10 px-6 py-16">
      <SectionHeading
        title="Club News"
        subtitle="Announcements, match reports, and SG Sports updates."
      />
      {featured ? (
        <Link
          href={`/news/${featured.slug}`}
          className="group grid gap-6 rounded-3xl border border-border bg-bg-secondary/70 p-6 lg:grid-cols-[1.2fr_0.8fr]"
        >
          <Image
            src={featured.cover_image ?? "/images/news/news-1.svg"}
            alt={featured.title}
            width={420}
            height={280}
            className="h-full min-h-[220px] w-full rounded-2xl object-cover grayscale transition group-hover:grayscale-0"
          />
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-text-secondary">
              Featured
            </p>
            <h2 className="mt-4 font-display text-2xl uppercase tracking-wide">
              {featured.title}
            </h2>
            <p className="mt-2 text-sm text-text-secondary">
              {featured.excerpt}
            </p>
          </div>
        </Link>
      ) : null}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {rest.map((article) => (
          <NewsCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}
