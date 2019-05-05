import { FeaturesArray, LabelsArray } from '../types';

type DataIrisDataset = Array<FeaturesArray | LabelsArray>;

interface FullIrisDataset {
  // TODO
  data: any,
  target: any,
  featureNames: Array<string>
}

type IrisDataset = FullIrisDataset | DataIrisDataset;

export function loadIris(returnXy = false): IrisDataset {
  const iris = require('ml-dataset-iris');
  const data = iris.getNumbers();
  let target = iris.getClasses();
  const features = iris.getDistinctClasses();

  const featuresMapping: any = {};
  for (let i = 0; i < features.length; i++) {
    featuresMapping[features[i]] = i;
  }

  for (let i = 0; i < target.length; i++) {
    target[i] = featuresMapping[target[i]];
  }

  if (returnXy) {
    return [data, target];
  }
  
  return {
    data,
    target,
    featureNames: [
      'sepal length (cm)',
      'sepal width (cm)',
      'petal length (cm)',
      'petal width (cm)'
    ],
  };
}
