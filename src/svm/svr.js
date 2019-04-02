const SVM = require('libsvm-js/asm');

class SVR {
  constructor({
    // classWeight = null => options.weight (object)
    C = 1.0,
    gamma = 'auto',
    tol = 0.0001,
    epsilon = 0.1,
  } = {}) {
    this.model = new SVM({
      type: SVM.SVM_TYPES.EPSILON_SVR,
      cost: C,
      epsilon,
      quiet: true,
    });
    this.gamma = gamma;
  }

  // Predict confidence scores for samples.
  decisionFunction(X) {

  }
  
  // Convert coefficient matrix to dense array format.
  densify() {

  }	
  
  // Fit the model according to the given training data.
  fit(X, y, sampleWeight = null) {
    if (this.gamma === 'scale') {
      // TODO
      // this.model.options.gamma = 1 / (X[0].length * X.var());
      
      // function variance(array) {
      //   const mean = a.mean(); // TODO
      //   array = array.map((n) => Math.pow(n - mean, 2));
      //   array = array.reduce((a, b) => a + b, 0);
      //   return array / array.length;  
      // }
    }

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

module.exports = SVR;
