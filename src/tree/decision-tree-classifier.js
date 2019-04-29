const { DecisionTreeClassifier: MLDecisionTreeClassifier } = require('ml-cart');
const { accuracyScore } = require('../metrics');

class DecisionTreeClassifier {
  constructor({
    criterion = 'gini',
    maxDepth = Infinity,
    minSamples = 2,
    splitter = 'mean',
  } = {}) {
    this.options = {
      criterion,
      maxDepth,
      minSamples,
      splitter,
    };

    // http://mljs.github.io/decision-tree-cart/#constructor
    this.classifier = new MLDecisionTreeClassifier({
      gainFunction: this.options.criterion,
      splitFunction: this.options.splitter,
      minNumSamples: this.options.minSamples,
      maxDepth: this.options.maxDepth,
    });
  }

  // Returns the index of the leaf that each sample is predicted as.
  apply(X, checkInput) {

  }

  // Return the decision path in the tree
  decisionPath(X, checkInput) {

  }

  // Build a decision tree classifier from the training set (X, y).
  fit(X, y, sampleWeight, checkInput) {
    this.classifier.train(X, y);
    return this;
  }

  // Get parameters for this estimator.
  getParams(deep = true) {
    return this.options;
  }

  // Predict class or regression value for X.
  predict(X, checkInput) {
    return this.classifier.predict(X);
  }

  // Predict class log-probabilities of the input samples X.
  predictLogProba(X) {

  }

  // Predict class probabilities of the input samples X.
  predictProba(X, checkInput) {

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

module.exports = DecisionTreeClassifier;
