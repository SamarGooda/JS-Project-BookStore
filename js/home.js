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

book1 = new Book ("1","Anna Karena","Acclaimed by many as the world's greatest novel Anna Karenina provides a vast panorama of contemporary life in Russia and of humanity in general. In it Tolstoy uses his intense imaginative "
 +"insight to create some of the most memorable characters in all of literature."
  +"Anna is a sophisticated woman who abandons her empty existence as the wife of Karenin"
  +" and turns to Count Vronsky to fulfil her passionate nature - with tragic consequences."
    +"Levin is a reflection of Tolstoy himself, often expressing the author's own views and conviction","../img/img1.jpg","$19.99","Leo Tolstoy")
booksData.push(book1)
book2 = new Book ("2","Sand and Foam","A book of aphorisms, poems, and parables by the author of The Prophet - a philosopher at his window commenting on the scene passing below. "
+"A book of aphorisms, poems, and parables by the author of The Prophet - a philosopher at his window commenting on the scene passing below."
+"A book of aphorisms, poems, and parables by the author of The Prophet - a philosopher at his window commenting on the scene passing below."
+"A book of aphorisms, poems, and parables by the author of The Prophet - a philosopher at his window commenting on the scene passing below.","../img/book2.jpg","20$","Gobran Khalel Gobran")
booksData.push(book2)
book3 = new Book ("3","Vineland","A group of Americans in Northern California in 1984 are struggling with the consequences of their lives in the sixties, still run by the passions of those times -- sexual and political -- which have refused to die. Among them is Zoyd Wheeler who is preparing for his annual act of televised insanity" 
+"(for which he receives a government stipend) when an unwelcome face appears from out of his past."+

"An old nemesis, federal prosecutor Brock Vond, storms into Vineland at the head of a heavily armed strike force. Soon Zoyd and his daughter, Prairie, go into hiding while Vond begins a relationship"
,"../img/book33.jpg","50$",	"Thomas Pynchon")
booksData.push(book3)
book4 = new Book ("4","	Americana","Ifemelu and Obinze are young and in love when they depart military-ruled Nigeria for the West. Beautiful, self-assured Ifemelu "+
"heads for America, where despite her academic success, she is forced to grapple with what it means to be black for the first time. Quiet, thoughtful Obinze had hoped"+
" to join her, but with post-9/11 America closed to him, he instead plunges into a dangerous, undocumented life in London. Fifteen years later, they reunite in a newly democratic Nigeria,"
+" and reignite their passion—for each other and for their homeland. ","../img/book4.jpg","22$","Chimamanda Ngozi Adichie")
booksData.push(book4)
book5 = new Book ("5","Great Jones Street"," A troubling satire of the romantic myth of stardom and the empty heart of rock and roll, more relevant than ever in our celebrity-obsessed times."+

"Bucky Wunderlick is a rock and roll star. Dissatisfied with a life that has brought fame and fortune, he suddenly decides he no longer wants to be a commodity. He leaves his band mid-tour and"+
" holes up in a dingy, unfurnished apartment in Great Jones Street. Unfortunately, his disappearing act only succeeds in inflaming interest. As faithful fans await messages, Bucky encounters every sort of roiling force he is trying to escape.","../img/book5.jpg","23$","Don DeLillo")
booksData.push(book5)
book6 = new Book ("6","Mason & Dixon"," The New York Times Best Book of the Year, 1997"+
"Time Magazine Best Book of the Year 1997"+

"Charles Mason (1728-1786) and Jeremiah Dixon (1733-1779) were the British surveyors best remembered for running the boundary"+" between Pennsylvania and Maryland that we know today as the Mason-Dixon Line. Here is their story as re-imagined by Thomas Pynchon, featuring Native Americans and frontier folk, ripped bodices, naval warfare, conspiracies erotic and political, major caffeine abuse. We follow the mismatch'd pair--one rollicking, the other depressive. ","../img/book6.jpg","25$","Thomas Pynchon")
booksData.push(book6)
book7 = new Book ("7","Against the Day"," Against the Day is an epic historical novel by Thomas Pynchon, published in 2006. The narrative takes place between the 1893 Chicago World's Fair and the time immediately following World War I and features more than a hundred characters spread across the United States, Europe, Mexico, Central Asia, and one or two places not strictly speaking on the map at all, according to the book jacket blurb written by Pynchon. Like its predecessors, Against the Day is an example of historiographic metafiction or metahistorical romance. At 1,085 pages it is the longest of Pynchon's novels to date.","../img/book7.jpg","30$","Thomas Pynchon")
booksData.push(book7)
book8 = new Book ("8","Gravity's Rainbow","Winner of the 1973 National Book Award, Gravity's Rainbow is a postmodern epic, a work as exhaustively significant to the second half of the 20th century as Joyce's Ulysses was to the first. Its sprawling, encyclopedic narrative, and penetrating analysis of the impact of technology on society make it an intellectual tour de force.Winner of the 1973 National Book Award, Gravity's Rainbow is a postmodern epic, a work as exhaustively significant to the second half of the 20th century as Joyce's Ulysses was to the first. Its sprawling, encyclopedic.","../img/book8.jpg","10$","Thomas Pynchon")

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
