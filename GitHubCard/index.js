/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

// const axiosPromises = axios.get("https://api.github.com/users/Notesong");
// console.log(axiosPromises);

/* 
  Step 2: Inspect and study the data coming back, this is YOUR 
    github info! You will need to understand the structure of this 
    data in order to use it to build your component function 

  Step 3: Create a function that accepts a single object as its only argument,
    Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

  Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
  Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

// list of users to display
const githubUsers = ['notesong', 'tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

function userInfoCard(userInfoObj) {
  // check for null entries
  if (userInfoObj.name === null) {
    userInfoObj.name = userInfoObj.login;
  }
  if (userInfoObj.location === null) {
    userInfoObj.location = '';
  }
  if (userInfoObj.bio === null) {
    userInfoObj.bio = '';
  }

  // create elements
  const card = document.createElement('div');
  const userImg = document.createElement('img');
  const cardInfo = document.createElement('div');
  const name = document.createElement('h3');
  const username = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const githubLink = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const userBio = document.createElement('p');

  // append and add content to elements
  card.appendChild(userImg);
  userImg.src = userInfoObj.avatar_url;

  card.appendChild(cardInfo);

  cardInfo.appendChild(name);
  name.textContent = userInfoObj.name;

  cardInfo.appendChild(username);
  username.textContent = userInfoObj.login;

  cardInfo.appendChild(location);
  location.textContent = 'Location: ' + userInfoObj.location;

  cardInfo.appendChild(profile);
  profile.textContent = 'Profile: ';

  profile.appendChild(githubLink);
  githubLink.textContent = userInfoObj.html_url;
  githubLink.href = userInfoObj.html_url;

  cardInfo.appendChild(followers);
  followers.textContent = 'Followers: ' + userInfoObj.followers;

  cardInfo.appendChild(following);
  following.textContent = 'Following: ' + userInfoObj.following;
  
  cardInfo.appendChild(userBio);
  userBio.textContent = 'Bio: ' + userInfoObj.bio;

  // add classes to elements
  card.classList.add('card');
  cardInfo.classList.add('card-info');
  name.classList.add('name')
  username.classList.add('username');

  return card;
}

const entryPoint = document.querySelector('.cards');

githubUsers.forEach(user => {
  axios
    .get('https://api.github.com/users/' + user)
    .then(response => {
      const userObject = response.data;
      const newCard = userInfoCard(userObject);
      entryPoint.appendChild(newCard);
    })
    .catch(error => {
      console.log('The data was not returned.', error);
    });
}); 