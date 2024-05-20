//1
let book = {
    title: "The Lion King",
    author: "L. Hannry Fitz",
    pages: 100,
    publicationYear: 1925,
    characters: ["Lion King", "Pumba", "Mufasa"],
    quotes: {
        mufasa:"You Got to Put Your Behind in Your Past!” "
    }
};
console.log(book)

//б
let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    color: "Black",
    mileage: 50000,
    features: ["Bluetooth connectivity", "Backup camera", "Keyless entry"],
    owner: {
        name: "Rezarta",
        age: 21,
        gender: "Femail"
    } 
}
console.log(car)

//в
let student = {
    name: "Rezarta",
    age: 21,
    major: "Digital Design",
    gpa: 9.8,
    courses: ["Visual Expresion", "Mathematics", "Web Development","English"],

 schedule: {
        monday: ["Math", "WEB"],
        tuesday: ["WEB", "English"],
        wednesday: ["Visual Expresion", "Math"],
        thursday: ["Math", "English"],
        friday: ["Visual Expresion", "Math"]
    }
};



//2 
//a
for (let i = 0; i <= 10; i++) {
   console.log(i);
}

//б
let start = 3;
let end = 10;
let total = 0;

for (let number = start; number <= end; number++) {
    if (number % 2 === 0) {
       total += number;
    }
}

console.log(total);

//в
let person = {
    name: "Иван",
    age: 27,
    city: "Битола"
};

for (let key in person) {
    console.log( key + ": " + person[key]);
}

//г
let colors = ["red", "green", "blue"]

for (let color of colors) {
    console.log(color.length, color);
}

//3
//a

let count = 5;

while (count >= 1) {
    console.log(count);
    count--;
}

//б
let number = 10;

do {
    console.log(number);
    number--

    if(number === 4) {
      break
    }
} while (number >= 1)

//4
let students = [
    {
        name: "Ана",
        surname: "Петрова",
        age: 21,
        address: {
            city: "Скопје",
            street: {
                name: "Улица Маршал Тито",
                number: 10
            },
            zipCode: "1000"
        }
    },
    {
        name: "Марко",
        surname: "Иванов",
        age: 20,
        address: {
            city: "Битола",
            street: {
                name: "Улица Гоце Делчев",
                number: 5
            },
            zipCode: "7000"
        }
    }
];

console.log(students[0].address.city);
console.log(students[1]["address"]["street"]["name"]);

//5
//a
for (let i = 1; i <= 100; i += 4) {
    console.log(i);
}

//б
for (let i = 2; i <= 50; i += 2) {
    console.log(i);
}

//6

let cities = ["Скопје", "Белград", "Загреб", "Софија", "Тирана", "Приштина", "Сараево", "Подгорица", "Тирана", "Атина"];
//а
for (let key in cities) {
    console.log(key + ": " + cities[key]);
}

// б. 
for (let city of cities) {
    console.log(city);
}





