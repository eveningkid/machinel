const MLNaiveBayes = require('ml-naivebayes');

function accuracyScore(predictions, y) {
  const correctPredictionsCount = predictions.filter((prediction, i) => {
    return y[i] === prediction;
  });
  return correctPredictionsCount / y.length;
}

class GaussianNB {
  constructor() {
    this.model = new MLNaiveBayes.GaussianNB();
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
    return accuracyScore(this.predict(X), y);
  }

  setParams(params = {}) {
    return this;
  }
}

module.exports = GaussianNB;
