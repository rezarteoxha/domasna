//1 a
const books = [
    { title: "Book 1", author: "Author A", year: 2000 },
    { title: "Book 2", author: "Author B", year: 2010 },
    { title: "Book 3", author: "Author C", year: 2020 },
]
console.log("All books")
books.forEach(book =>{
    console.log(`Title: ${book.title}, Аuthor: ${book.author}`);
});

//б
const firstBookAfter2000 = books.find(book => book.year > 2000);
console.log("Прва книга издадена после 2000 година:");
if (firstBookAfter2000) {
  console.log(`Тitle: ${firstBookAfter2000.title}, Аuthor: ${firstBookAfter2000.author}`);
} else {
  console.log("Нема книги издадени после 2000 година.");
}

//2 
//а
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    address: {
      street: "123 Main Street",
      city: "New York",
      state: "NY",
      postalCode: "10001",
    },
    hobbies: ["Reading", "Traveling", "Cooking"],
};
  
const additionalInfo = {
    email: "john.doe@example.com",
    phone: "555-123-4567",
    education: {
      degree: "Bachelor's",
      major: "Computer Science",
    },
};
const mergedPerson = { ...person, ...additionalInfo };
console.log(mergedPerson);
  
//б
const user = {
  id: 123,
  username: "jsmith",
  fullName: { firstName: "John", lastName: "Smith" },
  contact: { email: "john@example.com", phone: "555-555-5555" },
  addresses: [
    {
      type: "home",
      street: "123 Main Street",
      city: "New York",
      state: "NY",
      zip: "10001",
    },
    {
      type: "work",
      street: "456 Market Street",
      city: "San Francisco",
      state: "CA",
      zip: "94105",
    },
  ],
};

const { username, fullName: { firstName, lastName }, contact: { email }, addresses: [homeAddress, workAddress] } = user;
const { street: homeStreet, city: homeCity, state: homeState, zip: homeZip } = homeAddress;
const { street: workStreet, city: workCity, state: workState, zip: workZip } = workAddress;

console.log("Username:", username);
console.log("First Name:", firstName);
console.log("Last Name:", lastName);
console.log("Email:", email);
console.log("Home Address:", homeStreet, homeCity, homeState, homeZip);
console.log("Work Address:", workStreet, workCity, workState, workZip);


//3
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

// а. Земји што имаат "land" во своето име и направете ги со големи букви
console.log("Земји со 'land' во името:");
const countriesWithLand = countries.filter(country => country.toUpperCase().includes("LAND"));
countriesWithLand.forEach(country => console.log(country.toUpperCase()));
  
// б. Земји што завршуваат со 'ia' и имаат повеќе од 7 букви
console.log("Земји што завршуваат со 'ia' и имаат повеќе од 7 букви:");
const countriesWithIa = countries.filter(country => country.endsWith("ia") && country.length > 7);
countriesWithIa.forEach(country => console.log(country));
  
