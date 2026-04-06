import { ClubStatsBar } from "@/components/home/ClubStatsBar";
import { FeaturedPlayers } from "@/components/home/FeaturedPlayers";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { HeroSection } from "@/components/home/HeroSection";
import { LatestNews } from "@/components/home/LatestNews";
import { RecentAchievements } from "@/components/home/RecentAchievements";
import { SportsWePlay } from "@/components/home/SportsWePlay";
import { UpcomingEvents } from "@/components/home/UpcomingEvents";
import {
  getAchievements,
  getEvents,
  getFeaturedPlayers,
  getGallery,
  getNews,
  getSports,
} from "@/lib/data";

export default async function Home() {
  const [sports, featuredPlayers, achievements, events, news, gallery] =
    await Promise.all([
      getSports(),
      getFeaturedPlayers(),
      getAchievements(),
      getEvents(),
      getNews(),
      getGallery(),
    ]);

  return (
    <div className="flex flex-col gap-8">
      <HeroSection />
      <ClubStatsBar />
      <SportsWePlay sports={sports} />
      <FeaturedPlayers players={featuredPlayers} />
      <RecentAchievements achievements={achievements} />
      <UpcomingEvents events={events} />
      <LatestNews news={news} />
      <GalleryPreview items={gallery} />
    </div>
  );
}
