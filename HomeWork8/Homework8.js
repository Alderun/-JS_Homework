function filterNumbersArr(numbers) {
    return numbers.filter(function(number) {
        return number > 0;
    });
}
function foundPositive(numbers){
    return arr.find(function(elem) {
        return elem > 0;
    });
}
function isPalindrom(str) {
    return str.toLowerCase().split('').reverse().join('') === str.toLowerCase()
}

function areAnagrams(str1, str2) {
    return (str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join(''))
}
function divideArr(arr, n) {
    while (arr.length > n) {
        console.log(arr.splice(0, n))
    }
    console.log(arr);
}
function degreeTwo(number) {
    var sum = 1;
    while (number) {
        if (sum >= number) {
            break;
        }
        sum *= 2;
    } 
    return (sum == number);
}
