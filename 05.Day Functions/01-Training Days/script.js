

const athlete = 'Nala';

const getRandEvent = () => {
  const random = Math.floor(Math.random() * 3)   // Create random number
  // return 'Marathon' or 'Triathlon' or 'Pentathlon' randomly;
  if (random == 0) {
    return "Marathon"
  } else if ((random == 1)) {
    return "Triathlon"
  } else {
    return "Pentathlon"
  }
};

console.log(getRandEvent())



// The scope of `trainingDays` is too tight 
const getTrainingDays = activity => {
  let trainingDays
  // decide the day according to the activity, write a activityal;
  if (activity === "Marathon") {
    trainingDays = 50
  } else if (activity === "Triathlon") {
    trainingDays = 75
  } else {
    trainingDays = 100
  }
  return trainingDays;
};


const logEvent = (name,activity) => {
  console.log(`${name}'s activity is: ${activity}`);
};

const logTime = (name,days) => {
  console.log(`${name}'s time to train is: ${days} days`);
};

const sport = getRandEvent();
const days = getTrainingDays(sport);

logEvent("ahmet", sport);
logTime("ahmet", days);

logEvent(athlete, sport);
logTime(athlete, days);