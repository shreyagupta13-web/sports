import { createSupabaseServerClient } from "@/lib/supabase/server";
import { achievements, events, gallery, news, playerSkills, playerStats, players, sports, teams } from "@/lib/data/seed";
import type { Achievement } from "@/types/achievement";
import type { Event } from "@/types/event";
import type { GalleryItem } from "@/types/gallery";
import type { NewsArticle } from "@/types/news";
import type { Player, PlayerSkill, PlayerStat } from "@/types/player";
import type { Team } from "@/types/team";

type QueryResult<T> = {
  data: T | null;
  error: { message: string } | null;
};

async function safeQuery<T>(query: PromiseLike<QueryResult<T>>, fallback: T) {
  try {
    const { data, error } = await query;
    if (error || !data) {
      return fallback;
    }
    return data;
  } catch {
    return fallback;
  }
}

export async function getSports() {
  const supabase = await createSupabaseServerClient();
  if (!supabase) {
    return sports;
  }
  return safeQuery(
    supabase.from("sports").select("*").order("name"),
    sports
  );
}

export async function getTeams() {
  const supabase = await createSupabaseServerClient();
  if (!supabase) {
    return teams;
  }
  return safeQuery(supabase.from("teams").select("*"), teams);
}

export async function getTeamBySlug(slug: string): Promise<Team | null> {
  const supabase = await createSupabaseServerClient();
  if (!supabase) {
    return teams.find((team) => team.slug === slug) ?? null;
  }

  const { data } = await supabase
    .from("teams")
    .select("*")
    .eq("slug", slug)
    .single();
  return data ?? null;
}

export async function getPlayers(): Promise<Player[]> {
  const supabase = await createSupabaseServerClient();
  if (!supabase) {
    return players;
  }
  return safeQuery(supabase.from("players").select("*"), players);
}

export async function getFeaturedPlayers(): Promise<Player[]> {
  const allPlayers = await getPlayers();
  return allPlayers.filter((player) => player.is_featured);
}

export async function getPlayerBySlug(slug: string): Promise<Player | null> {
  const supabase = await createSupabaseServerClient();
  if (!supabase) {
    return players.find((player) => player.slug === slug) ?? null;
  }

  const { data } = await supabase
    .from("players")
    .select("*")
    .eq("slug", slug)
    .single();
  return data ?? null;
}

export async function getPlayerStats(playerId: string): Promise<PlayerStat[]> {
  const supabase = await createSupabaseServerClient();
  if (!supabase) {
    return playerStats.filter((stat) => stat.player_id === playerId);
  }
  return safeQuery(
    supabase.from("player_stats").select("*").eq("player_id", playerId),
    playerStats.filter((stat) => stat.player_id === playerId)
  );
}

export async function getPlayerSkills(playerId: string): Promise<PlayerSkill[]> {
  const supabase = await createSupabaseServerClient();
  if (!supabase) {
    return playerSkills.filter((skill) => skill.player_id === playerId);
  }
  return safeQuery(
    supabase.from("player_skills").select("*").eq("player_id", playerId),
    playerSkills.filter((skill) => skill.player_id === playerId)
  );
}

export async function getAchievements(): Promise<Achievement[]> {
  const supabase = await createSupabaseServerClient();
  if (!supabase) {
    return achievements;
  }
  return safeQuery(supabase.from("achievements").select("*"), achievements);
}

export async function getEvents(): Promise<Event[]> {
  const supabase = await createSupabaseServerClient();
  if (!supabase) {
    return events;
  }
  return safeQuery(supabase.from("events").select("*"), events);
}

export async function getEventBySlug(slug: string): Promise<Event | null> {
  const supabase = await createSupabaseServerClient();
  if (!supabase) {
    return events.find((event) => event.slug === slug) ?? null;
  }
  const { data } = await supabase
    .from("events")
    .select("*")
    .eq("slug", slug)
    .single();
  return data ?? null;
}

export async function getNews(): Promise<NewsArticle[]> {
  const supabase = await createSupabaseServerClient();
  if (!supabase) {
    return news;
  }
  return safeQuery(supabase.from("news").select("*"), news);
}

export async function getNewsBySlug(slug: string): Promise<NewsArticle | null> {
  const supabase = await createSupabaseServerClient();
  if (!supabase) {
    return news.find((article) => article.slug === slug) ?? null;
  }
  const { data } = await supabase
    .from("news")
    .select("*")
    .eq("slug", slug)
    .single();
  return data ?? null;
}

export async function getGallery(): Promise<GalleryItem[]> {
  const supabase = await createSupabaseServerClient();
  if (!supabase) {
    return gallery;
  }
  return safeQuery(supabase.from("gallery").select("*"), gallery);
}
