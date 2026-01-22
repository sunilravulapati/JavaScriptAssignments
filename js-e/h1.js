class Book{
    title;
    author;
    pages;
    isAvailable=true;

    //methods
    constructor(title,author,pages){
        this.title=title
        this.author=author
        this.pages=pages
    }
    borrow(){
        this.isAvailable=false
        console.log(this.title + " : " + this.isAvailable)
    }
    returnBook(){
        this.isAvailable=true
        console.log(this.title + " : " + this.isAvailable)
    }
    getInfo(){
        console.log(this.title + " written by " + this.author + " no. of pages: " + this.pages)
    }
    isLongBook(){
        if(this.pages > 300){
            return true
        }
        else{
            return false
        }
    }
}

let b1 = new Book('HP1','Jk',250)
let b2 = new Book('DB','Akira',350)
let b3 = new Book('Intro to Java','James Gosling',120)
let b4 = new Book('Bleach','M',500)
let b5 = new Book('Naruto','KM',230)

b1.borrow()
b3.borrow()

b1.returnBook()

//return the details of books whose pages are > 300
let c = 0
if(b1.isLongBook())c++
if(b2.isLongBook())c++
if(b3.isLongBook())c++
if(b4.isLongBook())c++
if(b5.isLongBook())c++

console.log("Long Books count: " , c)
//return the details of available book
console.log("Available books : ")
if(b1.isAvailable)b1.getInfo()
if(b2.isAvailable)b2.getInfo()
if(b3.isAvailable)b3.getInfo()
if(b4.isAvailable)b4.getInfo()
if(b5.isAvailable)b5.getInfo()
