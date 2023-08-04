// Q = 1. // Create a function that takes an array containing only numbers and return the first element.

// function getFirstValue(arr){
//     return arr[0];
// }

// console.log(getFirstValue([1, 2, 3]));

// console.log(getFirstValue([80, 5, 100]));

// console.log(getFirstValue([-500, 0, 50]));



// Q = 2.   // Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.


// function lessThanOrEqualToZero(num) {
//     if(num <= 0){
//         return true;
//     }
// return false;
// }

// console.log(lessThanOrEqualToZero(5));

// console.log(lessThanOrEqualToZero(0));

// console.log(lessThanOrEqualToZero(-2));



// Q = 3;   // Write a function that takes the base and height of a triangle and return its area.


// function triArea(base, height){
//     return (base * height) / 2;
// }


// console.log(triArea(3,2))
// console.log(triArea(7,4))
// console.log(triArea(10,10))


// Q.4 == // Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.



// function lessThan100(a, b) {
// 	let c = a + b;
// 	if(c < 100){
// 		return true;
// 	}else{
// 		return false;
// 	}
// }

// console.log(lessThan100(22, 15))
// // 22 + 15 = 37

// console.log(lessThan100(83, 34))
// // 83 + 34 = 117

// console.log(lessThan100(3, 77))


// function logicalAnd(a, b) {
//     return a && b;
//   }

//   // Test cases
//   console.log(logicalAnd(true, true));   // Output: true
//   console.log(logicalAnd(true, false));  // Output: false
//   console.log(logicalAnd(false, true));  // Output: false
//   console.log(logicalAnd(false, false)); // Output: false



// if 1 in string => push true
// of if 0 in string => push false;

// string is = "101";
// so output should be = [true,false, true];


// function add(arr){
//     let result = [];
//     for(let i = 0; i < arr.length; i++){
//        if(arr[i] == "1"){
//             result.push(true);
//        }else if(arr[i] == "0"){
//           result.push(false)
//        }
//     }
//     return result
// }

// console.log((add("101001")));


// Q. // below array convert to upper case format?

// let arr = ["javaScript","java","c++","kotlin"];


// function capitalWord(array){
//     let string = [];
//   for(let i = 0; i < array.length; i++){
//     string.push(array[i].toUpperCase());
//   }
//   return string;
// }

// console.log(capitalWord(arr));


// Q Even and odd number find?
// let checkOdd = [1,3,5,7,9,];

// function findOddNumber(odd){
//   let result = true;
//   for(let i = 0; i < odd.length; i++){
//     if(odd[i] % 2 == 0){
//         result = false
//         return result;
//     }
//   }
//   return result;
// }
// console.log(findOddNumber(checkOdd));



// function evenNumber(arr){
//   let result = [];
//   for(let i = 1; i <= arr; i++){
//     if(i % 2 == 0){
//       result.push(i)
//     }
//   }
//     return result;
// }

// console.log(evenNumber(10));








// function swap(a,b){
//      c = b;  //C
//      b = a; // B
//      a = c; // a c

//    console.log(a,b);
// }

// swap(3,4);



// function findNumber(num){

//     if(num >= 0){
//         console.log("Number is Positive")
//     }else{
//         console.log("Number is Nagative")
//     }

// }

// findNumber(-4);


// function result(num){
//     if(num >= 80 && num <= 100){
//         console.log("You are in A+ Grade");
//     }else if(num >= 60 && num < 80){
//         console.log("You are in A Grade")
//     }else if(num >= 45 && num < 60){
//         console.log("You are in B+ Grade")
//     }else if(num >= 33 && num < 45){
//         console.log("You are in C Grede")
//     }else if(num < 33){
//         console.log("You are Failed")
//     }else{
//         console.log("Please Enter Right Value")
//     }

// }

// result(90);


// function table(val){

//     for(let i = 1; i <= 10; i++){
//         console.log(`${val} X ${i} = ${val*i}`)
//     }
// }

// table(3)



// Q1 how to find intiger value length; 


// function findIntigerValue(num){
//   let find = num.toString();
//     return find.length;
// }

// console.log(findIntigerValue(100));




// Q2 Q2. how many vowels in a string;

// function vowels(vol) {
//     let lowerValue = vol.toLowerCase();
//     let count = 0;

//     for (let i = 0; i < vol.length; i++) {
//         if (lowerValue[i] === "a" || lowerValue[i] === "e" || lowerValue[i] === "i" || lowerValue[i] === "o" || lowerValue[i] === "u") {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(vowels("helLO  hello world"));




//Q 3. Create a function that takes an array and returns the types of values (data types) in a new array.

// function arrayValueType(arr){
//     let array= [];

