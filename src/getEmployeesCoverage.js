const data = require('../data/zoo_data');

const { species, employees } = data;

const getEmployeeName = (employeeName) => employees
  .find(({ id, firstName, lastName }) => firstName.includes(employeeName) || lastName
    .includes(employeeName) || id === employeeName);

const getEmployeeSpecies = (speciesIds) => speciesIds
  .map((speciesId) => species.find(({ id }) => id === speciesId).name);

const getEmployeesLocations = (speciesIds) => speciesIds
  .flatMap((speciesId) => species.find(({ id }) => id === speciesId).location);

const filterEmployee = (allEmployees, objEmployee) => {
  const value = Object.values(objEmployee)[0];
  const employee = getEmployeeName(value);
  if (!employee) throw new Error('Informações inválidas');
  return allEmployees.find(({ id, fullName }) => employee.id === id || fullName.includes(value));
};

const getEmployeesCoverage = (objEmployee) => {
  const allEmployees = employees.map(({ id, firstName, lastName, responsibleFor }) => ({
    id,
    fullName: `${firstName} ${lastName}`,
    species: getEmployeeSpecies(responsibleFor),
    locations: getEmployeesLocations(responsibleFor),
  }));

  if (!objEmployee) {
    return allEmployees;
  }

  return filterEmployee(allEmployees, objEmployee);
};

module.exports = getEmployeesCoverage;
