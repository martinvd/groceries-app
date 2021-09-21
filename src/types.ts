export type GroceryBase = {
  name: string;
  description: string;
};

export interface GroceryWithAdditionalInformation extends GroceryBase {
  images?: never;
  additionalInformation: string;
}

export interface GroceryWithImages extends GroceryBase {
  images: string[];
  additionalInformation?: never;
}

export type Grocery = GroceryWithAdditionalInformation | GroceryWithImages;
