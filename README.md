# Machinel
Simple Machine learning API for JavaScript (SKlearn-like API), using most of ml-js libraries.

*This is a WIP, providing a simple API for machine learning using JS.*

## Install
```
npm install machinel
```

## API
- machinel
  - [.cluster.**KMeans**](src/cluster/k-means.js)
  - [.datasets.**loadIris**](src/datasets/base.js)
  - [.datasets.**makeClassification**](src/datasets/samples-generator.js)
  - [.metrics.**accuracyScore**](src/metrics/classification.js)
  - [.modelSelection.**crossValScore**](src/model-selection/validation.js)
  - [.naiveBayes.**GaussianNB**](src/naive-bayes/gaussian-nb.js)
  - [.naiveBayes.**MultinomialNB**](src/naive-bayes/multinomial-nb.js)
  - [.neighbors.**KNeighborsClassifier**](src/neighbors/k-neighbors-classifier.js)
  - [.svm.**LinearSVC**](src/svm/linear-svc.js)
  - [.svm.**LinearSVR**](src/svm/linear-svr.js)
  - [.svm.**NuSVC**](src/svm/nu-svc.js)
  - [.svm.**NuSVR**](src/svm/nu-svr.js)
  - [.svm.**SVC**](src/svm/svc.js)
  - [.svm.**SVR**](src/svm/svr.js)
  - [.tree.**DecisionTreeClassifier**](src/tree/decision-tree-classifier.js)

## Build
```
npm run build
```

## License
MIT
