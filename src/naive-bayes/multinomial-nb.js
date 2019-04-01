const MLNaiveBayes = require('ml-naivebayes');

class MultinomialNB {
  constructor() {
    this.model = new MLNaiveBayes.MultinomialNB();
  }

  fit(X, y, sampleWeight = null) {
    this.model.train(X, y);
    return this;
  }

  // TODO
  getParams(deep = true) {
  }

  // TODO
  partialFit(X, y, classes, sampleWeight = null) {
  }

  predict(X) {
    return this.model.predict(X);
  }

  // TODO
  predictLogProba(X) {
  }

  // TODO
  predictProba(X) {
  }

  score(X, y, sampleWeight = null) {
    const predictions = this.predict(X);
    const correctPredictionsCount = predictions.filter((prediction, i) => {
      return y[i] === prediction;
    }).length;
    return correctPredictionsCount / y.length;
  }

  setParams(params = {}) {
    return this;
  }
}

module.exports = MultinomialNB;
