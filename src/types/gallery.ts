export type GalleryItem = {
  id: string;
  title?: string | null;
  image_url: string;
  media_type?: string | null;
  sport_id?: string | null;
  event_id?: string | null;
  player_id?: string | null;
  tags?: string[] | null;
  is_featured?: boolean | null;
  uploaded_at?: string | null;
};