//     for(let i = 0; i < arr.length; i++){
//       array.push(typeof arr[i]);
//     }
//     return array
// }

// console.log(arrayValueType([1,2,"null", [],{}]));



// Q4 Given a string of letters, how many capital letters are there?



// function capitalLetters(str){
//     let strString = 0;
//     let uper = str.toUpperCase();
//     for(let i = 0; i < str.length; i++){
//         if(str[i] == uper[i] && str[i] == str.trim()[i]){
//             strString++
//         }
//     }
//     return strString;
// }
// console.log(capitalLetters("hLKK "))



// Q .5 find negative Number


// function findNegativeNum(num){
//     if(num < 0){
//         console.log("Number is nagetive");
//     }else{
//         console.log("Number is Positive")
//     }

// }

// console.log(findNegativeNum(-1))


// Q6  find nagative Number in Array


// function findNumberInArray(num){
//     const arr1 = [] ;  // Negative
//     const arr2 = []; // Positive
//     for(let i = 0; i < num.length; i++){
//         if(num[i] < 0){
//             arr1.push(num[i]);
//         }else{
//             arr2.push(num[i])
//         }  
//     }
//     return [arr1 , arr2]
// }

// console.log(findNumberInArray([2,1,3,8,-1,9,-8]));



// let  arr1 = [] ;  // Negative
// let arr2 = []; // Positive

// function findNumberInArray(num){
//     for(let i = 0; i < num.length; i++){
//         if(num[i] < 0){
//             arr1.push(num[i]);
//         }else{
//             arr2.push(num[i])
//         }  
//     }
//     return 0;
// }

// (findNumberInArray([2,1,3,8,-1,9,-8]));
// console.log(arr1,arr2)


// Q 7  find evenOdd Number in arry


// function evenOdd(num){
//     let arr1 = [];
//     let arr2 = [];
//     for(let i = 0; i < num.length; i++){
//         if(num[i] % 2 === 0){
//             arr1.push(num[i]);
//         }else{
//             arr2.push(num[i]);
//         }
//     }
//     return [arr1, arr2]

// }

// console.log(evenOdd([2,5,8,1,5,6]))



// Q 8 find squre num in array


// function squre(num){
// let arr1 = [];

// for(let i = 0; i < num.length; i++){
//     arr1.push(num[i]*num[i])

// }
//     return arr1;

// }

// console.log(squre([3,7]))


// Q 9 Create a function that takes an array of non-negative integers and strings and return a new array without the strings.


// function filterNum(num){
//     let arr1 =  [];

//     for(let i = 0; i < num.length; i++){

//         if(typeof num[i] === "number"){
//             arr1.push(num[i]);
//         }
//     }
//     return arr1;
// }
// console.log(filterNum([1,"a",3,"d","4"]))





// Q10 . Create a function which returns the total of all odd numbers up to and including n. n will be given as an odd number.


// function addOddNum(num){
//     let sum = 0;

//   for(let i = 0;i<=num;i++){
//     if(i % 2 !== 0){
//         sum += i;
//     }
//   }
//   return sum;
// }

// console.log(addOddNum(5))



// Q11 Write a function to reverse an array.


// function reverseArray(num){
//     let arr1 = []
//     for(let i = num.length-1; i >= 0; i--){
//         arr1.push(num[i])
//     }
//     return arr1;
// }

// console.log(reverseArray([1,2,3,4]));


// Q12 Create a function that takes an array of numbers or letters and returns a string.



// function convertStr(arr){
//     let str = "";

//     for(let i = 0; i < arr.length; i++){
//         str += arr[i];
//     }
//     return str;
// }

// console.log(convertStr([2,4,"s","k", ]));


// Q 13 Write a function that returns the sum of elements greater than 5, in the given array .


// function valueAdd(num){
// let sum = 0;

// for(let i = 0; i < num.length; i++){
//     if(num[i] >= 5){
//         sum += num[i]
//     }
// }
// return sum;
// }
// console.log(valueAdd([2,3,10,]));




// Q 14. Special Arrays
// An array is special if every even index contains an even number and every odd index contains an odd number. Create a function that returns true if an array is special, and false otherwise.
//[1,2,3,4,5];

// function specialArray(arr1){
// let array = true;
//     for(let i = 0; i < arr1.length; i++){
//         if(i % 2 == 0 && arr1[i] % 2 != 0){
//             return false

//         }else if(i % 2 != 0 && arr1[i] %2 == 0){
//             return false
//         }
//         // console.log(i)
//         // console.log(arr1[i])
//     }
//     return true
// }

// console.log(specialArray([3,1,4,3,6,7,8,9,10]));














