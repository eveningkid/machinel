import SVM from 'libsvm-js/asm';
import Base from '../base';
import { accuracyScore } from '../metrics';
import { FeaturesArray, LabelsArray } from '../types';

export default class NuSVC extends Base {
  model: any;
  
  constructor({
    nu = 0.5,
    kernel = 'rbf',
    coef0 = 0.0,
    tol = 0.001,
  } = {}) {
    super();
    this.model = new SVM({
      nu,
      coef0,
      kernel: SVM.KERNEL_TYPES[kernel.toUpperCase()],
      tolerance: tol,
      quiet: true,
    });
    this.params = {
      nu,
      kernel,
      coef0,
      tol,
    };
  }

  // TODO
  __decisionFunction(X: FeaturesArray) {
  }
  
  fit(X: FeaturesArray, y: LabelsArray) {
    this.model.train(X, y);
    return this;
  }

  predict(X: FeaturesArray): LabelsArray {
    return this.model.predict(X);
  }

  score(X: FeaturesArray, y: LabelsArray): number {
    return accuracyScore(this.predict(X), y);
  }
}
