const KNN = require('ml-knn');
const { accuracyScore } = require('../metrics');

class KNeighborsClassifier {
  constructor({
    nNeighbors = 5,
  } = {}) {
    this.knn = null;
    this.options = {
      nNeighbors,
    };
  }

  // Fit the model using X as training data and y as target values
  fit(X, y) {
    this.knn = new KNN(X, y, this.options);
    return this;
  }

  // Get parameters for this estimator.
  getParams(deep = true) {
    return this.options;
  }

  // Finds the K-neighbors of a point.
  kneighbors(X, nNeighbors, returnDistance) {

  }

  // Computes the (weighted) graph of k-Neighbors for points in X
  kneighborsGraph(X, nNeighbors, mode) {

  }

  // Predict the class labels for the provided data
  predict(X) {
    return this.knn.predict(X);
  }

  // Return probability estimates for the test data X.
  predictProba(X) {
    // TODO
    // Need to PR ml-knn adding predictProba so it returns an array with
    // probability for each class given a sample
    // First fork it and PR
  }

  // Returns the mean accuracy on the given test data and labels.
  score(X, y, sampleWeight) {
    return accuracyScore(this.predict(X), y);
  }

  // Set the parameters of this estimator.
  setParams(params = {}) {
    this.options = { ...this.options, params };
    return this;
  }
}

module.exports = KNeighborsClassifier;
