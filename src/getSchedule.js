const data = require('../data/zoo_data');

const scheduleDay = (day) => data.species
  .filter(({ availability }) => availability.includes(day))
  .map(({ name }) => name);

const getSchedule = (scheduleTarget) => {
  const scheduleAnimal = data.species.find(({ name }) => name === scheduleTarget);
  if (scheduleAnimal) return scheduleAnimal.availability;

  const schedule = {};
  Object.keys(data.hours).forEach((day) => {
    if (day !== 'Monday') {
      schedule[day] = {
        officeHour: `Open from ${data.hours[day].open}am until ${data.hours[day].close}pm`,
        exhibition: scheduleDay(day),
      };
    } else { schedule[day] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' }; }
  });

  if (Object.keys(data.hours).includes(scheduleTarget)) {
    return { [scheduleTarget]: schedule[scheduleTarget] };
  }

  return schedule;
};
module.exports = getSchedule;
