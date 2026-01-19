// const user = {
//   id: 101,
//   name: "Ravi",
//   email: "ravi@gmail.com",
//   role: "student",
//   isActive: true
// };
// console.log("User Name: " + user.name);
// console.log("User Email: " + user.email);

// user.lastLogin = "2026-01-01";
// console.log(user);

// user.role = "admin";
// console.log(user);

// delete user.isActive;
// console.log(user);

// console.log(Object.keys(user));

const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};
let total = 0,n=0;
for(let v in marks){
    total+=marks[v];
    n++;
}
console.log("Total Marks: " + total);

let avg = total / n;
console.log("Average Marks: " + avg);

let largest = marks.maths;
for(let v in marks){
    if(marks[v] > largest){
        largest = marks[v];
    }
}
console.log("Largest Score: " + largest);

marks.computer = 95;
console.log(marks);