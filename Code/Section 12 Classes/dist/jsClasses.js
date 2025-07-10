class Player {   
    static description = "Player In Our Game";
    #score = 0;
    #numLives = 10;
    constructor(first, last){
        this.first = first;
        this.last = last;
    }
    get score(){
        return this.#score;
    }
    getScore(){
        return this.#score;
    }
    set score(newScore){
        if (newScore < 0){
            throw new Error("Score must be postive!")
        }
        this.#score = newScore
    }
    updateScore(newScore) {
        this.#score = newScore;
    }
    taunt(){
        console.log("BOOYAH!")
    }
    loseLife(){
        if (this.numLives > 0){
            this.numLives -= 1;
        }
    }
    static randomPlayer(){
        return new Player("Andy", "Samberg");
    }

    get fullName(){
        return `${this.first} ${this.last}`
    }
    set fullName(newName){
        const [first, last] = newName.split(" ")
        this.first = first;
        this.last = last;
    }
}

class AdminPlayer extends Player{
    /*
    Extends the Base Class Player. 
    */
    constructor(first, last, powers) {
        super(first, last);
        this.powers = powers;
    }
    isAdmin = true;
}
const admin = new AdminPlayer("admin", "mCadmin", ["delete","restore world"])


// Can instantiate of the Player class using 'new' keyword

// const player1 = new Player("blue","steele");
// // player1.taunt();
// // console.log(player1.first);
// // console.log(player1.last);
// console.log(player1.score);
// player1.updateScore(28);
// console.log(player1.score);
// // const player2 = new Player("charlie", "brown");
// // player2.taunt();
// player1.score
// player1.score = 213987
// console.log(player1.fullName);
// player1.fullName = "Amy Adams";
// console.log(player1.fullName);