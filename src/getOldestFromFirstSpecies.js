const data = require('../data/zoo_data');

const foundSpeciesByEmployee = (id) => data.employees
  .find((employee) => employee.id === id)
  .responsibleFor[0];

const getOldestFromFirstSpecies = (id) => Object.values(
  data.species
    .find((animal) => animal.id === foundSpeciesByEmployee(id))
    .residents
    .reduce((oldest, current) => (current.age > oldest.age ? current : oldest)),
);

module.exports = getOldestFromFirstSpecies;
