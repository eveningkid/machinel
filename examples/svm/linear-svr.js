const { datasets, svm } = require('../../src');
const { LinearSVR } = svm;
const { makeClassification } = datasets;

const [X, y] = makeClassification({ nFeatures: 4, randomState: 0 });
const clf = new LinearSVR({ tol: 1e-5, randomState: 0 });
clf.fit(X, y);

console.log(clf.predict([[0, 0, 0, 0]]));
