const { datasets, svm } = require('../../src');
const { NuSVR } = svm;
const { makeClassification } = datasets;

const [X, y] = makeClassification({ nSamples: 10, nFeatures: 5, randomState: 0 });

const clf = new NuSVR({ C: 1.0, nu: 0.1 });
clf.fit(X, y);
