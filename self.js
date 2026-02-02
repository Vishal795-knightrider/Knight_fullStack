//1.var : fn and global scope(agar fn ke andar nhi declare bahar khi kr rha hu to ab yeh kahi se bhi access ho jayega)  but not block scope

// function ex(){
//     var x=10;
//     console.log(x);
// }
// ex();            //10
// console.log(x);     //reference error :x is not defined

//==redeclare==(problem in debug)
// var x=10;                 //or var x=10;
// var x=20;                 // var x="abhi"; 
// console.log(x);

//==reasign==
// var x=40;
// x="abhi";
// console.log(x);

// var has some drwabacks,especially related to varaibel hoisting and lack of block scope.
// due ot these issues let and const were introduced in ES7 to provide better variable scoping mechanism


//2.let : block scope

// let x=10;
// if (true)
// {
//     let y=20;
//     console.log(x);      //10
//     console.log(y);     //20
// }
// console.log(x);          //10
// console.log(y);          //y is not defined

//===redifinition(not possible)
// let a=20;
// let a=30;

//==reassign==(possible)
// let a=10;
// a=20;
// console.log(a);

//3.const

//redifiniton and reassign(not possible)




//strict and loose eqlity

// console.log('5'==5);     true  //only check value
// console.log('5'===5);    false //checl datatype and value 


//ternary
// let age=20;
// let ans=(age>18) ? "can vote" : "not able to vote";
// console.log(ans); 


//===working with non booleans===//
// //ex:
// console.log(true && "hey");
// console.log( 0 || false);

// Falscy          truthy
// ->undefined     ->anything which is not true
// ->null
// ->0
// ->false
// ->NaN
// ->' '

 

//===STRINGS===//

// let firstname='Vishal';
// let secondname="Kashyap";
// let name1=`This is vishal
// kashyap stdying
// kiet ghaziabad`;
// let Name=new String("Hey ok");

// console.log(firstname);
// console.log(secondname);
// console.log(name1);
// console.log(Name);

//Operation

// let op1='ENGLISH ';
// let op2='Hindi';

// console.log(op1+op2);
// let ans=`${op1} and ${op2}`;
// console.log(ans);
// console.log(op2.length);
// console.log(op1.toLowerCase());


//===substring===
// let str='Vishal';
// console.log(str.substring(2));
// console.log(str.substring(2,5));

// //===split==
// let sen="Hello \\Jee \\Kaise \\ho \\saare";
// let words=sen.split('\\');

// console.log(words);
// console.log(words.join('_'));



//===functions===//

// function avg(num1,num2){
//     console.log(`Average:${(num1+num2)/2}`);
// }
// avg(8,8); 


// let square=function(num){
//     return num*num;
// }
// console.log(square(5));


//Arrow fn

let getExp=(x,y)=>{
    let ans=x**y;
    return x**y;
}

console.log(getExp(2,10));