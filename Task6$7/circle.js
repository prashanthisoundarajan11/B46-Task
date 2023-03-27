class Circle {
    constructor(radius,color) {
        this.radius = radius;
        this.color = color;
    }
    setRadius(radius){
        this.radius = radius;
    }
    getRadius(){
        return this.radius;
    }
    setColor(color){
        this.color = color;
    }
    getColor(){
        return this.color;
    }

    getArea(){
        return this.radius * this.radius * Math.PI;

    }
    getCircumference(){
        return 2 * this.radius * Math.PI;

    }
}


let circle1 = new Circle(1.0,"red")
console.log(circle1)
//circle1.setRadius(4)
console.log(circle1.getArea());

