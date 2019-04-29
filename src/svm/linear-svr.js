const SVM = require('libsvm-js/asm');
const Base = require('../base');

class LinearSVR extends Base {
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
  
  fit(X, y) {
    this.model.train(X, y);
  }

  predict(X) {
    return this.model.predict(X);
  }

  // Returns the coefficient of determination R^2 of the prediction.
  __score(X, y) {
  }
}

module.exports = LinearSVR;
