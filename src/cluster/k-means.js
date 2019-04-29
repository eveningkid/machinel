const MLKMeans = require('ml-kmeans');
const Base = require('../base');
const { accuracyScore } = require('../metrics');

class KMeans extends Base {
  constructor({ nClusters = 8, randomState = Math.ceil(Math.random() * 999) } = {}) {
    super();
    this.model = null;
    this.nClusters = nClusters;
    this.clusterCenters_ = [];
    this.params = {
      nClusters,
      randomState,
    };
  }

  fit(X) {
    this.model = MLKMeans(X, this.params.nClusters, {
      seed: this.params.randomState,
    });
    this.clusterCenters_ = this.model.centroids.map(({ centroid }) => centroid);
    this.labels_ = this.model.clusters;
    return this;
  }

  // TODO
  __fitPredict(X, y, sample_weight) {
  }

  // TODO
  __fitTransform(X, y, sample_weight) {
  }

  predict(X) {
    return this.model.nearest(X);
  }

  score(X, y) {
    return accuracyScore(this.predict(X), y);
  }

  // TODO
  __transform(X) {
  }
}

module.exports = KMeans;
