/**
 * SOAL 2
 *
 * Urutkan terbalik
 * Expected
 * ['watermelon', 'melon', 'durian', 'grape', 'banana', 'apple']
 * Clue:
 *  - pakai push
 *  - index dimulai dari besar ke kecil
 */
const array = ['apple', 'banana', 'grape', 'durian', 'melon', 'watermelon'];
const arrayReversion = [];

console.log(array.length -1)
for( let i = array.length -1; i >=0; i--){
    arrayReversion.push(array[i])
    console.log(array[i])
}
console.log(arrayReversion)

// TODO: bikin algoritma untuk otak-atik sehingga array reversion terisi dengan benar
// for( let i = 0; i < array.length; i++){
//     arrayReversion.push(array[i])
// }
