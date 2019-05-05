import SVM from 'libsvm-js/asm';
import Base from '../base';
import { accuracyScore } from '../metrics';
import { FeaturesArray, LabelsArray } from '../types';

export default class SVR extends Base {
  model: any;
  gamma: string | number;
  
  constructor({
    kernel = 'rbf',
    gamma = 'auto',
    coef0 = 0.0,
    tol = 0.001,
    C = 1.0,
    epsilon = 0.1,
  } = {}) {
    super();
    this.model = new SVM({
      type: SVM.SVM_TYPES.EPSILON_SVR,
      kernel: SVM.KERNEL_TYPES[kernel.toUpperCase()],
      cost: C,
      coef0,
      epsilon,
      quiet: true,
    });
    this.gamma = gamma;
    this.params = {
      kernel,
      gamma,
      coef0,
      tol,
      C,
      epsilon,
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
