// var birds = ['owl','crow','eagle','dove'];
// birds.unshift('peacock');
// console.log(birds);
// const number = [3,4,65,12,78];
// const isLargestNumber = (Element)=>Element>13;
// console.log(number.findIndex(isLargestNumber));
//function prime(n){
//    if(n %2 == 0)
    // {
    // console.log(n +"is prime");
    //  } 
    //  else
    // {
        // console.log(n +"is not prime");}}


// prime(20);
//sum of natural number
// function sum(n)
// {
//      let sum = 0;

// for(let i=1;i<=n;i++)
// {
// sum+=i;
// }
// console.log("the sum of natural number:",sum);
// }
// sum(10);

// function sum(n)
// {
// let sum = 0;

// // looping from i = 1 to number
// // in each iteration, i is increased by 1
// for (let i = 1; i <= n; i++) {
//     sum += i;
// }

// console.log('The sum of natural numbers:' , sum);
// }
// sum(10)
// function fibanasi (n)
// {
//     let n1 = 0, n2 = 1,n3;
//     for(let i = 0; i <= n; i++)
//     {
//     n3 = n1+n2;
//     n2 = n3;
//     n1 = n2;

// }
// console.log("the series :");
// }
// fibanasi(50)}
// function checksort(arr)
// {
//     const result = array.sort();
//     console.log(result);
// }
// const array =['owl','crow','dove','peacock'];

// checksort(array)
// const n = [1,2,4,24,30];
// // const result = n.map((values) => {
// //     return values>10});
// //   console.log(result);
// const result = n.splice(1,2,'g');
// console.log(result);
// var s1 = ['p','q','r','s'];
// const result = s1.splice(2, 1, 'g');
// console.log(result);
const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];

// At position 2, remove 2 items: 
 const result = fruits.splice(1, 1,"cherry");
 console.log(result);
