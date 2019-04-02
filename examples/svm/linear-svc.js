const { datasets, svm } = require('../../src');
const { LinearSVC } = svm;
const { makeClassification } = datasets;

const [X, y] = makeClassification({ nFeatures: 4, randomState: 0 });
const clf = new LinearSVC({ randomState: 0, tol: 1e-5 });
clf.fit(X, y);

// console.log(clf.coef_);
// console.log(clf.intercept_);
console.log(clf.predict([[0, 0, 0, 0]]));
