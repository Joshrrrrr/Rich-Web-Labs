// Get the GitHub username input form
const gitHubForm = document.getElementById('gitHubForm');

// Listen for submissions on GitHub username input form
gitHubForm.addEventListener('submit', (e) => {
    
    // Prevent default form submission action
    e.preventDefault();

    // Get the GitHub username input field on the DOM
    let usernameInput = document.getElementById('usernameInput');

    // Get the value of the GitHub username input field
    let gitHubUsername = usernameInput.value;          

    // Run GitHub API function, passing in the GitHub username
    requestUserRepos(gitHubUsername);

})


function requestUserRepos(username){
    
    // Create new XMLHttpRequest object
    const xhr = new XMLHttpRequest();
    const xhr2 = new XMLHttpRequest();
    let email = "";
    let location= "";
    let gist= "";
    // GitHub endpoint, dynamically passing in specified username
    const url = `https://api.github.com/users/${username}/repos`;
    const user = `https://api.github.com/users/${username}`;
    // Open a new connection, using a GET request via URL endpoint
    // Providing 3 arguments (GET/POST, The URL, Async True/False)
    xhr.open('GET', user, true);
    // When request is received
    // Process it here
    xhr.onload = function () {
        const data = JSON.parse(this.response);
        console.log(data);
        email=(`${data.email}`);
        location=(`${data.location}`);
        gist=(`${data.public_gists}`);
    }
    xhr.send();
    xhr2.open('GET', url, true);
    
    // When request is received
    // Process it here
    xhr2.onload = function () {
    
        // Parse API data into JSON
        const data = JSON.parse(this.response);
        
        // Loop over each object in data array
        for (let i in data) {
            // Get the ul with id of of userRepos
            let ul = document.getElementById('userRepos');
    
            // Create variable that will create li's to be added to ul
            let li = document.createElement('li');
            
            // Add Bootstrap list item class to each li
            li.classList.add('list-group-item')
        
            // Create the html markup for each li
            li.innerHTML = (`
                <div style="float:left;width:50%">
                <h2>User Profile</h2>
                <table>
                <tr><td><img src=${data[i].owner.avatar_url} style="width:100px;height:100px"/></td></tr>
                <tr><td><p><strong>Name ${data[i].owner.login}</strong></p></td></tr>
                <tr><td><p><strong>Username ${data[i].owner.login}</strong></p></td></tr>
                <tr><td><p><strong>Email ${email}</strong></p></td></tr>
                <tr><td><p><strong>Location ${location}</strong></p></td></tr>
                <tr><td><p><strong>Number of Gists ${gist}</strong></p></td></tr>
                </table>
                </div>
                <div style="float:right;width:50%">
                <h2>User Repos</h2>
                <p><strong>Name ${data[i].name}</strong></p>
                <p><strong>Description ${data[i].description}</strong></p>
                </div>
            `);
            
            // Append each li to the ul
            ul.appendChild(li);
        
        }

    }
    
    // Send the request to the server
    xhr2.send();
    
}