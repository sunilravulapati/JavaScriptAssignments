let marks = [85, 90,45,65,21, 78, 92, 88];
function sum(marks){
    let total = 0;
    for(let m of marks){
        total += m;
    }
    return total;
}
let totalMarks = sum(marks);
console.log("Total Marks: ", totalMarks);

//1. filter() - selection
//whenever the filter method calls the anonymous function, it will pass the current element as argument to the function
//and whatever is returned by the function will be used by the filter method
//what filter does is, it will create a new array and it will add only those elements for which the function returns true

//write a function that can extract marks greater than 70, pack them into a array and return it without using filter method
function getMarks(marks){
    let res = [];
    for(let s of marks){
        if(s>70)
            res.push(s)
    }
    return res;
}
let ans = getMarks(marks);
console.log("Filtered Marks without filter method: ", ans);

//now with filter method
let res1 = marks.filter(function(s){
    return s > 70;
})
console.log("Filtered Marks with filter method: ", res1);

//whenever a function has only one statement, then use arrow function
let res2 = marks.filter(s => s > 70);
console.log(res2);

//find all marks between 30 and 90
let res3 = marks.filter(function(s){
    return s>30 && s<90;
})
console.log("Marks between 30 and 90: ", res3);

//2. map() - transform / modify
let salaries = [100,200,300]
//increase each salary by 50
function increase(salaries){
    let res = [];
    for(let s of salaries){
        res.push(s + 50);
    }
    return res;
}
let updated = increase(salaries);
console.log("updated: ",updated) // returns updated array

let up = salaries.map(function(s){
    return s+50;
})
console.log("updated with map: ", up); // returns updated array

let up1 = salaries.filter(function(s){
    return s+50;
})
console.log("updated with filter: ", up1); // returns same array as filter expects boolean return

let up2 = salaries.map(function(s){
    return s > 50;
})
console.log("updated: ",up2); //returns boolean array


//3.) reduce() - aggregate
//find sum of marks
    let res = marks.reduce((accumulator,element)=> accumulator + element, 0) // 0 is initial value of accumulator and element is each mark and accumulator is the sum so far
    console.log(res)
// find the smallest marks
    let smallest = marks.reduce((min,element) => (element < min ? element : min), marks[0])
    console.log("Smallest marks: ", smallest);

    function findSmallest(marks){
        let min = marks[0];
        for(let m of marks){
            min = Math.min(min, m);
        }
        return min;
    }
    let sm = findSmallest(marks);
    console.log("Smallest marks using function: ", sm);

//find element
    // find 21
    let found = marks.find((m) => m === 21)
    console.log("found: ",found)

//find index
// if -1 is returned, element not found
    // find index of 21
    let index = marks.findIndex(m => m === 21)
    console.log("index: ",index)