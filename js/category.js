var catImg=["../img/drama.jpg","../img/romance.jpg","../img/cooking.jpg","../img/technology.jpg","../img/history.jpg","../img/music.jpg","../img/geography.jpg","../img/bio.jpg","../img/marketing.jpg","../img/managment.jpg","../img/media.jpg","../img/hr.jpg"]
var catName=["Drama","Romance","Cooking","technology","history","music","geography","biology","marketing","managment","media","HR"]
function setCategoriesCard()
{
    var table =document.getElementsByClassName("categories")[0];
    for (var i=0;i<12;i++)
    {
        table.innerHTML+=`<div class="cate">
        <img class="catImg"src="${catImg[i]}">
                    <p class="catName">${catName[i]}   </p>
                    </div>`
    }
}
setCategoriesCard();