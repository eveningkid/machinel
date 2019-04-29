const SVM = require('libsvm-js/asm');
const Base = require('../base');
const { accuracyScore } = require('../metrics');

class SVC extends Base {
  constructor({
    C = 1.0,
    kernel = 'rbf',
    gamma = 'auto',
    coef0 = 0.0,
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
  __decisionFunction(X) {
  }
  
  // TODO
  __densify() {
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
  __sparsify() {
  }
}

module.exports = SVC;
