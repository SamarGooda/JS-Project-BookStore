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

var arr=JSON.parse(localStorage.getItem("booksData"));

var reading= document.getElementsByClassName("reading")[0];
var finished= document.getElementsByClassName("finished")[0];

arr.forEach((card)=>{
    const ca= document.createElement('div');
    ca.classList='container'

    const content=`<div class ="column">
                    <div class="card">
        <img class ="bimg"src="${card.img}">
        <div class="container">
          <h4 class="title"><b>${card.name}</b></h4>
          <p class="author">${card.desc}</p>
        </div>
      </div>
    </div>`
    reading.innerHTML += content;

    finished.innerHTML += content;
})