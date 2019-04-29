const SVM = require('libsvm-js/asm');
const Base = require('../base');
const { accuracyScore } = require('../metrics');

class NuSVR extends Base {
  constructor({
    nu = 0.5,
    C = 1.0,
    kernel = 'rbf',
    coef0 = 0.0,
    tol = 0.001,
    epsilon = 0.1,
  } = {}) {
    super();
    this.model = new SVM({
      type: SVM.SVM_TYPES.EPSILON_SVR,
      kernel: SVM.KERNEL_TYPES[kernel.toUpperCase()],
      tolerance: tol,
      epsilon,
      cost: C,
      coef0,
      quiet: true,
    });
    this.params = {
      nu,
      C,
      kernel,
      coef0,
      tol,
      epsilon,
    };
  }
  
  fit(X, y) {
    this.model.train(X, y);
  }

  predict(X) {
    return this.model.predict(X);
  }

  score(X, y) {
    return accuracyScore(this.predict(X), y);
  }

  // TODO
  // Returns the coefficient of determination R^2 of the prediction.
  __score(X, y) {
  }
}

module.exports = NuSVR;
