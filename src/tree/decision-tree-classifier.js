const { DecisionTreeClassifier: MLDecisionTreeClassifier } = require('ml-cart');
const Base = require('../base');
const { accuracyScore } = require('../metrics');

class DecisionTreeClassifier extends Base {
  constructor({
    criterion = 'gini',
    maxDepth = Infinity,
    minSamples = 2,
    splitter = 'mean',
  } = {}) {
    super();
    this.classifier = new MLDecisionTreeClassifier({
      gainFunction: criterion,
      splitFunction: splitter,
      minNumSamples: minSamples,
      maxDepth: maxDepth,
    });
    this.params = {
      criterion,
      maxDepth,
      minSamples,
      splitter,
    };
  }

  // TODO
  __apply(X, checkInput) {
  }

  // TODO
  __decisionPath(X, checkInput) {
  }

  fit(X, y) {
    this.classifier.train(X, y);
    return this;
  }

  predict(X) {
    return this.classifier.predict(X);
  }

  // TODO
  __predictLogProba(X) {
  }

  // TODO
  __predictProba(X, checkInput) {
  }

  score(X, y, sampleWeight) {
    return accuracyScore(this.predict(X), y);
  }
}

module.exports = DecisionTreeClassifier;
