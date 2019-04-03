function loadIris(returnXy = false) {
  const iris = require('ml-dataset-iris');
  const data = iris.getNumbers();
  let target = iris.getClasses();
  const features = iris.getDistinctClasses();

  const featuresMapping = {};
  for (let i = 0; i < features.length; i++) {
    featuresMapping[features[i]] = i;
  }

  for (let i = 0; i < target.length; i++) {
    target[i] = featuresMapping[target[i]];
  }

  if (returnXy) {
    return [data, target];
  }
  
  return {
    data,
    target,
    featureNames: [
      'sepal length (cm)',
      'sepal width (cm)',
      'petal length (cm)',
      'petal width (cm)'
    ],
  };
}

module.exports = {
  loadIris,
};
