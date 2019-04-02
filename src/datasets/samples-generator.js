let randomIteration = 0;
function random(n = 1, seed = null) {
  if (typeof seed !== "undefined") {
    randomIteration++;
    return randomIteration % n;
  }

  return Math.floor(Math.random() * n);
}

function makeClassification({
  nSamples = 100,
  nFeatures = 20,
  nClasses = 2,
  randomState = null
}) {
  const X = [];
  const y = [];

  for (let i = 0; i < nSamples; i++) {
    const sample = [];
    for (let j = 0; j < nFeatures; j++) {
      sample.push(random(nFeatures, randomState));
    }

    X.push(sample);
    y.push(random(nClasses, randomState));
  }
  
  return [X, y];
}

module.exports = {
  makeClassification,
};
