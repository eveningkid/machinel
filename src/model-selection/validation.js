const crossValidation = require('ml-cross-validation');

function crossValScore(estimator, X, y, { cv = 3 } = {}) {
  // TODO should instead add a method to reset an estimator to its
  // default parameters (no training) right inside the classes
  const getOriginalEstimator = function () { return estimator; };

  class WrappedEstimator {
    constructor(options) {
      this.options = options;
      this.estimator = getOriginalEstimator();
    }

    train(X, y) {
      this.estimator.fit(X, y);
    }

    predict(X) {
      return this.estimator.predict(X);
    }
  }

  const confusionMatrix = crossValidation.kFold(WrappedEstimator, X, y, {}, cv);
  return confusionMatrix.getAccuracy();
}

module.exports = {
  crossValScore,  
};
