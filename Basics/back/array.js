let colors = ['Blue', 'Red', 'Green', 'Yellow', 'White'];
let flags = [['Blue', 'White', 'Red'], ['Green', 'Yellow']];

//Affiche la taille du tableau
console.log(colors.length);

console.log("\n");

//affiche Blue, White and Red
console.log(colors[0] + ' ' + colors[4] + ' ' + colors[1]);

console.log('\n');

//Print all tabs
colors.forEach(function (color) {
    console.log(color);
})

console.log('\n');

for (let i = 0; colors[i]; i++)
    console.log(colors[i]);

console.log('\n');

console.log(flags[0][1] + ' ' + flags[1][0]);

console.log('\n');

flags.forEach(function(flag){
    flag.forEach(function(color){
        console.log(color);
    });
});