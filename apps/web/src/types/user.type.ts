export type User = {
  id: number;
  name: string;
  email: string;
  bio: string | null;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
};
