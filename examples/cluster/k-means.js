const { cluster } = require('../../src');
const { KMeans } = cluster;

const X = [[1, 2], [1, 4], [1, 0], [10, 2], [10, 4], [10, 0]];
const kmeans = new KMeans({ nClusters: 2, randomState: 0 }).fit(X);

console.log(kmeans.labels_);
console.log(kmeans.predict([[0, 0], [12, 3]]));
console.log(kmeans.clusterCenters_);
