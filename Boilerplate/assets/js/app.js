window.addEventListener('DOMContentLoaded', () => {
	
});	

let user = Object.defineProperties({}, {
    name: {value: 'Simeon', writable: true, configurable: true},
    lastName: {value: 'Nikolov'},
    city: {value: 'Varna', writable: true, configurable: true, enumerable: true}
})

console.log(user)

console.log('/////////////////////Getter Setter/////////////////////////')

console.log('/////////////////////Getter/////////////////////////')

// let object = {
//     get property() {
        
//     },
//     set property() {

//     }
// }

let user1 = {
    name: 'Simoen',
    lastName: 'Nikolov',

    get fullName() {
        return `${this.name} ${this.lastName}`
    }
}
console.log(user1);

user1.name = 'Caloyan';
console.log(user1)
console.log(user1.fullName)

console.log('/////////////////////Setter/////////////////////////')

let user2 = {
    name: 'Simoen',
    lastName: 'Nikolov',

    get fullName() {
        return `${this.name} ${this.lastName}`
    },

    set fullName(value) {
        [this.name, this.lastName] = value.split(' ');
    }
}
console.log(user2);

user2.name = 'Caloyan';
console.log(user2)
console.log(user2.fullName)

user2.fullName = 'Jony Bravo';
console.log(user2)
console.log(user2.fullName)

console.log('//////////////////////////////////////////////')

let animal = {
    eats: true,
    run() {
        console.log('RUN')
    },
}

let dog = {
    bark: true,
}

console.log(animal)
console.log(dog)

dog.__proto__ = animal
console.log(dog)
console.log(animal.eats)
console.log(dog.eats)
console.log(animal.bark)

console.log(dog.run())

animal.color = 'red';
console.log(animal)
console.log(dog)
console.log(dog.color)

dog.color = 'braun'
console.log(dog)
console.log(dog.color)


console.log('//////////////////////////////////////////////')

let huskey = {}

console.log(huskey)
huskey.__proto__ = animal
console.log(huskey)

huskey.__proto__ = dog
console.log(huskey)
console.log(huskey.run())


