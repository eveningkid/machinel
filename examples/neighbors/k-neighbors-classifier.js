const { neighbors } = require('../../src');
const { KNeighborsClassifier } = neighbors;

const X = [[0], [1], [2], [3]]
const y = [0, 0, 1, 1]
const clf = new KNeighborsClassifier({ nNeighbors: 3 });
clf.fit(X, y);

console.log(
  clf.predict([[1.1]])
);

console.log(
  clf.predictProba([[0.9]])
);

console.log(
  clf.score([[3], [3]], [0, 1])
);
