//assignment - 2
//deep copy
let order = {
    orderId: "ORD1001",
    customer: {
        name: "Anita",
        address: {
            city: "Hyderabad",
            pincode: 500085
        }
    },
    items: [
        { product: "Laptop", price: 70000 }
    ]
};

let copyOrder = structuredClone(order)
copyOrder.customer.address.city = "uppal"
console.log(copyOrder)

copyOrder.items[0].price = 95000
console.log(copyOrder)

console.log("Original order : ",order)
if(order != copyOrder){
    console.log("Original remained unchanged")
}else{
    console.log("changed!")
}