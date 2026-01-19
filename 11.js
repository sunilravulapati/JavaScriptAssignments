let cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

//using the filter() we are getting only the in stock products
let fil = cart.filter(s => s.inStock === true)
console.log("In Stock products: ",fil)

//using map() we are getting the name of the product and its total price
let m = cart.map(s =>{
    return {
        name:s.name,
        totalPrice: s.price * s.quantity,
    }
})
console.log("Names and the total price: ",m)

//using reduce() calculation of grand total cart value
let total = cart.reduce((acc,s) => acc + (s.price * s.quantity), 0);
console.log("grand total: ",total)

//using find() we checked if Mouse is there in the cart or not
let f1 = cart.find(s => s.name === 'Mouse')
console.log(f1)

//using findIndex() we are finding the position of "Keyboard"
let f2 = cart.findIndex(s => s.name === 'Keyboard')
console.log("Keyboard index: ",f2)