// Q 16 How to find largest value of array 
// [1,2,3,4,10,6,4,5,7];


// function largeValue(num){
//     let maxValue = 0;
//     for(let i = 0; i < num.length; i++){
//         if(maxValue < num[i]){
//             maxValue = num[i]
//         }
//     }
//     return maxValue;
// }

// console.log(largeValue([1,2,3,4,10,6,4,5,7,55]))


// Q 17 How to fid min value of array..
// [1,2,3,4,10,6,4,5,7];


// function minValue(num){
//     let minNum = Infinity;
//     for(i = 0; i < num.length; i++){
//         if(minNum >  num[i]){
//             minNum = num[i]
//         }
//     }
//     return minNum;
// }

// console.log(minValue([1,2,3,4,10,6,-1,4,5,7]));


// Q 18 Given a letter and an array of words, return whether the letter does not appear in any of the words.


// function forbiddenLetter(arr,target){
//     let str = arr.join("");
//     for(i = 0; i < str.length; i++){
//         if(str[i] == target){
//             return true;
//         }
//     }
//     return false;
// }

// console.log(forbiddenLetter(["rock", "paper", "scissors"], "r"))



// Q 19  Write a for loop to check if all elements in an array are even.

// function findEvenNumber(arr){
//     let result = true;
//     for(i = 0; i < arr.length; i++){
//         if(arr[i] % 2 == 0){
//             result = false;
//         }
//     }
//     return result;
// }

// console.log(findEvenNumber([3,1,7,11]));


// Q 20 print even num of array [1,2,3,4,5,6,7,8,9,10];


// function evenNumber(arr){
//     let arr2 = []
// for(i = 0; i < arr.length; i++){
//     if(arr[i] % 2 == 0){
//          arr2.push(arr[i])
//     }
// }
// return arr2
// }

// console.log(evenNumber([1,2,3,4,5,6,7,8,9,10,3,12]))


// Q 21 sum in array like 10 to 20


// function addNum(num){
//     let sum  = 0;
//     for(i = 10; i <= num; i++){
//         if(i % 2 == 0){
//             sum += i;
//         }
//     }
//     return sum;
// }

// console.log(addNum(20))




// Q 15  add sequence in array sequence is 
//[1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]; Ans 144


// function checkFibonacci(array) {
//   for (var i = 0; i < array.length; i++) {
//     if (i + 2 < array.length) {
//       if (array[i] + array[i + 1] !== array[i + 2]) {
//         return false;
//       }
//     }
//   }
//   return true;
// }

// console.log(checkFibonacci([0, 1, 1, 2, 3]));
// console.log(checkFibonacci([1, 1, 2, 3, 5]));
// console.log(checkFibonacci([2, 3, 5, 8, 13]));



// Or

// function FibonacciSequence(inputLength) {
//     let a = 0;
//     let b = 1;
//     let outputArray = [];
//     for (let i = 0; i <= inputLength; i++) {
//       outputArray.push(a);
//       let temp = a;
//       a = b;
//       b = temp + b;
//     }
//     return outputArray[outputArray.length - 1];
//   }
//   console.log(FibonacciSequence(13));

// ------------------- OR ---------------------- 


//   function FibonacciSequence(n) {
//     let sequence = [1, 1]; 

//     for (let i = 2; i < n; i++) {
//         const nextNumber = sequence[i - 1] + sequence[i - 2];// 1,1,2,3,5,
//         // console.log(sequence[i - 1],sequence[i-2]);
//         sequence.push(nextNumber);
//     }

//     return sequence[sequence.length - 1];
// }

// console.log(FibonacciSequence(12));
// [1,1,2,3,5]  = 8


// OR 
//  [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610]

// function FibonacciSequence(n) {
//   let last = n[n.length - 1]
//   let secondLast = n[n.length - 2]
//   return last + secondLast  
// }

// console.log(FibonacciSequence([1, 1, 2, 3])); //== 5



// Q 21 Create a function that returns true if the first array can be nested inside the second and false otherwise.

//    [1,2,3,4,[5,6]]
// true
// [1,2,3,4,5,6,7,8,9]
// false
// console.log(nestedarr([1,2,3,[1,2,3]]));


// function nestedArr(arr1){
//     console.log(typeof arr1[3] );

//     for(i = 0; i < arr1.length;i++){
//         if(Array.isArray(arr1[i])){
//             return true;
//         }
//     }
//     return false;
// }
// console.log(nestedArr([1,2,3,[1,2,3]]));
// console.log(nestedArr([1,2,3]));


// ----------------------OR -------------------

// function nestedArr(arr1){


