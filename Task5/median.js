let median = function(array){
  if (array.length%2 == 0){
       let result = +array[(array.length/2)-1] + +array[(array.length/2)]
       let tmp = result/2
       return tmp;
  }
}

arr1 = [1,2,3]
arr2 = [6,4,5,7]
arr3 = arr1 + "," +arr2
arr4 = arr3.split(",").sort()
if (arr1.length == arr2.length){
final = median(arr4)
console.log(final)
}
else {
    console.log("Given array size ia not equal")
}