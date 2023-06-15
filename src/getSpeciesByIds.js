const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) =>
  data.species.filter((idSpecies) => ids.some((id) => idSpecies.id === id));

module.exports = getSpeciesByIds;
