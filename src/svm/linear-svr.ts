import SVM from 'libsvm-js/asm';
import Base from '../base';
import { FeaturesArray, LabelsArray } from '../types';

export default class LinearSVR extends Base {
  model: any;
  
  constructor({
    epsilon = 0.0,
    tol = 0.0001,
    C = 1.0,
  } = {}) {
    super();
    this.model = new SVM({
      type: SVM.SVM_TYPES.EPSILON_SVR,
      kernel: SVM.KERNEL_TYPES.LINEAR,
      tolerance: tol,
      epsilon,
      cost: C,
      quiet: true,
    });
    this.params = {
      epsilon,
      tol,
      C,
    };
  }
  
  fit(X: FeaturesArray, y: LabelsArray) {
    this.model.train(X, y);
    return this;
  }

  predict(X: FeaturesArray): LabelsArray {
    return this.model.predict(X);
  }

  // Returns the coefficient of determination R^2 of the prediction.
  __score(X: FeaturesArray, y: LabelsArray) {
  }
}
