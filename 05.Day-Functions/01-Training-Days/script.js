const getRandEvent = () => {
  const random = Math.floor(Math.random() * 3)   // Create random number
  // return 'Marathon' or 'Triathlon' or 'Pentathlon' randomly;
  switch (random) {

    case 0:
      return "Marathon"
      break;

    case 1:
      return "Triathlon"
      break;

    case 2:
      return "Pentathlon"
      break;
  }
};

console.log(getRandEvent())



// The scope of `trainingDays` is too tight 
const getTrainingDays = activity => {
  let trainingDays
  // decide the day according to the activity, write a activityal;

  switch (activity) {

    case "Marathon":
      return trainingDays = 50
      break;

    case "Triathlon":
      return trainingDays = 75
      break;

    case "Pentathlon":
      return trainingDays = 100
      break;
  }
}

const athlete = 'Nala';

const logEvent = (name, activity) => {
  console.log(`${name}'s activity is: ${activity}`);
};


const logTime = (name, days) => {
  console.log(`${name}'s time to train is: ${days} days`);
};


const sport = getRandEvent();
const days = getTrainingDays(sport);


logEvent(athlete, sport);
logTime(athlete, days);

console.warn("//-----------------------------")

logEvent("Ahmet", sport);
logTime("Ahmet", days);