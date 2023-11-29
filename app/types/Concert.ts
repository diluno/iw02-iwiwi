import { Slug } from '@sanity/types';

export interface Concert {
  _id: string;
  _type: 'global';
  slug: Slug;
  title?: string;
  date: string;
  location: string;
}
