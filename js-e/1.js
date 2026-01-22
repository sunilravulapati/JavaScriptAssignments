//classes are the blueprints for creating objects with similar attributes and behavior
//they are used to create our own datatypes
//js is both object oriented and procedure oriented
//developers mainly prefer the procedure oriented

class Person{
    //properties
    pid;
    #age; // '#' is used to make properties private
    static collegeName = "anurag" // static property
    //methods

    constructor(pid,age){
        this.pid=pid
        this.#age=age
    }
    // setData(pid,age){   
    //     this.pid = pid
    //     this.age = age
    // }
    static{
        Person.collegeName='Anurag'
    }

    getPersonData(){
        console.log(this.pid,this.#age)
    }
}

//create the objects
let p1 = new Person() // new keyword is used to create objects and these are stored in the heaps
//objects cant be named as they are created at run time

//p1.setData(1,21) // if we dont call this then the object will not be initialised , to handle this we use constructor concept 
let p2 = new Person(123,21)

//p1.#age=123 this causes an error
p1.getPersonData() // methods will be called always on the object
p2.getPersonData()

//initializing static properties
//direct,static methods,static blocks
//static blocks are going to be executed first - 