export type Team = {
  id: string;
  name: string;
  slug: string;
  sport_id?: string | null;
  captain_id?: string | null;
  coach_name?: string | null;
  founded_year?: number | null;
  team_photo?: string | null;
  description?: string | null;
  wins?: number | null;
  losses?: number | null;
  draws?: number | null;
  tournaments_won?: number | null;
  is_active?: boolean | null;
  created_at?: string | null;
};
