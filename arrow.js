//3.a) print odd num in array in Arrow function............................................................................

let oddNum = ((...arr) => {           
    var result = [];
    for (let num of arr) {

        if (num % 2 !== 0) {
            result.push(num)
        }
    }
    return result;
})
console.log(oddNum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12,13,33,58));

//3.b) Convert all Strings to Tittle caps in string Array in arrow function..........................................................

let capsArr = [];
let titleCaps = ((st) => {           

    let res = st.split(" ").reduce((a, b) => a + " " + (b.charAt(0).toUpperCase() + b.slice(1) + " "), ' ');
    capsArr.push(res);
    return capsArr;
})("god is great");
console.log((capsArr));

//3.c) Sum of all numbers in array in Arrow function................................................................................

let addNum = ((num) => {    
    let arr = [];
    let sum = 0;
    for (let val of num) {
        sum = sum + val;
    }
    arr.push(sum)
    return arr;
})
console.log(addNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 5,10,11,12]));

//3.d) Return all prime Numbers in Array in arrow function..........................................................................
primearray = [];
nonprimearray = [];
let isPrime = ((array) => {                    
    for (var iterator of array) {
        for (var i = 2; i < iterator; i++) {
            var a = i;
            if (iterator % i == 0) {
                nonprimearray.push(iterator);
                break;
            }
        }
        if (iterator % a !== 0) {
            primearray.push(iterator);
        }
    }
    return primearray;
})
console.log(isPrime([1, 3, 7, 9, 15, 21,19,17,23, 56, 11]));

// 3.e) Return all the palindromes in Array in Arrow function................................................................................
let arr;
let palindrome = ((input) => {        
    arr = [];
    for (let key of input) {
        let val = key.split("").reverse().join("");
        if (val == key) {
            arr.push(val);
        }
    }
    return arr;
})
console.log(palindrome(["brother","anna" ,"amma","mam", "malayalam"]));

