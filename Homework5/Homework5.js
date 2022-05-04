function Cat(name) {
    this.name = name;
    foodAmount = 50;
    this.feed = function() {
        console.log('Насыпаем в миску ' + formatFoodAmount() + ' корма');
    };
    function formatFoodAmount(){
        return foodAmount + ' гр.'
    }
}
var barsik = new Cat('Барсик');
barsik.feed();
barsik = null;

function Cat(name) {
    this.name = name;
    foodAmount = 50;
    this.feed = function() {
        console.log('Насыпаем в миску ' + this.dailyNorm() + ' корма');
    };
    function formatFoodAmount(){
        return foodAmount + ' гр.'
    }
    this.dailyNorm = function(amount){
        if (!arguments.length) return formatFoodAmount();
        if (amount < 50){
            throw new Error ('Слишком мало!Котик останется голодный');
        }
        if (amount > 100){
            throw new Error ('Слишком много! Котик растолстеет');
        }
        foodAmount = amount;
    }
}
var barsik = new Cat('Барсик');
console.log(barsik.dailyNorm());
barsik = null;
