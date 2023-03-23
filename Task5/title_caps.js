let caps = function(value) {
    let final = "";
    let result = value.split(" ")
    for( i of result ) {
       // console.log(result[0][0].toUpperCase());
       for (j=0;j<i.length;j++){
         if (j == 0) {
            final += i[j].toUpperCase();
         }
         else {
            final += i[j]
         }

       }
       final += " ";
       
    }
    return final
}
let value = "hello prashanthi"
temp = caps(value);
console.log(temp);
