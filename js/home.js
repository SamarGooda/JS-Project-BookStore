var booksData = []
var home = document.getElementById("home")
var todo = document.getElementById("todo")
var category = document.getElementById("category")
var about = document.getElementById("about")

function homePage(){
    location.href = "home.html";
}
function aboutPage(){
    location.href = "about.html";
}
function categoriesPage(){
    location.href = "category.html";
}
function todoPage(){
    location.href = "todo.html";
}


home.addEventListener("click",homePage)
todo.addEventListener("click",todoPage)
category.addEventListener("click",categoriesPage)
about.addEventListener("click",aboutPage)
class Book {
    constructor(name,desc,img,price){
        this.name=name;
        this.desc=desc;
        this.img=img;
        this.price=price;
    }
    get bookName (){
         return this.name;
    }
    get bookDesc (){
        return this.desc;
   }
   get bookImg (){
    return this.img;
     }

     get bookPrice(){
         return this.price;
     }
  }

book1 = new Book ("Anna Karena","A beautiful wife from St. A beautiful wife from St.","../img/img1.jpg","$19.99")
booksData.push(book1)
book2 = new Book ("mis","it is introduction to the operating system","../img/img1.jpg","20$")
booksData.push(book2)
book3 = new Book ("network","it is introduction to the operating system","../img/img1.jpg","50$")
booksData.push(book3)
book4 = new Book ("devops","it is introduction to the operating system","../img/img1.jpg")
booksData.push(book4)
book5 = new Book ("math","it is introduction to the operating system","../img/img1.jpg")
booksData.push(book5)
book6 = new Book ("math","it is introduction to the operating system","../img/img1.jpg")
booksData.push(book6)
book7 = new Book ("math","it is introduction to the operating system","../img/img1.jpg")
booksData.push(book7)


function setCardData()
{
localStorage.setItem("booksData", JSON.stringify(booksData));
 var allBooks =JSON.parse(localStorage.getItem("booksData"));
 var row =document.getElementsByClassName("card")[0];
 
 for(var i=0;i<booksData.length;i++)
 {
   row.innerHTML+=`
   <div class="cards"   style="float:left"; >
   <img  id ="imge" src="${booksData[i].bookImg}" height="300px" width="100%">
   <h1 id ="title"> ${booksData[i].bookName}</h1>
   <p class="price" id ="price">${booksData[i].bookPrice} </p>
   <p id ="text"> ${booksData[i].bookDesc} </p>
   <p><button>Add to Cart</button></p> 
  `
 }
}
setCardData();


