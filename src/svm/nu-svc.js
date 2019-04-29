const SVM = require('libsvm-js/asm');
const Base = require('../base');
const { accuracyScore } = require('../metrics');

class NuSVC extends Base {
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
  __decisionFunction(X) {
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
}

module.exports = NuSVC;
