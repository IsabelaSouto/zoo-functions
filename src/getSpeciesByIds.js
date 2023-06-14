const data = require('../data/zoo_data');

// posso usar o .filter para as especies do id
// posso usar o .some para retorne a espécie do animal referente a este id, se a função receber apenas um id

const getSpeciesByIds = (...ids) =>
  data.species.filter((idSpecies) => ids.some((id) => idSpecies.id === id));

module.exports = getSpeciesByIds;
