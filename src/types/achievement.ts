export type Achievement = {
  id: string;
  title: string;
  description?: string | null;
  achievement_type: string;
  medal_type?: string | null;
  level?: string | null;
  sport_id?: string | null;
  team_id?: string | null;
  date_achieved?: string | null;
  image_url?: string | null;
  created_at?: string | null;
};

export type PlayerAchievement = {
  id: string;
  player_id: string;
  achievement_id: string;
  role?: string | null;
};
