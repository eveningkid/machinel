import MLNaiveBayes from 'ml-naivebayes';
import Base from '../base';
import { accuracyScore } from '../metrics';
import { FeaturesArray, LabelsArray } from '../types';

export default class MultinomialNB extends Base {
  model: any;
  
  constructor() {
    super();
    this.model = new MLNaiveBayes.MultinomialNB();
  }

  fit(X: FeaturesArray, y: LabelsArray) {
    this.model.train(X, y);
    return this;
  }

  // TODO
  __partialFit(X: FeaturesArray, y: LabelsArray, classes: Array<any>) {
  }

  predict(X: FeaturesArray): LabelsArray {
    return this.model.predict(X);
  }

  // TODO
  __predictLogProba(X: FeaturesArray) {
  }

  // TODO
  __predictProba(X: FeaturesArray) {
  }

  score(X: FeaturesArray, y: LabelsArray): number {
    return accuracyScore(this.predict(X), y);
  }
}
