const car = {
    type: 'BMW',
    color:'blue',
    doors: 3,
    airConditioner: true
};

const {type, color, doors, airConditioner} = car;
const isCarValid = type && color && doors && airConditioner;
