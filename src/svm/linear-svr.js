const SVM = require('libsvm-js/asm');

class LinearSVR {
  constructor({
    // classWeight = null => options.weight (object)
    epsilon = 0.1,
    tol = 0.0001,
  } = {}) {
    this.model = new SVM({
      type: SVM.SVM_TYPES.EPSILON_SVR,
      kernel: SVM.KERNEL_TYPES.LINEAR,
      tolerance: tol,
      epsilon,
      quiet: true,
    });
  }
  
  // Fit the model according to the given training data.
  fit(X, y, sampleWeight = null) {
    this.model.train(X, y);
  }

  // Get parameters for this estimator.
  getParams(deep = true) {

  }

  // Predict using the linear model
  predict(X) {
    return this.model.predict(X);
  }

  // Returns the coefficient of determination R^2 of the prediction.
  score(X, y, sampleWeight = null) {

  }

  // Set the parameters of this estimator.
  setParams(params = {}) {

  }
}

module.exports = LinearSVR;
