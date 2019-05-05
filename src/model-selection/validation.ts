import crossValidation from 'ml-cross-validation';
import { FeaturesArray, LabelsArray } from '../types';

export function crossValScore(
  estimator: any,
  X: FeaturesArray,
  y: LabelsArray,
  { cv = 3 } = {}
): number {
  // TODO should instead add a method to reset an estimator to its
  // default parameters (no training) right inside the classes
  const getOriginalEstimator = function () { return estimator; };

  class WrappedEstimator {
    options: any;
    estimator: any;

    constructor(options: any = {}) {
      this.options = options;
      this.estimator = getOriginalEstimator();
    }

    train(X: FeaturesArray, y: LabelsArray) {
      this.estimator.fit(X, y);
    }

    predict(X: FeaturesArray): LabelsArray {
      return this.estimator.predict(X);
    }
  }

  return crossValidation
    .kFold(WrappedEstimator, X, y, {}, cv)
    .getAccuracy();
}
