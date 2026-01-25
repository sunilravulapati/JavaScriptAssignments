let students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

//using filter gettting the passed students marks >=40
let fil = students.filter(s => s.marks >= 40)
console.log("Passed Students : ",fil)

//using map giving out the grades
let m = students.map(s=> {
    if(s.marks>= 90){
        s.grade = "A"
    }
    else if(s.marks>= 75 && s.marks<90){
        s.grade = "B"
    }
    else if(s.marks>= 60 && s.marks<75){
        s.grade = "C"
    }
    else{
        s.grade = "D"
    }
    return s;
})
console.log(m)

//using reduce calculating the average marks
let red = students.reduce((acc,s) => acc + s.marks,0)
console.log("Average: ",red/students.length)

// using find() the student who scored 92
let topScorer = students.find(s => s.marks === 92);
console.log("Student with 92 marks:", topScorer);

// using findIndex() of student "Kiran"
let index = students.findIndex(s => s.name === "Kiran");
console.log("Kiran's index:", index);