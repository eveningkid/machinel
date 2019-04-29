const KNN = require('ml-knn');
const Base = require('../base');
const { accuracyScore } = require('../metrics');

class KNeighborsClassifier extends Base {
  constructor({
    nNeighbors = 5,
  } = {}) {
    super();
    this.knn = null;
    this.params = {
      nNeighbors,
    };
  }

  fit(X, y) {
    this.knn = new KNN(X, y, this.params);
    return this;
  }

  // TODO
  __kneighbors(X, nNeighbors, returnDistance) {
  }

  // TODO
  __kneighborsGraph(X, nNeighbors, mode) {
  }

  predict(X) {
    return this.knn.predict(X);
  }

  // TODO
  __predictProba(X) {
    // TODO
    // predictProba so it returns an array with
    // probability for each class given a sample
  }

  score(X, y) {
    return accuracyScore(this.predict(X), y);
  }
}

module.exports = KNeighborsClassifier;
