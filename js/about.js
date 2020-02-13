var arr=[{name:"Aya Morsi", linkedin:"http://linkedin.com/in/aya-morsi-13918212a/", img: "../img/aya.jpeg"},
        {name:"Samar Mahmoud", linkedin:"https://www.linkedin.com/in/samar-mahmoud-3066a319a/",img: "../img/samar.jpg"},
        {name:"Esraa Salah", linkedin:"https://www.linkedin.com/in/esraa-salah-195158138/",img: "../img/esraa.jpg"},
        {name:"Ahmed Abdelnaby", linkedin:"https://www.linkedin.com/in/ahmed-abdelnaby-102738115/", img: "../img/ahmed.jpg"}]


function setTeamCards()
{
var reading= document.getElementsByClassName("cont")[0];
arr.forEach((card)=>{
    const content=`<div class ="column">
        <div class="card">
        <img class="x" src="${card.img}" alt="Avatar">
        <div class="container">
          <h4 style=" font-size: large;
          color: black;
          font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;">
          <b>${card.name}</b></h4>
          <a class="linkedin" href="${card.linkedin}">Linkedin Account</a>
        </div>
      </div>
    </div>`
    reading.innerHTML += content;
})
}
setTeamCards();

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