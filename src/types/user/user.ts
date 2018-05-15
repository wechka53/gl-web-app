export interface User {
  activated: number | boolean;
  email: string;
  id: string;
  name: string;
  roles: string[];
  created_at: string;
  updated_at: string;
}