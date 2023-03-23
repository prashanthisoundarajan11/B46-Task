let sum = function(...numbers) {
 let add = 0;
 for (i of numbers) {
    add += i
 }
 return(add)
}

let result = sum(1,2,3,4)
console.log(result)