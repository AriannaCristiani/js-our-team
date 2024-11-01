


const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];



 
for (let i = 0; i < teamMembers.length; i++){
  
  cards.innerHTML += `
  <div class="col-4">
    <div  class="card mb-3 bg-black" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-4">
                <img id="picture" src="${teamMembers[i].img}" class="img-fluid rounded-start">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 id="name" class="card-title text-white" style="font-family: Concert One ;">${teamMembers[i].name}</h5>
                    <p id="role" class="card-text text-white">${teamMembers[i].role}</p>
                    <a id="email" href="">${teamMembers[i].email}</a>
                </div>
            </div>
        </div>
    </div>
  </div>
  `

 
}



