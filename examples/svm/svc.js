const { svm } = require('../../src');
const { SVC } = svm;

const X = [[-1, -1], [-2, -1], [1, 1], [2, 1]];
const y = [1, 1, 2, 2];

const clf = new SVC();
clf.fit(X, y);

console.log(
  clf.predict([[-0.8, -1]])
);
