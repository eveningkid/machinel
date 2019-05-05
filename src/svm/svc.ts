import SVM from 'libsvm-js/asm';
import Base from '../base';
import { accuracyScore } from '../metrics';
import { FeaturesArray, LabelsArray } from '../types';

export default class SVC extends Base {
  model: any;

  constructor({
    C = 1.0,
    kernel = 'rbf',
    gamma = 'auto',
    coef0 = 0.0,
    tol = 0.0001,
  } = {}) {
    super();
    this.model = new SVM({
      cost: C,
      kernel: SVM.KERNEL_TYPES[kernel.toUpperCase()],
      tolerance: tol,
      quiet: true,
      coef0,
    });

    if (gamma !== 'auto') {
      this.model.options.gamma = gamma;
    }

    this.params = {
      C,
      kernel,
      gamma,
      coef0,
    };
  }

  // TODO
  __decisionFunction(X: FeaturesArray) {
  }
  
  // TODO
  __densify() {
  }	
  
  fit(X: FeaturesArray, y: LabelsArray) {
    this.model.train(X, y);
    return this;
  }

  predict(X: FeaturesArray): LabelsArray {
    return this.model.predict(X);
  }

  score(X: FeaturesArray, y: LabelsArray): number {
    return accuracyScore(this.predict(X), y);
  }
  
  // TODO
  __sparsify() {
  }
}
