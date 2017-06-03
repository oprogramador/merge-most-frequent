import _ from 'lodash';

const getMostFrequentValue = array => _.maxBy(
  array,
  item => array.filter(innerItem => !_.isUndefined(innerItem) && !_.isUndefined(item) && innerItem === item).length
);

function mergeMostFrequent(objects) {
  const reversedObjects = [...objects].reverse();
  const allKeys = _.uniq(_.flatten(reversedObjects.map(object => Object.keys(object))));
  const allValues = allKeys.map(key => getMostFrequentValue(_.map(reversedObjects, key)));

  return _.zipObject(allKeys, allValues);
}

export default mergeMostFrequent;
