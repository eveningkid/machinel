export interface Feature {
  [index: number]: string | number;
}

export interface FeaturesArray {
  [index: number]: Feature;
  [index: string]: function,
}

export type Label = string | number;

export interface LabelsArray {
  [index: number]: Label;
  [index: string]: function,
}