//4
let zooAnimals = [
    {
      id: "0938aa23-f153-4937-9f88-4858b24d6bce",
      name: "lions",
      popularity: 4,
      location: "NE",
      residents: [
        {
          name: "Zena",
          sex: "female",
          age: 12,
        },
        {
          name: "Maxwell",
          sex: "male",
          age: 15,
        },
        {
          name: "Faustino",
          sex: "male",
          age: 7,
        },
        {
          name: "Dee",
          sex: "female",
          age: 14,
        },
      ],
    },
    {
      id: "e8481c1d-42ea-4610-8e11-1752cfc05a46",
      name: "tigers",
      popularity: 5,
      location: "NW",
      residents: [
        {
          name: "Shu",
          sex: "female",
          age: 19,
        },
        {
          name: "Esther",
          sex: "female",
          age: 17,
        },
      ],
    },
    {
      id: "baa6e93a-f295-44e7-8f70-2bcdc6f6948d",
      name: "bears",
      popularity: 5,
      location: "NW",
      residents: [
        {
          name: "Hiram",
          sex: "male",
          age: 4,
        },
        {
          name: "Edwardo",
          sex: "male",
          age: 4,
        },
        {
          name: "Milan",
          sex: "male",
          age: 4,
        },
      ],
    },
    {
      id: "ef3778eb-2844-4c7c-b66c-f432073e1c6b",
      name: "penguins",
      popularity: 4,
      location: "SE",
      residents: [
        {
          name: "Joe",
          sex: "male",
          age: 10,
        },
        {
          name: "Tad",
          sex: "male",
          age: 12,
        },
        {
          name: "Keri",
          sex: "female",
          age: 2,
        },
        {
          name: "Nicholas",
          sex: "male",
          age: 2,
        },
      ],
    },
    {
      id: "533bebf3-6bbe-41d8-9cdf-46f7d13b62ae",
      name: "otters",
      popularity: 4,
      location: "SE",
      residents: [
        {
          name: "Neville",
          sex: "male",
          age: 9,
        },
        {
          name: "Lloyd",
          sex: "male",
          age: 8,
        },
        {
          name: "Mercedes",
          sex: "female",
          age: 9,
        },
        {
          name: "Margherita",
          sex: "female",
          age: 10,
        },
      ],
    },
    {
      id: "89be95b3-47e4-4c5b-b687-1fabf2afa274",
      name: "frogs",
      popularity: 2,
      location: "SW",
      residents: [
        {
          name: "Cathey",
          sex: "female",
          age: 3,
        },
        {
          name: "Annice",
          sex: "female",
          age: 2,
        },
      ],
    },
    {
      id: "78460a91-f4da-4dea-a469-86fd2b8ccc84",
      name: "snakes",
      popularity: 3,
      location: "SW",
      residents: [
        {
          name: "Paulette",
          sex: "female",
          age: 5,
        },
        {
          name: "Bill",
          sex: "male",
          age: 6,
        },
      ],
    },
    {
      id: "bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5",
      name: "elephants",
      popularity: 5,
      location: "NW",
      residents: [
        {
          name: "Ilana",
          sex: "female",
          age: 11,
        },
        {
          name: "Orval",
          sex: "male",
          age: 15,
        },
        {
          name: "Bea",
          sex: "female",
          age: 12,
        },
        {
          name: "Jefferson",
          sex: "male",
          age: 4,
        },
      ],
    },
    {
      id: "01422318-ca2d-46b8-b66c-3e9e188244ed",
      name: "giraffes",
      popularity: 4,
      location: "NE",
      residents: [
        {
          name: "Gracia",
          sex: "female",
          age: 11,
        },
        {
          name: "Antone",
          sex: "male",
          age: 9,
        },
        {
          name: "Vicky",
          sex: "female",
          age: 12,
        },
        {
          name: "Clay",
          sex: "male",
          age: 4,
        },
        {
          name: "Arron",
          sex: "male",
          age: 7,
        },
        {
          name: "Bernard",
          sex: "male",
          age: 6,
        },
      ],
    },
]

//а. Испечатување на имињата на животните со популарност поголема од 4:
console.log("Животни со популарност поголема од 4:");
  zooAnimals.forEach(animal => {
  if (animal.popularity > 4) {
  console.log(animal.name);
  }
});
//в. Испечатување на имињата на пингвините кои се помали од 10 години и се женки:
console.log("Имиња на женските пингвини помали од 10 години:");
zooAnimals.forEach(animal => {
  if (animal.name === "penguins") {
  animal.residents.forEach(resident => {
      if (resident.age < 10 && resident.sex === "female") {
      console.log(resident.name);
      }
    });
  }
});

//г. Наоѓање на групата животни со најмногу букви во името и испечатување на збирот на нивните возрасти:
let maxNameLength = 0;
let groupWithMaxNameLength;
let totalAge = 0;

zooAnimals.forEach(animal => {
  if (animal.name.length > maxNameLength) {
    maxNameLength = animal.name.length;
    groupWithMaxNameLength = animal;
  }

  animal.residents.forEach(resident => {
    totalAge += resident.age;
  });
});

console.log("Збир на возрастите на жителите во групата со најдолго име:", totalAge);

//д. Наоѓање на групата со најмал и најголем број на жители и креирање на нова низа со нивните имиња:
let minResidentsGroup;
let maxResidentsGroup;
let minResidents = Infinity;
let maxResidents = -Infinity;

zooAnimals.forEach(animal => {
  const residentsCount = animal.residents.length;
  if (residentsCount < minResidents) {
    minResidents = residentsCount;
    minResidentsGroup = animal;
  }
  if (residentsCount > maxResidents) {
    maxResidents = residentsCount;
    maxResidentsGroup = animal;
  }
});

const minResidentsNames = minResidentsGroup.residents.map(resident => resident.name);
const maxResidentsNames = maxResidentsGroup.residents.map(resident => resident.name);

//console.log("Животни со најмал број на жители:", minResidentsNames);
//console.log("Животни со најголем број на жители:", maxResidentsNames);





//5
function checkGrade(score) {
    return score >= 90 ? "A" :
    score >= 80 ? "B" :
    score >= 70 ? "C" :
    score >= 60 ? "D" :
    "F";
}
console.log(checkGrade(95));
 

