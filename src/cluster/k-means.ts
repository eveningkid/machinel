import MLKMeans from 'ml-kmeans';
import Base from '../base';
import { accuracyScore } from '../metrics';
import { FeaturesArray, LabelsArray } from '../types';

export default class KMeans extends Base {
  model: any;
  nClusters: number;
  clusterCenters_: Array<number>;
  labels_: LabelsArray;

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

  fit(X: FeaturesArray) {
    this.model = MLKMeans(X, this.params.nClusters, {
      seed: this.params.randomState,
    });
    this.clusterCenters_ = this.model.centroids.map((centroid: any = {}) =>
      centroid.centroid
    );
    this.labels_ = this.model.clusters;
    return this;
  }

  // TODO
  __fitPredict(X: FeaturesArray, y: LabelsArray, sample_weight: Array<number>) {
  }

  // TODO
  __fitTransform(X: FeaturesArray, y: LabelsArray, sample_weight: Array<number>) {
  }

  predict(X: FeaturesArray) {
    return this.model.nearest(X);
  }

  score(X: FeaturesArray, y: LabelsArray): number {
    return accuracyScore(this.predict(X), y);
  }

  // TODO
  __transform(X: FeaturesArray) {
  }
}
