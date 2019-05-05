import KNN from 'ml-knn';
import Base from '../base';
import { accuracyScore } from '../metrics';
import { FeaturesArray, LabelsArray } from '../types';

export default class KNeighborsClassifier extends Base {
  knn: any;

  constructor({
    nNeighbors = 5,
  } = {}) {
    super();
    this.knn = null;
    this.params = {
      nNeighbors,
    };
  }

  fit(X: FeaturesArray, y: LabelsArray) {
    this.knn = new KNN(X, y, this.params);
    return this;
  }

  // TODO
  __kneighbors(X: FeaturesArray, nNeighbors: number, returnDistance: number) {
  }

  // TODO
  __kneighborsGraph(X: FeaturesArray, nNeighbors: number, mode: string) {
  }

  predict(X: FeaturesArray): LabelsArray {
    return this.knn.predict(X);
  }

  // TODO
  __predictProba(X: FeaturesArray) {
    // TODO
    // predictProba so it returns an array with
    // probability for each class given a sample
  }

  score(X: FeaturesArray, y: LabelsArray): number {
    return accuracyScore(this.predict(X), y);
  }
}
