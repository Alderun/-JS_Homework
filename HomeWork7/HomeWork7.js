function Animal(name){
    var self = this;
    self.foodAmount = 50;

    function formatFoodAmount() {
        return self.foodAmount + ' гр.';
    }

    self.dailyNorm = function(amount) {
        if (!arguments.length) return formatFoodAmount();

        if (amount < 30 || amount > 100) {
            return 'Недопустимое количество корма.';
        }

        self.foodAmount = amount;
    };

    self.name = name;

    self.feed = function() {
        console.log('Насыпаем в миску ' + self.dailyNorm() + ' корма.');
    };
}

function Cat(name) {
    Animal.apply(this, arguments);

    var animalFeed = this.feed;
    this.feed = function() {
        animalFeed();
        console.log("Кот доволен ^_^")
        return this;
    }
    this.stroke = function(){
        console.log("Гладим кота")
        return this;
    }
}

var barsik = new Cat('Барсик');

console.log(barsik.dailyNorm());
barsik.feed();

console.log(barsik.dailyNorm(200));
barsik.feed();

console.log(barsik.dailyNorm(75));
barsik.feed();



function Animal(name) {
    this.foodAmount = 50;
    this.name = name;
}

Animal.prototype.formatFoodAmount = function() {
    return this.foodAmount + ' гр.';
}

Animal.prototype.dailyNorm = function(amount) {
    if (!arguments.length) return this.formatFoodAmount();

    if (amount < 30 || amount > 100) {
        return 'Недопустимое количество корма.';
    }

    this.foodAmount = amount;
}

Animal.prototype.feed = function() {
    console.log('Насыпаем в миску ' + this.dailyNorm() + ' корма.');
}

function Cat(name) {
    Animal.apply(this, arguments);
}

Cat.prototype = Object.create(Animal.prototype);

Cat.prototype.constructor = Cat;

Cat.prototype.feed = function() {
    Animal.prototype.feed.apply(this);
    console.log('Кот доволен ^_^');
}


var barsik = new Cat('Барсик');
console.log(barsik.dailyNorm());
console.log(barsik.feed());

console.log(barsik.dailyNorm(200));
console.log(barsik.feed());

console.log(barsik.dailyNorm(75));
console.log(barsik.feed());
