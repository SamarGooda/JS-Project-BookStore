var arr=[{name:"Aya Morsi", linkedin:"http://linkedin.com/in/aya-morsi-13918212a/", img: "../img/aya.jpeg"},
        {name:"Samar Mahmoud", linkedin:"https://www.linkedin.com/in/samar-mahmoud-3066a319a/",img: "../img/samar.jpg"},
        {name:"Esraa Salah", linkedin:"https://www.linkedin.com/in/esraa-salah-195158138/",img: "../img/esraa.jpg"},
        {name:"Ahmed Abdelnaby", linkedin:"https://www.linkedin.com/in/ahmed-abdelnaby-102738115/", img: "../img/ahmed.jpg"}]

var reading= document.getElementsByClassName("cont")[0];


arr.forEach((card)=>{
    const ca= document.createElement('div');
    ca.classList='container'

    const content=`<div class ="column">
                    <div class="card">
        <img src="${card.img}" alt="Avatar" style="width:100%; height:400px;">
        <div class="container">
          <h4 style=" font-size: large;
          color: #6c757d;
          font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;"><b>${card.name}</b></h4>
          <a class="linkedin" href="${card.linkedin}">Linkedin Account</a>
        </div>
      </div>
    </div>`
    reading.innerHTML += content;
})