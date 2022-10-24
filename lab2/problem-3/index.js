// retrieve form
const gitHubForm = document.getElementById("gitHubForm");
gitHubForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // Get username input
  let usernameInput = document.getElementById("usernameInput");
  let gitHubUsername = usernameInput.value;
  requestUserRepos(gitHubUsername);
});

function requestUserRepos(username) {
  document.getElementById("userRepos").style.visibility = "visible";
  // Create 2 XMLHttpRequest objects
  const xhr = new XMLHttpRequest();
  const xhr2 = new XMLHttpRequest();
  let email = "";
  let location = "";
  let gist = "";
  // GitHub endpoint
  const url = `https://api.github.com/users/${username}/repos`;
  const user = `https://api.github.com/users/${username}`;
  // Providing 3 arguments (GET/POST, The URL, Async True/False)
  xhr.open("GET", user, true);
  // When request received from /user request
  xhr.onload = function () {
    const data = JSON.parse(this.response);
    console.log(data);
    email = `${data.email}`;
    location = `${data.location}`;
    gist = `${data.public_gists}`;
  };
  xhr.send();
  xhr2.open("GET", url, true);

  // When request received from /user/repos request
  xhr2.onload = function () {
    // parse API data into JSON
    const data = JSON.parse(this.response);
    let li2 = document.getElementById("userProf");
    li2.innerHTML = `
                <div>
                <h2>User Profile</h2>
                <img src=${data[0].owner.avatar_url} style="width:100px;height:100px"/>
                <p><strong>Name ${data[0].owner.login}</strong></p>
                <p><strong>Username ${data[0].owner.login}</strong></p>
                <p><strong>Email ${email}</strong></p>
                <p><strong>Location ${location}</strong></p>
                <p><strong>Number of Gists ${gist}</strong></p
                </div>
                `;
    // Loop over data array
    for (let i in data) {
      // Get the ul with id of of userRepos
      let ul = document.getElementById("userRepos");
      // lis to be added to ul
      let li = document.createElement("li");
      // Add Bootstrap list item class
      li.classList.add("list-group-item");
      li.innerHTML = `
                <div>
                <p><strong>Name ${data[i].name}</strong></p>
                <p><strong>Description ${data[i].description}</strong></p>
                </div>
            `;

      // Append each li to the ul
      ul.appendChild(li);
    }
  };

  // Send the request
  xhr2.send();
}
