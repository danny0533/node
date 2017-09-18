var fruits = ["Banana", "Orange", "Apple", "Mango"];

// console.log(fruits.length);

// for (i = 0; i<fruits.length; i++){
//     console.log(fruits[i]);
// }

// for (var i=0; i<fruits.length;i++){
//     if (fruits[i] == "Apple"){
//         break;
//     }
//     console.log(fruits[i])
// }

// for (var i=0; i<fruits.length;i++){
//     if (fruits[i] == "Apple"){
//         continue;
//     }
//     console.log(fruits[i])
// }

// function plusTwo(x){
//     return x+2;
// }

// var seven = plusTwo(5);

// console.log(seven);

// function fruitloop(Arrry){
//     for(var i=0; i<Arrry.length;i++){
//         if(Array[i] == "Apple"){
//             return i;
//         }
//     }
// }

// var appleposition = fruitloop(fruits);
// console.log(appleposition);

fruits.forEach(function(fruits){
    console.log(fruits)
})