function accuracyScore(predictions, y) {
  const correctPredictionsCount = predictions.filter((prediction, i) => {
    return y[i] === prediction;
  }).length;
  return correctPredictionsCount / y.length;
}

module.exports = {
  accuracyScore,
};
