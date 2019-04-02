const { svm } = require('../../src');
const { SVR } = svm;

const X = [[-1, -1], [-2, -1], [1, 1], [2, 1]];
const y = [1, 1, 2, 2];

const clf = new SVR({
  gamma: 'scale',
  C: 1.0, 
  epsilon: 0.2,
});
clf.fit(X, y);

console.log(
  clf.predict([[-0.8, -1]])
);
