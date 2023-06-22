const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const count = { child: 0, adult: 0, senior: 0 };

  entrants.forEach((entrant) => {
    if (entrant.age < 18) count.child += 1;
    if (entrant.age >= 18 && entrant.age < 50) count.adult += 1;
    if (entrant.age >= 50) count.senior += 1;
  });
  return count;
};

const calculateEntry = (entrants) => {
  if (!entrants || entrants.length === 0) return 0;

  const entrantCount = countEntrants(entrants);

  const total = Object.entries(entrantCount)
    .reduce((sum, [visit, count]) => {
      const sumVisit = sum + count * data.prices[visit];
      return sumVisit;
    }, 0);

  return total;
};

module.exports = { calculateEntry, countEntrants };
