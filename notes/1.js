function sum(marks){
    let total = 0;
    for(let v of marks){
        total +=v;
    }
    return total;
}
let marks = [45, 67, 89, 23, 90];
console.log("Total Marks: " + sum(marks));


// smallest element in an array
function smallestElement(arr){
    let smallest = arr[0];
    for(let i=1; i<arr.length; i++){
        if(arr[i] < smallest){
            smallest = arr[i];
        }
    }
    return smallest;
}
let numbers = [34, 12, 5, 67, 23];
console.log("Smallest Element: " + smallestElement(numbers));

// task 1: let totalBill = 0
//tasks: add 500 to totalBill
// add 1200 to totalBill
// Apply 200 discount to totalBill
// add 18% tax to totalBill
// print totalBill

let totalBill = 0;
totalBill += 500;
totalBill += 1200;
totalBill -= 200;
totalBill += totalBill * 0.18;
console.log("Total Bill: " + totalBill);

//difference between console.log("hello" , a) and console.log("hello" + a)
// , is used to print multiple values as it is
// + is used to concatenate strings
let a = 10;
console.log("Value of a is: ", a); //prints: Value of a is: 10
console.log("Value of a is: " + a); //prints: Value of a is: 10