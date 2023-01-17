export interface DoughStateModel {
  weight: number;
  count: number;
  unit: WeightUnitTypes;
}

export const DoughStateModelDefaults: DoughStateModel = {
  weight: 250,
  count: 2,
  unit: 'g',
};

export type WeightUnitTypes = 'g' | 'oz';
export interface WeightUnit {
  label: string;
  inGrams: number;
  weight: {
    step: number;
    min: number;
  };
}

export const weightUnits: Map<WeightUnitTypes, WeightUnit> = new Map([
  ['g', { label: 'grams', inGrams: 1, weight: { step: 10, min: 30 } }],
  ['oz', { label: 'ounces', inGrams: 0.03527396, weight: { step: 1, min: 1 } }],
]);
