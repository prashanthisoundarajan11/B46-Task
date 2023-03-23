let reverse = function(values){
     let temp = "";
     for (j=values.length-1;j>=0;j--) {
          temp += values[j];
     }
     temp+=",";

    return temp.slice(0,-1)
}

let palindrome = function(array){ 
    let final = "";

    for (i of array){
    
       final = reverse(i)
       if (final == i){
        console.log(`${i} is a palindrome`)
       }
       else {
        console.log(`${i} is not a palindrome`)
       }
    }
   }
array = ["mam","malayalam","write","madam"]
result = palindrome(array);

