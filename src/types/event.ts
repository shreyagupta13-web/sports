export type Event = {
  id: string;
  title: string;
  slug: string;
  sport_id?: string | null;
  team_id?: string | null;
  event_type?: string | null;
  status?: string | null;
  start_date: string;
  end_date?: string | null;
  venue?: string | null;
  city?: string | null;
  description?: string | null;
  result?: string | null;
  result_detail?: string | null;
  banner_url?: string | null;
  is_featured?: boolean | null;
  created_at?: string | null;
};
