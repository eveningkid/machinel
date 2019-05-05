import { DecisionTreeClassifier as MLDecisionTreeClassifier } from 'ml-cart';
import Base from '../base';
import { accuracyScore } from '../metrics';
import { FeaturesArray, LabelsArray } from '../types';

export default class DecisionTreeClassifier extends Base {
  classifier: any;

  constructor({
    criterion = 'gini',
    maxDepth = Infinity,
    minSamples = 2,
    splitter = 'mean',
  } = {}) {
    super();
    this.classifier = new MLDecisionTreeClassifier({
      gainFunction: criterion,
      splitFunction: splitter,
      minNumSamples: minSamples,
      maxDepth: maxDepth,
    });
    this.params = {
      criterion,
      maxDepth,
      minSamples,
      splitter,
    };
  }

  // TODO
  __apply(X: FeaturesArray, checkInput: any) {
  }

  // TODO
  __decisionPath(X: FeaturesArray, checkInput: any) {
  }

  fit(X: FeaturesArray, y: LabelsArray) {
    this.classifier.train(X, y);
    return this;
  }

  predict(X: FeaturesArray): LabelsArray {
    return this.classifier.predict(X);
  }

  // TODO
  __predictLogProba(X: FeaturesArray) {
  }

  // TODO
  __predictProba(X: FeaturesArray, checkInput: any) {
  }

  score(X: FeaturesArray, y: LabelsArray, sampleWeight: Array<number>): number {
    return accuracyScore(this.predict(X), y);
  }
}
