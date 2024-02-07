/**
 * SOAL 1
 *
 * Cari nilai tertinggi dan terendah dari Array dibawah ini
 * Expected
 * highestScore = 95
 * lowestScore = 43
 */
const array = [55, 43, 67, 89, 76, 88, 90, 95, 91];

let highestScore = 0;
let lowestScore = 1000;

for(let i =0; i < array.length; i++ ){
    if(highestScore < array[i]){
        highestScore = array[i];
    }

    if(lowestScore >  array[i]){
        lowestScore = array[i]
    }
}

console.log(lowestScore)
console.log(highestScore)
// TODO: bikin algoritma nya


