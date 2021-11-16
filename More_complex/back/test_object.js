function User(ufname, uname, age) {
    this.ufnamme = ufname;
    this.uname = uname;
    this.age = age;
}

function test(age, name) {
    console.log('Hello ' + name);
}

let user = new User("Jerome", "Nanti", 43);

console.log(user);