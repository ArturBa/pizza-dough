export interface DoughStateModel {
  weight: number;
  count: number;
  unit: WeightUnitTypes | undefined;
}

export type WeightUnitTypes = 'g' | 'oz';
export interface WeightUnit {
  label: string;
}

export const weightUnits: Map<WeightUnitTypes, WeightUnit> = new Map([
  ['g', { label: 'grams' }],
  ['oz', { label: 'ounces' }],
]);
