let obj1 = {name: "person 1",age:5"}
let obj2 = {age:5,name:"person 1"}
tmp1 = Object.keys(obj1);
tmp2 = Object.keys(obj2);
result = []
for (i of tmp1) {
   if (tmp2.includes(i)) {
    result.push("A")
   }
   else {
    result.push("NA")
   }
}
if (result.includes("NA")) {
    console.log("Array does not matches")
}
else {
    console.log("Array Matches") 
}