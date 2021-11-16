let str = 'Bonjour tout le monde ! Bon appetit';
let to_replace = [/a/g, /b/g, /e/g, /g/g, /i/g, /o/g, /r/g, /s/g, /t/g];
let replace_by = ['4', '8', '3', '6', '1', '0', '2', '5', '7'];

for (let i = 0; i < 9; i++) {
    str = str.replace(to_replace[i], replace_by[i]);
}

console.log(str);