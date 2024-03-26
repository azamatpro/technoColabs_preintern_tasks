// Kelvin veriable that holds today's forecast
const kelvin = 0;
// Convert Kelvin to Celsius, then store on celsius veriable
const celsius = kelvin - 273;
// Equation to calculate Fahrenheit, then store the answer in a variable named fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;
// Using Math.floor() method to round down the fahrenheit temperature. Save the result to the fahrenheit variable
fahrenheit = Math.floor(fahrenheit);
// Logging result to console
console.log('The temperature is TEMPERATURE degrees Fahrenheit.'.replace('TEMPERATURE', fahrenheit));
