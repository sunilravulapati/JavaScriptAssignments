//students
let students = [
    {sno:1, name:"ravi", age:20},
    {sno:2, name:"vikas", age:22},
    {sno:3, name:"manoj", age:21},
    {sno:4, name:"madhu", age:19}
]
// the above is an array of objects

// find students age less than 20
let res = students.filter(function(s){
    return s.age<20;
})
console.log("Students with age < 20: ", res);
//or
let res1 = students.filter(s => s.age < 20);
console.log("Students with age < 20: ", res1);


//increment age by 2 years for manoj
let res2 = students.map(s => {
    if(s.name === 'manoj'){
        return {
            sno:s.sno,
            name:s.name,
            age:s.age + 2
        }
    }
    return s;
})
console.log("Updated Students: ", res2);


//find the sum of ages of all students
let total = students.reduce((accumulator,element) => accumulator + element.age, 0);
console.log(total)
