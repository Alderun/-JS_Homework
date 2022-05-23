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
    if (str.toLowerCase().split('').reverse().join('') === str.toLowerCase()) {
        return true;
    } else {
        return false;
    }
}
function areAnagrams(str1, str2) {
    if (str1.length !== str2.length)
        return false;
    if (str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join('')) {
        return true;
    } else {
        return false;
    }
}
function divideArr(arr, n) {
    do {
        console.log(arr.splice(0, n))
    }
    while (arr.length > n)
    console.log(arr);
}
function degreeTwo(number) {
    var sum = 2;
    while (number) {
        if (sum >= number) {
            break;
        }
        sum *= 2;
    } 
    return (sum == number) ? true : false;
}