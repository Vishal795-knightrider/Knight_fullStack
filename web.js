//1.VAR

//a.
// console.log(my);
// var my=10;
// console.log(my);

//b.
// var my=20;               //var can be redeclared
// console.log(my);

//c.
// //var has function scope
// function demofunction(){     //var ye fn ke andar hi use ho skta hai
//     var my=30;
//     console.log(my);
// }
// demofunction();
// console.log(my);   //refernec error


//2.LET


//a.
// let mylet=10;
// console.log(mylet);
// let mylet=20;       no redeclare


//b.
// {
//     let x=50;
//     console.log(x);
// }
// {
//     let x=100;
//     console.log(x);
// }

//c.(var shadowing)
// {
// let x=50;
// console.log(x);
// {
//     let x=100;
//     let y=200;
//     console.log(y);
//     console.log(x);
// }
// }



//d.
// {
//     let x=50;
//     console.log(x);
//     if(true)
//     {
//         let x=100;
//         console.log(x);
//     }
//     console.log(x);
// }



//3.CONST

// const ok=10;
// console.log(ok);


//block scope
// {
//     const dip=10;
//     console.log(dip);
// }
// {
//     const dip=40;
//     console.log(dip);
// }


// const arr=[1,2,"Hello"];
// arr.push(3);
// console.log(arr);

// arr=[4,5,6];
// console.log(arr);

// function
// function add(a,b){
//     return a+b;
// }
// console.log(add(2,3));

//names function
//  let div= function devdide(a,b){
//     return a/b;
//  }
//  console.log(div(8,2));



//anonymous function(which has no name)
// let multiply=function(a,b){
//     return a*b;
// };
// concole.log(multiply(3,4));

//->advantage of anonymous fn related to memory 
//1.reduce memory usage since they are not stored in the global scope and can be garbage collected when no longer needed.

//->related to code conciseness



//Arrow fn


//single expression body
//1.  let multiply=(a,b)=>a*b;
// console.log(multiply(5,6));

// 2.let subtract =(a,b)=>a-b;
// console.log(subtract(4,5));

//with multiple expression body 
// let div=(a,b)=>{
//     let res=a/b;
//     return res;
// }
// console.log(div(14,2));

