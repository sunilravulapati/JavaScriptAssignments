const users = [
  { id: 1, name: "Ravi", role: "student", active: true },
  { id: 2, name: "Anil", role: "admin", active: true },
  { id: 3, name: "Suman", role: "student", active: false }
];

const courses = [
  { id: 101, title: "JavaScript", price: 999, published: true },
  { id: 102, title: "React", price: 1499, published: false },
  { id: 103, title: "Node", price: 1299, published: true }
];

const cart = [
  { courseId: 101, qty: 1 },
  { courseId: 103, qty: 2 }
];

const roles = {
  admin: ["create", "update", "delete", "view"],
  student: ["view"]
};

//module - 1
let activeUsers = users.filter(user => user.active);
console.log(activeUsers)

let activeUserNames = users
  .filter(user => user.active)
  .map(user => user.name);
console.log(activeUserNames)

const adminExists = users.some(user => user.role === "admin");
console.log(adminExists)

let findUserById = (id) =>
  users.find(user => user.id === id);
console.log(findUserById)

let deactivateUser = (id) =>
  users.map(user =>
    user.id === id ? { ...user, active: false } : user
  );
console.log(deactivateUser)


//module 2
let publishedCourses = courses.filter(item => item.published)
console.log(publishedCourses)

let sortPrices = [...courses].sort(
    (a,b) => b.price - a.price
)
console.log(sortPrices)

let getReq = courses.map(({title,price}) => ({
    title,
    price
}))
console.log(getReq)

let total = courses.reduce((sum,course)=>sum+course.price,0)
console.log(total)

let addCourse = (newCourse) => [
    ...courses, newCourse
]
console.log(addCourse)


//module 3
let cartWithDetails = cart.map(item => {
  let course = courses.find(c => c.id === item.courseId);

  return {
    ...course,
    qty: item.qty,
    total: course.price * item.qty
  };
});
console.log(cartWithDetails)

let totalCartAmount = 0;

totalCartAmount = cartWithDetails.reduce(
  (sum, item) => sum + item.total,
  0
);
console.log(totalCartAmount)

let increaseQty = function (courseId) {
  return cart.map(item => {
    if (item.courseId === courseId) {
      return { ...item, qty: item.qty + 1 };
    }
    return item;
  });
};
console.log(increaseQty)

let removeFromCart = function (courseId) {
  return cart.filter(item => item.courseId !== courseId);
};
console.log(removeFromCart)

let allPaidCourses = cart.every(item => {
  let course = courses.find(c => c.id === item.courseId);
  return course && course.price > 0;
});
console.log(allPaidCourses)

//module - 4
let roleNames = Object.keys(roles);
console.log(roleNames)

let canStudentDelete = roles.student.includes("delete");
console.log(canStudentDelete)

let allPermissions = Object.values(roles).flat();
let uniquePermissions = [...new Set(allPermissions)];
console.log(uniquePermissions)

let updatedRoles = {
  ...roles,
  moderator: ["update", "view"]
};
console.log(updatedRoles)
