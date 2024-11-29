interface Urls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
}

interface IUser {
  id: string;
  username: string;
  name: string;
  first_name: string;
  last_name: string;
  portfolio_url: string;
}

interface ITag {
  type: string;
  title: string;
}

export interface IGallery {
  id: string;
  slug: string;
  created_at: string;
  promoted_at: string | null;
  width: number;
  height: number;
  color: string;
  description: string | null;
  urls: Urls;
  likes: number;
  asset_type: string;
  user: IUser;
  tags: ITag[];
}
