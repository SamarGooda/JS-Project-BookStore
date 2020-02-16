// document.getElementsByClassName("btn_btn").click();
var rating="";
function starmark(item)
{ 
  var count =item.id[0];
  rating=count;
  var subid =item.id.substring(1);
  for(var i=0; i<5;i++)
  {
      if(i<count)
      {
          document.getElementById((i+1)+subid).style.color="orangered";

      }
      else
      {
        document.getElementById((i+1)+subid).style.color="black";
 

      }
  }
}
function showRating()
{
    alert(rating);
}
 var booktitle=document.getElementById("title");
 var bookimg=document.getElementById("img");
 var bookdesc=document.getElementById("desc");
 var bookprice=document.getElementById("price");
 var bookauthor=document.getElementById("aa");

 var selectedbook =JSON.parse(localStorage.getItem("selectedBook"));
 var allBooks =JSON.parse(localStorage.getItem("booksData"));

 
 for(let i=0;i<allBooks.length;i++)
 {
  if(allBooks[i].id==selectedbook){    
    booktitle.textContent=allBooks[i].name;
    bookimg.src=allBooks[i].img;
    bookdesc.textContent=allBooks[i].desc;
    bookprice.textContent=allBooks[i].price;
    bookauthor.textContent=allBooks[i].author;
  }

 }
 var username= JSON.parse(localStorage.getItem("loginUser"));
 var usersObject=JSON.parse(localStorage.getItem("users"))

 function setReadingArray()
 {  
    for(var i=0;i<usersObject.length;i++)
    {
        if(usersObject[i].name==username)
        {
            for(var j=0;j<allBooks.length;j++)
            {
                
                if(allBooks[j].id==selectedbook)
                {
                    console.log("hello");
                    if(usersObject[i].read.length!=0)
                    {
                    for (var k=0;k<usersObject[i].read.length;k++)
                    {
                        if(usersObject[i].read[k].id==allBooks[j].id)
                        {
                        alert("You have been added this book before ^_^")
                        }
                        else
                        {
                            console.log("hellooo");
                        usersObject[i].read.push(allBooks[j]);
                        localStorage.setItem("users", JSON.stringify(usersObject))
                        console.log("hellooooo");
                        }
                    }
                }else{
                    usersObject[i].read.push(allBooks[j]);
                    localStorage.setItem("users", JSON.stringify(usersObject))
                }
                }
            }
        }
    }
 }

 

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
