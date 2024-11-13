// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
//     speak() {
//         return `${this.name} makes a noise.`;
//     }
// }
// class Dog extends Animal {
//     speak() {
//         return `${this.name} barks.`;
//     }
// }
// const dog = new Dog('Buddy');
// console.log(dog.speak());

// const fetchData = new Promise((resolve, reject) => {
//     let success = false;

//     if (success) {
//         resolve('Data retrieved!');
//     } else {
//         reject('Failed to retrieve data.');
//     }
// });
// fetchData
//     .then(result => console.log(result))
//     .catch(error => console.log(error));

async function getData() {
    try {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => reject('Error fetching data!'), 1000);
        });

        let result = await promise;
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

getData();
