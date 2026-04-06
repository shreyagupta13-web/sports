export type Player = {
  id: string;
  user_id?: string | null;
  slug: string;
  full_name: string;
  date_of_birth?: string | null;
  gender?: string | null;
  jersey_number?: number | null;
  profile_photo?: string | null;
  banner_photo?: string | null;
  bio?: string | null;
  hometown?: string | null;
  state?: string | null;
  email?: string | null;
  phone?: string | null;
  position?: string | null;
  sport_id?: string | null;
  team_id?: string | null;
  membership_date?: string | null;
  membership_status?: string | null;
  is_captain?: boolean | null;
  is_featured?: boolean | null;
  years_in_club?: number | null;
  created_at?: string | null;
  updated_at?: string | null;
};

export type PlayerStat = {
  id: string;
  player_id: string;
  stat_key: string;
  stat_value: string;
  stat_unit?: string | null;
  season?: string | null;
  updated_at?: string | null;
};

export type PlayerSkill = {
  id: string;
  player_id: string;
  skill_name: string;
  score: number;
};
