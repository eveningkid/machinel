const SVM = require('libsvm-js/asm');
const Base = require('../base');
const { accuracyScore } = require('../metrics');

class SVR extends Base {
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

module.exports = SVR;
