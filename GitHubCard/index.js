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

// example data pulled from server
const githubUserData = { 
  avatar_url: "https://avatars3.githubusercontent.com/u/5239836?v=4",
  ​​​bio: null,
  ​​​blog: "",
  ​​​company: null,
  ​​​created_at: "2013-08-15T19:52:39Z",
  ​​​email: null,
  ​​​events_url: "https://api.github.com/users/Notesong/events{/privacy}",
  ​​​followers: 2,
  ​​​followers_url: "https://api.github.com/users/Notesong/followers",
  ​​​following: 6,
  ​​​following_url: "https://api.github.com/users/Notesong/following{/other_user}",
  ​​​gists_url: "https://api.github.com/users/Notesong/gists{/gist_id}",
  ​​​gravatar_id: "",
  ​​​hireable: null,
  ​​​html_url: "https://github.com/Notesong",
  ​​​id: 5239836,
  ​​​location: null,
  ​​​login: "Notesong",
  ​​​name: null,
  ​​​node_id: "MDQ6VXNlcjUyMzk4MzY=",
  ​​​organizations_url: "https://api.github.com/users/Notesong/orgs",
  ​​​public_gists: 0,
  ​​​public_repos: 27,
  ​​​received_events_url: "https://api.github.com/users/Notesong/received_events",
  ​​​repos_url: "https://api.github.com/users/Notesong/repos",
  ​​​site_admin: false,
  ​​​starred_url: "https://api.github.com/users/Notesong/starred{/owner}{/repo}",
  ​​​subscriptions_url: "https://api.github.com/users/Notesong/subscriptions",
  ​​​type: "User",
  ​​​updated_at: "2019-11-04T15:42:15Z",
  ​​​url: "https://api.github.com/users/Notesong",
};
// list of users to display
const followersArray = ['notesong', 'tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

function userInfoCard(userInfoObj) {
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
  const bio = document.createElement('p');

  // append elements
  card.appendChild(userImg);
  card.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(username);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  profile.appendChild(githubLink);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

  // add classes to elements
  card.classList.add('card');
  cardInfo.classList.add('card-info');
  name.classList.add('name')
  username.classList.add('username');

  // add content to elements
  userImg.src = userInfoObj.avatar_url;
  name.textContent = userInfoObj.name;
  username.textContent = userInfoObj.login;
  location.textContent = userInfoObj.location;
  githubLink.textContent = userInfoObj.html_url;
  githubLink.href = userInfoObj.html_url;
  followers.textContent = userInfoObj.followers;
  following.textContent = userInfoObj.following;

  return card;
}

function getGithubData(name) {
  axios
    .get(`https://api.github.com/users/${name}`)
    .then(response => {
      return response;
    })
    .try(value => {
      return value;
    })
    .catch(error => {
      console.log('The data was not returned.', error)
    })
    return userDataObj;
}

const entryPoint = document.querySelector('.cards');
