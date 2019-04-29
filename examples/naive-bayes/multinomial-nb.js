const { naiveBayes } = require('../../src');
const { MultinomialNB } = naiveBayes;

const XTrain = [[1], [2], [3]];
const yTrain = [0, 0, 1];

const XTest = [[3], [3], [3]];
const yTest = [0, 0, 1];

const model = new MultinomialNB();
model.fit(XTrain, yTrain);
console.log(model.score(XTest, yTest));
