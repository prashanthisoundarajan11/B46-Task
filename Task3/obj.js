let book = {
    bookName: 'javascript',
     authorName: 'krish',
     noOfPages: 345,
     price: 634.23,
     inStock: 15,
     chapters: {
         1: 'arrays',
         2: 'strings', 
         3: 'objects'
     },
     reviews: [3, 5, 4, 5, 4.5]
 };
 
 //array = [1,2,3,4,5]
 //array.forEach((element,array,index) => {
  //  console.log(element,index,array)
 //});

  //for (let key in book) {
 //   console.log(key)
 //}

 //for (let value in book) {
 //   console.log(value)
 //}

 //for (let key in book) {
  //  console.log(key + ":" + book[key])
 //}

 //for(let key in Object.keys(book)) {
  //  console.log(key)
 //}

 //for(let key in Object.keys(book)) {
   // console.log(key)
 //}

 //for (let key of Object.keys(book)) {
  //  console.log(key)
 //}

 //for (let value of Object.values(book)) {
   // console.log(value)
 //}

 for (let key of Object.keys(book)) {
    console.log(key,book[key])
 }