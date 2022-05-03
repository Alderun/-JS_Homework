function Cat(name) {
    this.name = name;
    this.foodAmount = 50;
    this.feed = function() {
        console.log('Насыпаем в миску ',this.formatFoodAmount(),' корма');
    };
    this.formatFoodAmount = function(){
        return this.foodAmount + '.гр'
    }
}
var barsik = new Cat('Барсик');
barsik.feed();
barsik = null;

function Cat(name) {
    this.name = name;
    this.foodAmount = 50;
    this.feed = function() {
        console.log('Насыпаем в миску ',this.formatFoodAmount(),' корма');
    };
    this.formatFoodAmount = function(){
        return this.foodAmount + '.гр'
    }
    this.dailyNorm = function(amount){
        if (!arguments.length) return this.formatFoodAmount();
        if (amount < 50){
            throw new Error ('Слишком мало!Котик останется голодный');
        }
        if (amount > 100){
            throw new Error ('Слишком много! Котик растолстеет');
        }
        this.foodAmount = amount;
    }
}
var barsik = new Cat('Барсик');
console.log(barsik.dailyNorm());
barsik = null;
