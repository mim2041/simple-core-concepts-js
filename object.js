const student = {
    name: 'Sakib Khat',
    id: 121,
    address: 'movie cinema',
    isSingle: true,
    friends: ['Apu', 'Raaz', 'Salman', 'aamir'],
    movies: [{name: 'no-1', year: 2015}, {name: 'king khan', year: 2018}],
    act: function(){
        console.log("acting like Sakib Khan");
    },
    car: {
        brand: 'tesla',
        price: 500000,
        made: 2025
    }
}

console.log(student.car);
console.log(student.movies[1].name);