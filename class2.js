const firstName = "Erik";
const lastName = "Brück";
const dateValue = require("./date_et");

console.log("Programmi autor on " + firstName + " " + lastName);

let dateETNow = dateValue.dateETformatted();

console.log("Täna on " + dateETNow);
console.log("Täna on tõesti: " + dateValue.dateETformatted());

