const { datasets, modelSelection, neighbors, tree } = require('../../src');
const { DecisionTreeClassifier } = tree;
const { KNeighborsClassifier } = neighbors;

// const clf = new DecisionTreeClassifier();
const clf = new KNeighborsClassifier();
const iris = datasets.loadIris();
modelSelection.crossValScore(clf, iris.data, iris.target, { cv: 10 })
