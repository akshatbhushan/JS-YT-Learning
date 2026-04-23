//  👉🏻 1. Numbers from 1-10 using for loop

// for (let i=1; i<=10; i++ ){
//     console.log(i)
// }

// 👉🏻  2 using while 10-1

// console.log('2. While')
// let i=10 ;
// while(i>=1){
//     console.log(i)
//         i--
// }

// 👉🏻 3 even numbs 1-20 w for

// for (let i=2; i<=20 ; i+=2){
//     console.log(i)
// }
//     OR  🔁

//  for (let i=1; i<21 ; i++) {
//     if(i%2==0){
//         console.log(i)
//     }
//  }

// 👉🏻 4 odd with while

// let i=1 ;
// while (i<=15){
//     console.log(i)
//     i+=2
// }

//or  🔁

// let i=1;
// while (i<16) {
//     if (i%2 === 1){
//         console.log(i)
//                               // 🧠 i++ here will come in if block and once i becomes 2 if block will fail and won't execute anything except 1 
//     } 
//        i++;   // 🧠 works here as it's outside the if block  
// }


// 👉🏻 5. mult. table of 5

// for (let i=1; i<11 ; i++ ){
//     console.log(5 x ${i} = ${5*i} ) 
    
// }


//  🔁 OR


// let i=1;
// while (i<11){
//     console.log(5 X ${i} = ${5*1})
//     i++;
// }

// 👉🏻 6. sum of 1-100 

// let sum=0
// for (i=1; i<101 ; i++) {
//     sum = sum + i
//     // 🧠  console.log(sum) Here will give the loop result like 1 , 3 , 6, 10... 5050 , it will run in loop 
// }
//     console.log(sum) // 🧠 this directly gives the sum that we want 


// 👉🏻 7. Ask user a no. and check whether odd or even from 1 to that number

// let valu = prompt ("Enter a number bruh")

// for ( let i=1 ; i<=valu; i++)  // 🧠 can even use let i=1  here
//     if(i%2===0){
//         console.log(${i} is EVEN)
//     }

//     else{
//         console.log(${i} is ODD)
//     }

// 👉🏻 8. Count no. b/w 1-100 divided by 3 and 5

// let count=0
// for (let i=1; i<101 ; i++){
//     if(i%3===0 && i%5===0){
//         console.log(i)
//      count++;
//     }
   
// }
//    console.log(Total = ${count})

// 👉🏻 9. loop from 1-100 print the numbers and stop at 1st mult of 7

// for (let i=1 ; i<101 ; i++){
//      console.log(i); 
//     if (i%7===0) {
//         break;
//     }
//     // 🧠 console.log(i); will print till 6 here as it comes after the break
    
// }

// 👉🏻 10 . Print First 5 Odd Numbers Only
2
3 // Write a loop from 1 to 100 that:
4 //Prints only 5 odd numbers
5 //Then stops the loop
// Hey GitHub Copilot,

let count =0;
for (i=1; i<101 ; i++){
    if(i%2===1){
        count++
        console.log(i)
    }
    
    if(count===5){
        break;
    }
}