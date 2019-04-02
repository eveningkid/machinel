const SVM = require('libsvm-js/asm');

class LinearSVC {
  constructor({
    // classWeight = null => options.weight (object)
    tol = 0.0001,
  } = {}) {
    this.model = new SVM({
      kernel: SVM.KERNEL_TYPES.LINEAR,
      tolerance: tol,
      quiet: true,
    });
  }

  // Predict confidence scores for samples.
  decisionFunction(X) {

  }
  
  // Convert coefficient matrix to dense array format.
  densify() {

  }	
  
  // Fit the model according to the given training data.
  fit(X, y, sampleWeight = null) {
    this.model.train(X, y);
  }

  // Get parameters for this estimator.
  getParams(deep = true) {

  }

  // Predict class labels for samples in X.
  predict(X) {
    // console.log(this.model._getInterval());
    return this.model.predict(X);
  }

  // Returns the mean accuracy on the given test data and labels.
  score(X, y, sampleWeight = null) {
  }

  // Set the parameters of this estimator.
  setParams(params = {}) {

  }
  
  // Convert coefficient matrix to sparse format.
  sparsify() {

  }
}

module.exports = LinearSVC;
