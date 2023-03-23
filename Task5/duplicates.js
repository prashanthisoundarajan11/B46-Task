/*
let duplicate = function(array) {
   tmp = [];
   tmp1 = [];
   for (let i=0;i<array.length;i++) {
     for(let j=i+1;j<array.length;j++){
          if (array[i]  == array[j]){
             tmp.push(array[i])
            
          }
          
  
    }

   }
   return tmp
}
array = [1,2,3,7,4,4,5,6,7]
result = duplicate(array)

*/
let duplicate = finction(array)
{
new_array = []
array.forEach((element) => {
    if(!new_array.includes(element)){
        new_array.push(element)
    }
    })
}
result = duplicate(array)      
console.log(new_array)