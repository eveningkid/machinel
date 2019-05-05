import { FeaturesArray, LabelsArray } from '../types';

type Seed = any;

let randomIteration = 0;
function random(n = 1, seed: Seed = null) {
  if (typeof seed !== "undefined") {
    randomIteration++;
    return randomIteration % n;
  }

  return Math.floor(Math.random() * n);
}

interface MakeClassificationOptions {
  nSamples?: number,
  nFeatures?: number,
  nClasses?: number,
  randomState?: number
}

export function makeClassification({
  nSamples = 100,
  nFeatures = 20,
  nClasses = 2,
  randomState = null
}: MakeClassificationOptions = {}): Array<FeaturesArray | LabelsArray> {
  const X = [];
  const y = [];

  for (let i = 0; i < nSamples; i++) {
    const sample = [];
    for (let j = 0; j < nFeatures; j++) {
      sample.push(random(nFeatures, randomState));
    }

    X.push(sample);
    y.push(random(nClasses, randomState));
  }
  
  return [X, y];
}
