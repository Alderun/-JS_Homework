var arr = ['Vasya', 'Dima', 'Artem'];

function changeArr(arr) {
  return arr.map(function (item) {
    return { name: item };
  });
}
console.log(changeArr(arr));
/////////////////////////////////////////////////
var arr = ['00', '13', '24'];

function getTime(arr) {
  return arr.reduce(function (string, item) {
    return (string + ' : ' + item);
  }, 'Текущее время');
}
console.log(getTime(arr));
////////////////////////////////////////////////
var text = 'Привет Алеся';

function findLetter(text) {
  var arrVowels = ['у', 'е', 'ы', 'а', 'о', 'э', 'я', 'и', 'ю'];
  var newArr = text.toLowerCase().split('');
  var n = 0;
  arrVowels.forEach(function (item) {
    var result = newArr.filter(function (j) {
      return j === item;
    });
    n += result.length;
  });
  return 'В переданном тексте "' + text + '" - ' + n + ' гласных.';
}   
console.log(findLetter(text));
///////////////////////////////////////////////////
function countSentencesLetters(text) {
    var regExp = /[\?\.!]/;
    var arr = text.split(regExp);
  
    arr.forEach(function (item) {
      if (item.length > 0) {
        var regExp = /[,\s]/;
        console.log(
          item.trim() +
            ': Letters quantity is ' +
            item.split(regExp).join('').length
        );
      }
    });
    return arr;
  }
  countSentencesLetters('Привет, студент! Студент... Как дела, студент?');
