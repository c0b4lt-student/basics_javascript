const dateStart = new Date(2028, 6, 21);
const dateEnd = new Date(dateStart)
dateEnd.setDate(dateStart.getDate() + 16);
const dateCurrent = new Date();
const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
const result = dateStart.getTime() - dateCurrent.getTime();
let days = result / 1000 / 60 / 60 / 24

console.log(dateStart.toLocaleDateString('fr-FR', options));
console.log(dateEnd.toLocaleDateString('fr-FR', options));
console.log(Math.trunc(days));