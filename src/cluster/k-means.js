const MLKMeans = require('ml-kmeans');

class KMeans {
  constructor({ nClusters, randomState = Math.ceil(Math.random() * 999) }) {
    this.model = null;
    this.nClusters = nClusters;
    this.randomState = randomState;
    this.clusterCenters_ = [];
  }

  // y is ignored
  fit(X, y = null, sample_weight) {
    this.model = MLKMeans(X, this.nClusters, {
      seed: this.randomState,
    });
    this.clusterCenters_ = this.model.centroids.map(({ centroid }) => centroid);
    this.labels_ = this.model.clusters;
    return this;
  }

  fitPredict(X, y, sample_weight) {
  }

  fitTransform(X, y, sample_weight) {

  }

  getParams(deep = true) {

  }

  predict(X, sample_weight) {
    return this.model.nearest(X);
  }

  score(X, y, sample_weight) {
  }
  
  setParams(params) {

  }

  transform(X) {

  }
}

module.exports = KMeans;
