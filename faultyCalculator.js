//Create a faulty calculator using javascript
//It perform wrong operation
// i.e. + --> -
 /*         * --> + */
        // - --> /
        // / --> **
// Build 10% faulty calculator

// do{
//     console.log(a);
// }while(a < 0.1)

// f(a < 0.1){
//     console.log("faulty");
// }

// let a=Math.random();
// let b=Math.random();

// let plus='+';
// let minus='-';
// let divide='/';
// let multiply='*';
// let exopnebtial='**';

// let op=prompt("Enter operator");
// //let op='/';

// if(a>0.1 && b>0.1){
//          if(op==plus){
//             console.log(a-b);
//          }
//          else if(op==minus){
//             console.log(a/b);
//          }
//          else if(op==divide){
//             console.log(a**b);
//          }
//          else{
//              console.log(a+b);           
//          }
// }

let random=Math.random();

let a=prompt("Enter First number");
let b=prompt("Enter second number");
let op=prompt("Operator");

let obj={
    '+':'-',
    '-':'/',
    '/':'**',
    '*':'+'
}

if(random > 0.1){
    alert(`the result is ${eval(`${a} ${op} ${b}`)}`);
}
else{
    op=obj[op];
    alert(`the result is ${eval(`${a} ${op} ${b}`)}`);
}