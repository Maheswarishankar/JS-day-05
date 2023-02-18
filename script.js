
//1.(a)print odd num in array..................................................................................................

//Anonymous Function.........................
let oddNum = function(arr){
    let result = [];
    for(let num of arr){

            if(num % 2 !==0){
                result.push(num);
            }
        }
        return result;    
}
console.log(oddNum([1,2,3,4,5,6,7,12,33,44,55,80,90]));

//1.(a) print odd num in array

//IIFE Function.................................

let arr = [];
((num)=>{

        for(let val of num){
            if(val % 2!==0){
                arr.push(val)
            }
        }
})([1,2,3,4,5,6,7,12,33,44,55,67,80,90])
console.log(arr);

//1.(b) Convert all Strings to Tittle caps in string Array ..................................................................

//Anonymous Function...........................

let titleCaps = (function(input){
    let capsArr = [];

        let res1 = input.split(" ").reduce((a, b) => a + " " + (b.charAt(0).toUpperCase() + b.slice(1) + " "), ' ');
        capsArr.push(res1);
        return capsArr;
  });
  console.log(titleCaps("god is love"));
  
//IIFE Function.................................

let tittleCaps = [];
((CapssArr)=>{

        let res1 = CapssArr.split(" ").reduce((a, b) => a + " " + (b.charAt(0).toUpperCase() + b.slice(1) + " "), ' ');
        tittleCaps.push(res1);
        return tittleCaps;  

})("i love india");
console.log(tittleCaps);

//1.(C) Sum of all numbers in array.......................................................................................

//Anonymous Function...........................

let addNum = function(num){
    let arr = [];
    let sum = 0;
        for(let val of num){
            sum += val        }
            arr.push(sum)
            return arr
}
console.log(addNum([1,2,3,4,5,6,7,11,12,13,14,15]));

//IIFE Function.................................

let addNum1 = [];
((num)=>{
    let sums = 0;
        for(let val of num){
        sums += val; 
    }
        addNum1.push(sums)
        return addNum1
        
})([1,2,3,4,5,6,7,11,12,13,14,15,16])
console.log(addNum1)

//1.(d) Return all prime Numbers in Array..................................................................................

//Anonymous Function...........................

primeArray = [];
nonprimeArray = [];

let isPrime=(function(array){
    for(let iterator of array){

        for(let i=2; i<iterator;i++){
            var a=i;
            if(iterator%i===0);
            nonprimeArray.push(iterator);
            break;
        }
        if(iterator%a!==0){
            primeArray.push(iterator);
        }
    }
    return primeArray
})
console.log(isPrime(array=[3,4,5,6,7,8,9,11,12,13,14,1]))

//IIFE Function.........................................

primeArray1 = [];
nonprimeArray1 = [];

((array1)=>{
    for(let key of array1){

        for(let i=2; i<key;i++){
            var a1=i;
            if(key%i==0);
            nonprimeArray1.push(key);
            break;
        }
        if(key%a1!==0){
            primeArray1.push(key);
        }
    }
    return primeArray1
})([3,4,5,6,7,8,9,11,12,13,14,19,23,1])
console.log(primeArray1)

//1.(e) Return all the palindromes in Array.........................................................................................

//Anonymous Function...........................

let arrs;
let palindrome = (function (input) {
   let arrs = [];
  for (let key of input) {
    let val = key.split("").reverse().join("");
    if (val == key) {
      arrs.push(val);
    }
  }
  return arrs;
})
console.log(palindrome(["amma","mahi", "mam", "malayalam"]));
 
  //IIFE Function................................. 
 
 let arr1;
 ((input) => {
   arr = [];
   for (let key of input) {
     let val = key.split("").reverse().join("");
     if (val == key) {
       arr.push(val);
     }
   }
   return arr;
 })(["anna","brother", "mam", "malayalam"])
 console.log(arr);



// 1.f(1)Return median of two sorted array of the same size.............................................................................................

//Anonymous Function...........................

let median = (function (val, val2) {
    let concat = [...val, ...val2].sort();
    console.log(`Concat of Array : ${concat}`);
    let length = concat.length;
  
    if (length % 2 === 1) {
      return concat[(length / 2) - .5];
    }
    else {
      return (concat[length / 2] / 2 + concat[(length / 2)] / 2 + 5);
    }
  })
  console.log(`Median Value of Two Array : ${median([10, 40, 70, 80, 110], [20, 50, 90, 100, 110])}`);
  
  //IIFE Function................................. 
  
  ((val, val2) => {
    let concat = [...val, ...val2].sort();
    console.log(`Concat of Array : ${concat}`);
    let length = concat.length;
  
    if (length % 2 === 1) {
      console.log(`Median Value of Two Array : ${concat[(length / 2) - .5]}`);
    }
    else {
      console.log(`Median Value of Two Array :${(concat[length / 2] / 2 + concat[(length / 2)] / 2 + 5)}`);
    }
  })([10, 40, 70, 80, 60], [20, 50, 90, 100, 30])
  



  //1.(g)Remove Duplicates from an Array...................................................................................................... 

//Anonymous Function...........................

let duplicate = (function (arr) {
  let res = {};
  for (let i = 0; i < arr.length; i++) {
    res[arr[i]] = 1;
  }
  return Object.keys(res).map(val => +val);
})
console.log(duplicate([100, 2, 3, 99, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 99]));

  //IIFE Function................................. 

((arr) => {
  res = {};
  for (let i = 0; i < arr.length; i++) {
    res[arr[i]] = 1;
  }
  console.log(Object.keys(res).map(val => +val));
})([100, 2, 3, 99, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 99]);  

