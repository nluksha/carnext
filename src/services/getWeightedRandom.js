const getWeightedRandom = data => {
  const totalWeight = data.reduce((accumulator, currentValue) => accumulator + currentValue.weight, 0);
  const weightedItems = data.map(item => ({
    value: item.value,
    weight: item.weight / totalWeight
  }));

  let key = 0;
  let selector = Math.random();
  while (selector > 0) {
    selector -= weightedItems[key].weight;
    key++;
  }

  return weightedItems[key - 1].value;
};

export default getWeightedRandom;
