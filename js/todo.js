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
var username= JSON.parse(localStorage.getItem("loginUser"));
var usersObject=JSON.parse(localStorage.getItem("users"))
var reading= document.getElementsByClassName("reading")[0];
var finished= document.getElementsByClassName("finished")[0];

function getUser()
{
    for(var i=0;i<usersObject.length;i++)
    {
        if(usersObject[i].name==username)
        {
            setReadingList(usersObject[i].read)
            setFinishedList(usersObject[i].fRead)
        }
    }
}
getUser();

function setReadingList(x)
{
    for(let i=0;i<x.length;i++)
    {
    const ca= document.createElement('div');
    ca.classList='container'

    const content=`<div class ="column">
                    <div class="card">
        <img class ="bimg"src="${x[i].img}">
        <div class="container">
          <h4 class="title"><b>${x[i].name}</b></h4>
          <button class="author" onclick="setFinished(${x[i].id})">Finished</button>
        </div>
      </div>
    </div>`
    reading.innerHTML += content;
        }
}

function setFinishedList(y)
{
    for(let i=0;i<y.length;i++)
    {
    const ca= document.createElement('div');
    ca.classList='container'

    const content=`<div class ="column">
                    <div class="card">
        <img class ="bimg"src="${y[i].img}">
        <div class="container">
          <h4 class="title"><b>${y[i].name}</b></h4>
          <button class="author" onclick="removeCard(${y[i].id})">Remove</button>
        </div>
      </div>
    </div>`
    finished.innerHTML += content;
        }
}

function setFinished(z)
{
    for(var i=0;i<usersObject.length;i++)
    {
        if(usersObject[i].name==username)
        {
            for(let j=0;j<usersObject[i].read.length;j++)
            {
                if(usersObject[i].read[j].id==z)
                {
                    usersObject[i].fRead.push(usersObject[i].read[j])
                    usersObject[i].read.splice(j,1)
                    localStorage.setItem("users", JSON.stringify(usersObject))
                    getUser();
                    alert("Congrats you have Finished this Book ^_^!!")
                    location.reload();
                }
            }
        }
    }
}

function removeCard(v)
{
 for(var i=0;i<usersObject.length;i++)
    {
        if(usersObject[i].name==username)
        {
            for(let j=0;j<usersObject[i].fRead.length;j++)
            {
                if(usersObject[i].fRead[j].id == v)
                {
                    usersObject[i].fRead.splice(j,1)
                    localStorage.setItem("users", JSON.stringify(usersObject))
                    getUser();

                    location.reload();
                }
            }
        }
    }
}
