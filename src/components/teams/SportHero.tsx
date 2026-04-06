import Image from "next/image";

export function SportHero({
  name,
  banner,
  record,
}: {
  name: string;
  banner: string;
  record: string;
}) {
  return (
    <section className="relative overflow-hidden">
      <Image
        src={banner}
        alt={name}
        fill
        sizes="100vw"
        className="object-cover opacity-50"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/70 to-transparent" />
      <div className="relative mx-auto w-full max-w-6xl px-6 py-20">
        <h1 className="font-display text-4xl uppercase tracking-wide sm:text-6xl">
          {name}
        </h1>
        <p className="mt-3 text-sm uppercase tracking-[0.3em] text-text-secondary">
          {record}
        </p>
      </div>
    </section>
  );
}
