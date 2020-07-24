const trainingSet = require("./data/rasa_dataset_training");
const testingSet = require("./data/rasa_dataset_testing");

const dataset = {
  training: {
    len: trainingSet.rasa_nlu_data.common_examples.length,
    intentLen: {},
  },
  testing: {
    len: testingSet.rasa_nlu_data.common_examples.length,
    intentLen: {},
  },
};

trainingSet.rasa_nlu_data.common_examples.forEach((element) => {
  dataset.training.intentLen[element.intent] =
    typeof dataset.training.intentLen[element.intent] === "number"
      ? dataset.training.intentLen[element.intent] + 1
      : 0;
});

testingSet.rasa_nlu_data.common_examples.forEach((element) => {
  dataset.testing.intentLen[element.intent] =
    typeof dataset.testing.intentLen[element.intent] === "number"
      ? dataset.testing.intentLen[element.intent] + 1
      : 0;
});

console.log(dataset);
