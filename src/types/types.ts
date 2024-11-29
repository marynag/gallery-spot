interface IUrls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
}

interface IUserProfileImage {
  small: string;
  medium: string;
  large: string;
}

interface IUserSocial {
  instagram_username: string;
  portfolio_url: string;
  twitter_username: string;
  paypal_email: string | null;
}

interface IUser {
  id: string;
  updated_at: string;
  username: string;
  name: string;
  first_name: string;
  last_name: string;
  twitter_username: string;
  portfolio_url: string;
  bio: string;
  location: string | null;
  links: IUserLinks;
  profile_image: IUserProfileImage;
  instagram_username: string;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  total_promoted_photos: number;
  total_illustrations: number;
  total_promoted_illustrations: number;
  accepted_tos: boolean;
  for_hire: boolean;
  social: IUserSocial;
}

interface ILinks {
  self: string;
  html: string;
  download: string;
  download_location: string;
}

export interface IPhoto {
  id: string;
  slug: string;
  created_at: string;
  updated_at: string;
  promoted_at: string | null;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: string | null;
  alt_description: string;
  tags?: ITag[] | undefined;
  breadcrumbs: any[];
  urls: IUrls;
  links: ILinks;
  likes: number;
  liked_by_user: boolean;
  current_user_collections: any[];
  asset_type: string;
  user: IUser;
}

interface IUserLinks {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
  following: string;
  followers: string;
}

interface ISocial {
  instagram_username: string | null;
  portfolio_url: string | null;
  twitter_username: string | null;
  paypal_email: string | null;
}

interface ITagSource {
  ancestry: {
    type: {
      slug: string;
      pretty_slug: string;
      redirect: string | null;
    };
  };
  title: string;
  subtitle: string;
  description: string;
  redirect: string | null;
  meta_title: string;
  meta_description: string;
  cover_photo: IPhoto;
  affiliate_search_query: string | null;
}

interface ITag {
  type: string;
  title: string;
  source?: ITagSource;
}

interface ICollectionLinks {
  self: string;
  html: string;
  photos: string;
  related: string;
}

interface IPreviewPhoto {
  id: string;
  slug: string;
  created_at: string;
  updated_at: string;
  blur_hash: string;
  asset_type: string;
  urls: IUrls;
}

export interface ICollection {
  id: string;
  title: string;
  description: string | null;
  published_at: string;
  last_collected_at: string;
  updated_at: string;
  featured: boolean;
  total_photos: number;
  private: boolean;
  share_key: string;
  tags: ITag[];
  links: ICollectionLinks;
  user: IUser;
  cover_photo: IPhoto;
  preview_photos: IPreviewPhoto[];
}
