/* GROUPS */

export enum GroupCode {
  "hero-banner",
  "category_lister",
}
export type GroupCodeConfigType = { [key in keyof typeof GroupCode]: string };

export const GroupCodeConfig: GroupCodeConfigType = {
  category_lister: "CategoryLister",
  "hero-banner": "HeroBanner",
};

export type Group = {
  code: GroupCode;
  elements: Element[];
};

/* Elements */

export enum ElementCode {
  "hero_banner_content",
  "product_tag_groups",
}

export type ElementCodeConfigType = {
  [key in keyof typeof ElementCode]: string;
};

export const ElementCodeConfig: ElementCodeConfigType = {
  hero_banner_content: "HeroBannerContent",
  product_tag_groups: "ProductTagGroups",
};

export interface Element {
  code: ElementCode;
  configuration?: any;
  markdown_content?: string;
  media: Media;
}

/* Media */

export type Media = {
  media_url: string;
  media_alt: string;
};

export type URL = {
  code: string;
  name: string;
  target: string;
  url: string;
};
