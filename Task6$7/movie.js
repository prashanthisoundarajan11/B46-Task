class Movies {
    constructor(title,studio,rating = "R"){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    getPG() {
        if(this.rating == "PG") {
            return this.title,this.studio,this.rating
        }
    }
}

let movie1 = new Movies("V2Varuvaya","AVM")
let movie2 = new Movies("Casino Royale","Eon Productions","PG­")
console.log(movie1)
console.log(movie2)