//     for(i = 0; i < arr1.length;i++){
//         if(typeof arr1[i] === "object"){
//             return true;
//         }
//     }
//     return false;
// }
// console.log(nestedArr([1,2,3,[1,2,3]]));
// console.log(nestedArr([1,2,3]));


// Q22  reverse the sentence 
// eg. hello how are you  => uoy era woh

// function reverseStr(arr){
//     let arr1 = "";

//     for(let i = arr.length -1; i >= 0; i--){
//        arr1 += arr[i]
//     }

//     return arr1
// }

// console.log(reverseStr("how are you"));



// Q 23 Given an input string, reverse the string word by word, the first word will be the last, and so on.

// reverseWords(" the sky is blue") ➞ "blue is sky the"


// function reverseWords(arr){
//     let newArr =  arr.split(" ");
//     let str = [];

//     for(i = newArr.length-1; i >= 0; i--){
//         str.push(newArr[i]);
//     }
//     return str;
// }

// console.log(reverseWords("the sky is blue"));


// madam madam  car  rac racecar

// function checkStr(str1){
//     let arr = "";
//     for(let i = str1.length-1; i >= 0; i--){
//            arr += str1[i]
//     }
//     return arr == str1
// }

// console.log(checkStr("racecar"));




// let nestedArr = [[1, 2, 3], [1, 2, 3], [1, 2, 3, [4, 5, 6, [7, 8, 9]]]]  // input

// [
//   1, 2, 3, 1, 2, 3,
//   1, 2, 3, 4, 5, 6,         output
//   7, 8, 9
// ]


// Q 24  nestedArry convert in one array 

// function nestgedArray(arr){
//     let newArr = [];
//     console.log(Array.isArray(newArr));

//     function flatArray(array){ 
//         for(let i = 0; i < array.length; i++){
//             if(Array.isArray(array[i])){
//                 flatArray(array[i]);
//             } else {
//                 newArr.push(array[i]);
//             }
//         }
//     }

//     flatArray(arr);
//     return newArr;
// }

// console.log(nestgedArray([1, 2, 3, 4,[3,2,1],[5,6,7]]));





// Q 25. nestedarray sum 
// let arrs = [
//     [1, 2, 3], 
//     [4, 5, 6], 
//     [7, 8, 9]
// ];

// function arrSum(arr){
//     let sum = 0;
//     for(let i = 0; i< arr.length; i++){
//         for(let j = 0; j<arr[i].length; j++){
//             // console.log(arr[i][j])
//             if(arr[i][j] % 2 == 0){
//                 sum += arr[i][j]
//             }
//         }
//     }
//     return sum;
// }

// console.log(arrSum(arrs))


// Q 25 string convert lower case to upper case and upper case to lower case 
// let str = "heLLo hoW ArE";


// function capitalSmallConvert(arr){
//     let str1 = "";
//     for(let i = 0; i < arr.length; i++){
//        if(arr[i] == arr[i].toUpperCase()){
//             str1 += arr[i].toLowerCase();
//        }else if (arr[i] == arr[i].toLowerCase()){
//             str1 += arr[i].toUpperCase();
//        }
//     }
//     return str1

// }
// console.log(capitalSmallConvert("heLLo hoW ArE"));



// for(let i = 10; i >= 1; i--){
//     if(i % 2 == 0){
//         console.log(i);
//     }
// }


// let sum = 0;
// for(let i = 1; i <= 100; i++){
//     sum += i;
// }
// console.log(sum);

// let arr = [];

// for(let i = 10; i >=1; i--){
//     arr.push(i);
// }

// console.log(arr)



// let arr = [2, 2, 3, 4, 9];

// function avrage(num) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum / arr.length;
// }
// console.log(avrage(arr));

// let arr = [2, 2, 3, 4, 9,14];

// let minNum = -Infinity;

// for(let i = 0; i < arr.length;i++){

//     if(minNum < arr[i]){
//         minNum = arr[i];
//     }
// }

// console.log(minNum);

// let arr = [2, 2, 3, 4, 9,14];
// function maxNumber(arr){
//     let minNum = -Infinity;
//     for(let i = 0; i < arr.length; i++){
//         if(minNum < arr[i]){
//             minNum = arr[i]
//         }
//     }
//     return minNum;
// }

// console.log(maxNumber(arr));




// let str = "hello wOrld";

// function findVowels(string){
//     let str1 = string.toLowerCase();
//     let count = 0;
//     for(let i = 0; i < str1.length; i++){
//         if(str1[i] == "a" || str1[i] == "e" || str1[i] == "i" || str1[i] == "o" || str1[i] == "u"){
//             count++
//         }
//     }
//     return count;
// }

// console.log(findVowels("hello Wold New"));


// Q13. Write a for loop to check if an array is sorted in ascending order.
