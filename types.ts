/* GROUPS */

export enum GroupCode {
  "hero-banner",
  "category_lister",
}
export type GroupCodeConfigType = { [key in keyof typeof GroupCode]: string };

export const GroupCodeConfig: GroupCodeConfigType = {
  "hero-banner": "HeroBanner",
  category_lister: "CategoryLister",
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

// element can probably be further moved into union of possible element types (herobanner, product tag groups etc...)
export interface Element {
  code: ElementCode;
  configuration: Configuration[];
  markdown_content?: string;
  linked_product_tag_groups: LinkedProductTagGroup[];
  media: Media[];
  urls: URL[];
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

/* Configuration */

export type Configuration = {
  height?: number;
};

/* Product tag group */
export type ProductTag = {
  name?: string;
  media_alt?: string;
  media_url?: string;
  url?: string;
};

export type LinkedProductTag = {
  product_tag: ProductTag[];
};

export type ProductTagGroup = {
  name: string;
  linked_product_tags: LinkedProductTag[];
};

export type LinkedProductTagGroup = {
  product_tag_group: ProductTagGroup;
};
