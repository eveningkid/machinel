const SVM = require('libsvm-js/asm');
const Base = require('../base');
const { accuracyScore } = require('../metrics');

class LinearSVC extends Base {
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

module.exports = LinearSVC;
