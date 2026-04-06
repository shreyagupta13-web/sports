export type NewsArticle = {
  id: string;
  title: string;
  slug: string;
  excerpt?: string | null;
  body?: string | null;
  cover_image?: string | null;
  author_name?: string | null;
  sport_id?: string | null;
  tags?: string[] | null;
  is_published?: boolean | null;
  published_at?: string | null;
  created_at?: string | null;
};
