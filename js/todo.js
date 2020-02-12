var arr=[{name:"The secret", author:"by jaxson"},
{name:"secret", author:"by jaxson"}]

var reading= document.getElementsByClassName("reading")[0];
var finished= document.getElementsByClassName("finished")[0];

arr.forEach((card)=>{
    const ca= document.createElement('div');
    ca.classList='container'

    const content=`<div class ="column">
                    <div class="card">
        <img src="assets/img/book.jpg" alt="Avatar" style="width:100%">
        <div class="container">
          <h4><b>${card.name}</b></h4>
          <p>${card.author}</p>
        </div>
      </div>
    </div>`
    reading.innerHTML += content;

    finished.innerHTML += content;
})