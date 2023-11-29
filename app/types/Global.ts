import { ImageAsset } from '@sanity/types';

export interface Global {
  _id: string;
  _type: 'global';
  title?: string;
  mainImage?: ImageAsset;
  imageOverlays?: ImageAsset[];
  aboutHeadline: string;
  aboutText: string;
  aboutImage: ImageAsset;
}
