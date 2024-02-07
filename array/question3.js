/**
 * SOAL 3
 *
 * hitung angka yg sama yg paling banyak
 * Expected
 * result = 8 (karena angka 5 nya ada 8)
 */
const array = [1, 5, 1, 2, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5];
let result = 0;
for(let i = array.length -1; i >= 0; i --){
    if(5 === array[i]){
        result = result + 1
    }
}
console.log(result)
