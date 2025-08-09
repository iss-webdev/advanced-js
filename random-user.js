const userImage = document.getElementById('userImage');
const name = document.getElementById('userName');
const gender = document.getElementById('userGender');
const age = document.getElementById('userAge');
const displayUser = document.querySelector('.card');
const email = document.getElementById('userEmail');
const userlocation = document.getElementById('userLocation');
const getUser = document.getElementById('generateBtn');
const api = 'https://randomuser.me/api';

getUser.addEventListener('click', (e) => {
  e.preventDefault();
  load()
})

async function load() {
  const loadData = await fetch(api).then(response => response.json());

  const user = loadData.results[0];
  userImage.src = user.picture.thumbnail;

  userName = user.name;
  name.innerText = ${userName.title}. ${userName.first} ${userName.last};

  userGender = user.gender;
  gender.innerText = userGender;

  userAge = user.dob.age;
  age.innerText = userAge;

  userEmail = user.email;
  email.innerText = userEmail;
  
  userLoc = loadData.results[0].location;
  userlocation.innerHTML = street: ${userLoc.street.name}, <br>
                             city: ${userLoc.city},<br>
                             state: ${userLoc.state},<br> 
                             country: ${userLoc.country};

}
