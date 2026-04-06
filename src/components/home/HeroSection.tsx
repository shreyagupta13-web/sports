import Image from "next/image";
import { AnimatedIcon } from "@/components/ui/AnimatedIcon";
import { Button } from "@/components/ui/Button";
import { SportTicker } from "@/components/home/SportTicker";
import { Reveal } from "@/components/ui/Reveal";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="scanlines absolute inset-0" />
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
        <div className="space-y-8">
          <Reveal>
            <div className="flex items-center gap-4 text-xs uppercase tracking-[0.4em] text-text-secondary">
              <span className="h-[1px] w-10 bg-accent-lime" />
              Stadium Energy Series
            </div>
          </Reveal>
          <Reveal>
            <h1 className="font-display text-4xl uppercase tracking-wide text-text-primary sm:text-6xl">
              SG Sports Club
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-xl text-base text-text-secondary sm:text-lg">
              One club. Many champions. Step into the SG arena where every
              athlete story, team roster, and trophy moment comes alive.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="flex flex-wrap gap-4">
              <Button label="Meet Our Players" href="/players" />
              <Button label="Explore Sports" href="/teams" variant="outline" />
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="flex items-center gap-6 text-xs uppercase tracking-[0.4em] text-text-secondary">
              <span className="font-stat text-4xl text-accent-lime">01</span>
              <span>Season of Champions</span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="relative">
          <div className="relative overflow-hidden rounded-[32px] border border-border bg-bg-secondary/60 p-4">
            <Image
              src="/images/hero/cricket.svg"
              alt="SG Sports stadium hero"
              width={640}
              height={480}
              className="w-full rounded-[24px] object-cover"
              priority
            />
            <div className="absolute left-6 top-6 flex items-center gap-3 rounded-full border border-border bg-bg-secondary/80 px-4 py-2">
              <AnimatedIcon />
              <span className="text-xs uppercase tracking-[0.4em] text-text-secondary">
                Live Match Feel
              </span>
            </div>
          </div>
          <div className="absolute -right-6 -bottom-6 hidden rounded-full border border-border bg-bg-secondary px-6 py-4 text-xs uppercase tracking-[0.4em] text-text-secondary lg:flex">
            Elite Athletes 320+
          </div>
        </Reveal>
      </div>
      <SportTicker />
    </section>
  );
}
