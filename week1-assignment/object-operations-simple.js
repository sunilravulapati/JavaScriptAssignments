//operations object simple
//1
const user = {
  id: 101,
  name: "Ravi",
  email: "ravi@gmail.com",
  role: "student",
  isActive: true
};
console.log("User Name: " + user.name);
console.log("User Email: " + user.email);

user.lastLogin = "2026-01-01";
console.log(user);

user.role = "admin";
console.log(user);

delete user.isActive;
console.log(user);

console.log(Object.keys(user));


//2
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

//3
const settings = {
  theme: "light",
  notifications: true,
  autoSave: false,
  language: "en"
};

// 1. Toggle theme between "light" and "dark"
if (settings.theme === "light") {
  settings.theme = "dark";
} else {
  settings.theme = "light";
}
console.log("After toggling theme:", settings);

// 2. Turn autoSave to true
settings.autoSave = true;
console.log("After enabling autoSave:", settings);

// 3. Remove the notifications setting
delete settings.notifications;
console.log("After removing notifications:", settings);

// 4. Freeze the settings object so it cannot be modified
Object.freeze(settings);
settings.language = "fr"; // will not work

// Final output
console.log("Frozen settings object:", settings);