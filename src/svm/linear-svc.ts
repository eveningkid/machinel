import SVM from 'libsvm-js/asm';
import Base from '../base';
import { accuracyScore } from '../metrics';
import { FeaturesArray, LabelsArray } from '../types';

export default class LinearSVC extends Base {
  model: any;
  
  constructor({
    tol = 0.0001,
    C = 1.0,
  } = {}) {
    super();
    this.model = new SVM({
      kernel: SVM.KERNEL_TYPES.LINEAR,
      tolerance: tol,
      cost: C,
      quiet: true,
    });
    this.params = {
      tol,
      C,
    };
  }

  // TODO
  __decisionFunction(X: FeaturesArray) {
  }
  
  // TODO
  __densify() {
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
  
  // TODO
  __sparsify() {
  }
}
