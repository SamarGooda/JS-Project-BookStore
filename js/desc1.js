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