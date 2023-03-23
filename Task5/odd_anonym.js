/*
//ananymous function
let odd = function(array) {
    for (i in array){
        if ((array[i]%2) == 0) {
            console.log(`${array[i]} is even`)
        }
        else {
            console.log(`${array[i]} is odd`)
        }
    }
}
let array = [1,2,3,4,5,6]
odd(array)

*/

//Arrow Function
 let odd = (array) => {
    for (i in array){
        if ((array[i]%2) == 0) {
            console.log(`${array[i]} is even`)
        }
        else {
            console.log(`${array[i]} is odd`)
        }
    }
 }
let array = [1,2,3,4,5,6]
odd(array)