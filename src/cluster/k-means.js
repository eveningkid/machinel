const MLKMeans = require('ml-kmeans');

class KMeans {
  constructor({ nClusters, randomState }) {
    this.model = null;
    this.nClusters = nClusters;
    this.randomState = randomState || Math.ceil(Math.random() * 999);
    this.clusterCenters_ = [];
  }

  // y is ignored
  fit(X, y = null, sample_weight) {
    const centers = this._generateRandomCenters(this.nClusters, X);
    this.model = MLKMeans(X, this.nClusters, {
      initialization: centers,
      seed: this.randomState,
    });
    this.clusterCenters_ = this.model.centroids.map(({ centroid }) => centroid);
    this.labels_ = this.model.clusters;
    return this;
  }

  _generateRandomCenters(nClusters, X) {
    const XCopy = [...X];
    const centroids = Array(nClusters).fill(0);
    return centroids.map(() => {
      const randomId = Math.floor(Math.random() * XCopy.length);
      const centroid = XCopy[randomId];
      XCopy.splice(randomId, 1);
      return centroid;
    });
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
