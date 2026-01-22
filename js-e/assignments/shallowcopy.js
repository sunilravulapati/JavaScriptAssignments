//assignment - 1
let user = {
    id: 101,
    name: "Ravi",
    preferences: {
        theme: "dark",
        language: "en"
    }
}

//shallow copy
let copyUser = { ...user }
copyUser.name = "ravi"
console.log(user)
console.log(copyUser)

copyUser.preferences.theme = "light"
console.log(user)
console.log(copyUser)