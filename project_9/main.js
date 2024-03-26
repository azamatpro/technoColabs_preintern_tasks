let raceNumber = Math.floor(Math.random() * 1000);

// Variable indicating whether a runner registered early (true) or not (false)
let registeredEarly = true;

// Runner's age variable
let runnerAge = 24;

// Control flow statement to check if the runner is an adult and registered early
if (runnerAge > 18 && registeredEarly) {
  raceNumber += 1000;
}

// Control flow statement to determine race time based on age and registration time
if (runnerAge > 18 && registeredEarly) {
  console.log(`You will race at 9:30 am. Your race number is ${raceNumber}.`);
} else if (runnerAge > 18 && !registeredEarly) {
  console.log(`You will race at 11:00 am. Your race number is ${raceNumber}.`);
} else if (runnerAge < 18) {
  console.log(`You will race at 12:30 pm. Your race number is ${raceNumber}.`);
} else {
  console.log('Please see the registration desk.');
}
