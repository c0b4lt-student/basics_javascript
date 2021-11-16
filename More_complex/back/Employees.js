function Employees(name, age, nbHour) {
  this.name = name;
  this.age = age;
  this.nbHour = nbHour;

  this.alert = function alert() {
    return (`employé: ${this.name}, heures: ${this.nbHour}`);
  }
}

const workers = [
  new Employees('Benjamin', 25, 35),
  new Employees('Luc', 45, 36),
  new Employees('Marie', 23, 35),
  new Employees('Jeanne', 36, 30),
  new Employees('Jean', 37, 35)
];

let to_alert = '';
let bad_workers = [];

workers.forEach((worker) => {
  if (worker.nbHour !== 35) {
    to_alert += worker.alert() + '\n';
    bad_workers.push(JSON.parse(JSON.stringify(worker)));
  }
})
workers.forEach((worker) => {
  worker.nbHour = 35;
})

console.log(bad_workers);
console.log(workers);