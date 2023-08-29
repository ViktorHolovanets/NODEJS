import User from "@/models/user";

export default interface Band {
  id: string;
  avatar: string;
  name: string;
  producer: {
    id: string;
    user: User | null;
  };
  createdAt: string;
  fullInfo: string;
  isBlocked: boolean;
  countMembers: number;
  countSongs: number;
  countFollowers: number;
  countAlbums: number;
}
