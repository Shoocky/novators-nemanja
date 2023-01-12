export enum GroupCode {
  "hero-banner",
  "category_lister",
}

export type GroupCodeConfigType = { [key in keyof typeof GroupCode]: string };

export const GroupCodeConfig: GroupCodeConfigType = {
  category_lister: "CategoryLister",
  "hero-banner": "HeroBanner",
};

export type GroupElement = {
  code: string;
  markdown_content: string;
};

export type Group = {
  code: GroupCode;
  elements: GroupElement[];
};
