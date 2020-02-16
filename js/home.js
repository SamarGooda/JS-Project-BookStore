var booksData = []
var catImg=["../img/drama.jpg","../img/romance.jpg","../img/bio.jpg","../img/cooking.jpg"]
var catName=["Drama","Romance","Biology","Cooking"]
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
    constructor(id,name,desc,img,price,author,flag){
        this.id=id;
        this.name=name;
        this.desc=desc;
        this.img=img;
        this.price=price;
        this.author=author;
        this.flag=flag
    }
    get bookId()
    {
        return this.id;
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

     get bookAuthor()
     {
         return this.author;
     }
     get bookFlag()
     {
         return this.flag;
     }
  }

book1 = new Book ("1","Anna Karena","A beautiful wife from St..","../img/img1.jpg","$19.99","Leo Tolstoy","0")
booksData.push(book1)
book2 = new Book ("2","Sand and Foam","A book of aphorisms, poems, and parables by the author ","../img/book2.jpg","20$","Gobran Khalel Gobran","0")
booksData.push(book2)
book3 = new Book ("3","Vineland","The story is set in California, usa","../img/book33.jpg","50$",	"Thomas Pynchon","0")
booksData.push(book3)
book4 = new Book ("4","	Americana","Ifemelu and Obinze are young and in love ","../img/book4.jpg","22$","Chimamanda Ngozi Adichie","0")
booksData.push(book4)
book5 = new Book ("5","Great Jones Street"," It centers on rock star Bucky Wunderlick,","../img/book5.jpg","23$","Don DeLillo","0")
booksData.push(book5)
book6 = new Book ("6","Mason & Dixon"," It presents a fictionalized account of the collaboration ","../img/book6.jpg","25$","Thomas Pynchon","0")
booksData.push(book6)
book7 = new Book ("7","Against the Day"," It presents a fictionalized account of the collaboration","../img/book7.jpg","30$","Thomas Pynchon","0")
booksData.push(book7)
book8 = new Book ("8","Gravity's Rainbow","Lengthy, complex, and featuring a large cast of characters","../img/book8.jpg","10$","Thomas Pynchon","0")
booksData.push(book8)

function setCardData()
{
localStorage.setItem("booksData", JSON.stringify(booksData));
 var allBooks =JSON.parse(localStorage.getItem("booksData"));
 var row =document.getElementsByClassName("card")[0];
 
 for(var i=0;i<8;i++)
 {
     var id =booksData[i].bookId;
     
   row.innerHTML+=`
   <div class="cards"   style="float:left"; >
   <img  id ="imge" src="${booksData[i].bookImg}" height="300px" width="100%">
   <h1 id ="title"> ${booksData[i].bookName}</h1>
   <p class="price" id ="price">${booksData[i].bookPrice} </p>

   <p    style="color:#696969;" id ="text"> ${booksData[i].bookDesc} </p>
  <button onclick='localStorage.setItem("selectedBook",${id});location.href="../pages/book1.html"' id="${booksData[i].bookId}">View More ..</button> 
  `
}}
setCardData();


function setCategoriesCard()
{
    var table =document.getElementsByClassName("categories")[0];
    for (var i=0;i<4;i++)
    {
        table.innerHTML+=`<div class="cate">
        <img class="catImg"src="${catImg[i]}">
                    <p class="catName">${catName[i]}</p>
                    </div>`
    }
}
setCategoriesCard();

// onclick="location.href='../pages/book1.html'"
