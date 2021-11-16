let table = 1;
let i = 1;
let j = 1;

for (i = 1; i <= 9; i++) {
    console.log(`=== table de ${i} ===`);
    for (j = 1; j <= 9; j++) {
        console.log(`${i} * ${j} = ${i * j}\n`)
    }
    j = 1;
}