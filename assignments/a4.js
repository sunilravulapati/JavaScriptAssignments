// array-operations-advanced

// 1
let cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

// using the filter() we are getting only the in stock products
let fil1 = cart.filter(s => s.inStock === true);
console.log("In Stock products: ", fil1);

// using map() we are getting the name of the product and its total price
let m1 = cart.map(s => {
  return {
    name: s.name,
    totalPrice: s.price * s.quantity
  };
});
console.log("Names and the total price: ", m1);

// using reduce() calculation of grand total cart value
let total1 = cart.reduce((acc, s) => acc + (s.price * s.quantity), 0);
console.log("Grand total: ", total1);

// using find() we checked if Mouse is there in the cart or not
let f11 = cart.find(s => s.name === "Mouse");
console.log(f11);

// using findIndex() we are finding the position of "Keyboard"
let f12 = cart.findIndex(s => s.name === "Keyboard");
console.log("Keyboard index: ", f12);



// 2
let students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

// using filter() getting the passed students marks >= 40
let fil2 = students.filter(s => s.marks >= 40);
console.log("Passed Students: ", fil2);

// using map() giving out the grades
let m2 = students.map(s => {
  if (s.marks >= 90) {
    s.grade = "A";
  } else if (s.marks >= 75) {
    s.grade = "B";
  } else if (s.marks >= 60) {
    s.grade = "C";
  } else {
    s.grade = "D";
  }
  return s;
});
console.log(m2);

// using reduce() calculating the average marks
let total2 = students.reduce((acc, s) => acc + s.marks, 0);
console.log("Average: ", total2 / students.length);

// using find() the student who scored 92
let f21 = students.find(s => s.marks === 92);
console.log("Student with 92 marks: ", f21);

// using findIndex() of student "Kiran"
let f22 = students.findIndex(s => s.name === "Kiran");
console.log("Kiran's index: ", f22);



// 3
let employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

// using filter() to get IT department employees
let fil3 = employees.filter(e => e.department === "IT");
console.log(fil3);

// using map() to add netSalary with 10% bonus
let m3 = employees.map(e => {
  e.netSalary = e.salary + e.salary * 0.10;
  return e;
});
console.log(m3);

// using reduce() to calculate total salary payout
let total3 = employees.reduce((acc, e) => acc + e.salary, 0);
console.log(total3);

// using find() to get employee with salary 30000
let f31 = employees.find(e => e.salary === 30000);
console.log(f31);

// using findIndex() to get index of Neha
let f32 = employees.findIndex(e => e.name === "Neha");
console.log(f32);



// 4
let movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

// using filter() to get Sci-Fi movies
let fil4 = movies.filter(m => m.genre === "Sci-Fi");
console.log(fil4);

// using map() to return title and rating
let m4 = movies.map(m => m.title + " (" + m.rating + ")");
console.log(m4);

// using reduce() to calculate average rating
let total4 = movies.reduce((acc, m) => acc + m.rating, 0);
console.log(total4 / movies.length);

// using find() to get movie Joker
let f41 = movies.find(m => m.title === "Joker");
console.log(f41);

// using findIndex() to get index of Avengers
let f42 = movies.findIndex(m => m.title === "Avengers");
console.log(f42);



// 5
let transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];

// using filter() to get credit transactions
let fil5 = transactions.filter(t => t.type === "credit");
console.log(fil5);

// using map() to extract amounts
let m5 = transactions.map(t => t.amount);
console.log(m5);

// using reduce() to calculate final balance
let total5 = transactions.reduce((acc, t) => {
  if (t.type === "credit") {
    return acc + t.amount;
  } else {
    return acc - t.amount;
  }
}, 0);
console.log(total5);

// using find() to get first debit transaction
let f51 = transactions.find(t => t.type === "debit");
console.log(f51);

// using findIndex() to get index of amount 10000
let f52 = transactions.findIndex(t => t.amount === 10000);
console.log(f52);
