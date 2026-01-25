// //copy of a primitive
// //primitives are immutable

// let data = 100
// let copyData = 200

// //check
// data = 250
// console.log(data)
// console.log(copyData)

// // for primitives whenever we modify the value then in stack for the same variable a new one is generated
// // for reference types no copy will be generated, the assignment operator should not be used for creating a copy for reference types......

// let d = {
//     a:10
// }
// let cd = d
// d.a=90
// console.log(d)
// console.log(cd)

// //to create a copy for reference types use the spread operator
// let cd1 = {...d} // or cd1 = Object.assign({},d)
// d.a=100
// console.log(d)
// console.log(cd1) 
// //when objects doesnt have nested objects then spread operator can be used to create a copy


//for objects has nested objects
// let s1 = {
//     name:"anurag",
//     addr:{
//         street:"uppal",
//         pincode:"500088"
//     },
//     saddr:{
//         street:"miyapur"
//     }
// }

// let s2 = {...s1}

// s1.name = "abc"
// s1.saddr.street = 'kphb'
// console.log(s1)
// console.log(s2)
// //here the spread operator has created a copy for the top level elements and for nested objects a reference will be created
// //for handling this we are using the structuredClone{}

// let s3 = structuredClone(s1)
// s1.saddr.street = 'jubilee hills'
// console.log(s1)
// console.log(s3)
