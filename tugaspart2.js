// function warnaKesukaan(warna = "putih") {
//     return `Warna kesukaan saya adalah ${warna}`;
// }
// console.log(warnaKesukaan()); // Output: Warna kesukaan saya adalah putih

let namaBuah1 = ['apel', 'mangga'];
let namaBuah2 = ['sirsak', 'semangka'];

let semuaNamaBuah;
namaBuah1 = [...namaBuah1, ...namaBuah2];
console.log(namaBuah1); // Output: ['apel', 'mangga', 'sirsak', 'semangka']