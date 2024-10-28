


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

//Marco Bianchi
const marcosImgProfile = document.getElementById('marco-picture')
const marcosName = document.getElementById('marco-name')
const marcosRole = document.getElementById('marco-role')
const marcosEmail = document.getElementById('marco-email')

marcosImgProfile.src =  teamMembers[0].img
marcosName.innerText = teamMembers[0].name
marcosRole.innerText = teamMembers[0].role
marcosEmail.innerHTML = teamMembers[0].email



//Laura Rossi
const laurasImgProfile = document.getElementById('laura-picture')
const laurasName = document.getElementById('laura-name')
const laurasRole = document.getElementById('laura-role')
const laurasEmail = document.getElementById('laura-email')

laurasImgProfile.src =  teamMembers[1].img
laurasName.innerText = teamMembers[1].name
laurasRole.innerText = teamMembers[1].role
laurasEmail.innerHTML = teamMembers[1].email



//Giogio Verdi
const giorgiosImgProfile = document.getElementById('giorgio-picture')
const giorgiosName = document.getElementById('giorgio-name')
const giorgiosRole = document.getElementById('giorgio-role')
const giorgiosEmail = document.getElementById('giorgio-email')

giorgiosImgProfile.src =  teamMembers[2].img
giorgiosName.innerText = teamMembers[2].name
giorgiosRole.innerText = teamMembers[2].role
giorgiosEmail.innerHTML = teamMembers[2].email



//Marta Ipsum
const martasImgProfile = document.getElementById('marta-picture')
const martasName = document.getElementById('marta-name')
const martasRole = document.getElementById('marta-role')
const martasEmail = document.getElementById('marta-email')

martasImgProfile.src =  teamMembers[3].img
martasName.innerText = teamMembers[3].name
martasRole.innerText = teamMembers[3].role
martasEmail.innerHTML = teamMembers[3].email



//Roberto Lorem
const robertosImgProfile = document.getElementById('roberto-picture')
const robertosName = document.getElementById('roberto-name')
const robertosRole = document.getElementById('roberto-role')
const robertosEmail = document.getElementById('roberto-email')

robertosImgProfile.src =  teamMembers[4].img
robertosName.innerText = teamMembers[4].name
robertosRole.innerText = teamMembers[4].role
robertosEmail.innerHTML = teamMembers[4].email


//Daniela Amet
const danielasImgProfile = document.getElementById('daniela-picture')
const danielasName = document.getElementById('daniela-name')
const danielasRole = document.getElementById('daniela-role')
const danielasEmail = document.getElementById('daniela-email')

danielasImgProfile.src =  teamMembers[5].img
danielasName.innerText = teamMembers[5].name
danielasRole.innerText = teamMembers[5].role
danielasEmail.innerHTML = teamMembers[5].email



