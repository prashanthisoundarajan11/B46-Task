class Uber{
    constructor(kilometer,car_type){
        this.kilometer = kilometer;
        this.car_type = car_type;
    }
    getPrice(){
        if(this.car_type == "sadan")
         {
            return  this.kilometer *12
         }
         else if(this.car_type == "mini")
         {
           return this.kilometer*8
         }
    }
}

let uber1 = new Uber(20,"sadan")
let uber2 = new Uber(10,"mini")
console.log(uber1)
console.log(uber1.getPrice())
console.log(uber2.getPrice())