import { Label, LabelsArray } from '../types';

export function accuracyScore(predictions: LabelsArray, y: LabelsArray): number {
  const correctPredictionsCount = predictions.filter((prediction: Label, i: number) => {
    return y[i] === prediction;
  }).length;
  return correctPredictionsCount / y.length;
}
