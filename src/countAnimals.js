const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  if (!animal) {
    const noParameter = {};
    data.species.forEach((specie) => { noParameter[specie.name] = specie.residents.length; });
    return noParameter;
  }

  const findSpecies = data.species.find((specie) => specie.name === animal.species);

  if (animal.species && animal.sex) {
    const filterSpecies = findSpecies.residents.filter((specie) => specie.sex === animal.sex);
    return filterSpecies.length;
  }

  return findSpecies.residents.length;
};

module.exports = countAnimals;
