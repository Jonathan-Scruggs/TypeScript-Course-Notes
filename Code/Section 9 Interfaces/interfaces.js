var pt = { x: 123, y: 1234 };
var thomas = { first: "Thomas", last: "Hardy", id: 1, sayHi: function () { return "Hello"; } };
thomas.first = "Something Else";
var shoes = {
    name: "Blue Suede Shoes",
    price: 100,
    applyDiscount: function (amount) {
        var newPrice = this.price * (1 - amount);
        this.price = newPrice;
        return newPrice;
    }
};
console.log(shoes.applyDiscount(0.4));
