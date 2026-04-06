export type UserProfile = {
  id: string;
  email: string;
  full_name?: string | null;
  role?: "member" | "admin" | "coach" | null;
  avatar_url?: string | null;
  created_at?: string | null;
};
