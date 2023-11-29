import { Slug, ImageAsset } from '@sanity/types';

export interface Release {
  _id: string;
  _type: 'global';
  slug: Slug;
  title?: string;
  date: string;
  youtubeId: string;
  albumCover: ImageAsset;
  spotifyLink: string;
  appleMusicLink: string;
}
