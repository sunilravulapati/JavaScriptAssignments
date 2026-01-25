//make api request
//request is being from the local device, and fetch() is the predefined function which can be used to make external request

// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(res=>res.json())
// .then(data=>console.log(data))
// .catch(err=>console.log(err))

//modern syntax
async function getData(){
    //make the request and get response
    let res = await fetch('https://jsonplaceholder.typicode.com/posts')
    //extract data from response
    let data = await res.json()
    console.log(data)
}
getData()

