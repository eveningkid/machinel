const MLNaiveBayes = require('ml-naivebayes');
const Base = require('../base');
const { accuracyScore } = require('../metrics');

class GaussianNB extends Base {
  constructor() {
    super();
    this.model = new MLNaiveBayes.GaussianNB();
    this.params = {};
  }

  fit(X, y) {
    this.model.train(X, y);
    return this;
  }

  // TODO
  __partialFit(X, y, classes) {
  }

  predict(X) {
    return this.model.predict(X);
  }

  // TODO
  __predictLogProba(X) {
  }

  // TODO
  __predictProba(X) {
  }

  score(X, y) {
    return accuracyScore(this.predict(X), y);
  }
}

module.exports = GaussianNB;
