//create 2 new variable to store ref to form el with an id + input el w id 
var userFormEl = document.querySelector("#user-form");
var nameInputEl = document.querySelector("#username");
//function to be executed upon form submission browser event
var formSubmitHandler = function (event) {
    event.preventDefault();
    //get value from input element
    var username = nameInputEl.trim();

    if (username) {
        getUserRepos(username);
        nameInputEl.value = "";
    } else {
        alert("please enter a github username");
    }
    console.log(event);
};

var displayRepos = function (repos, searchTerm) {
    
    //check if api returned any repos
    if (repos.length === 0) {
        repoContainerEl.textContent= "no repositories found.";
        return;
    }
    //clear old content
    repoContainerEl.textContent = "";
    repoSearchTerm.textContent = searchTerm;
    //validate search
    console.log(repos);
    console.log(searchTerm);
    //loop over repos 
    for (var i = 0; i < repos.length; i++) {
        //format repo name
        var repoName = repos[i].owner.login + "/" + repos[i].name;
        //create container for each repo
         var repoEl = document.createElement("span");
        titleEl.textContent = repoName;
        //append to container
        repoEl.appendChild(titleEl);
        //create status element
        var statusEl = document.createElement("span");
        statusEl.classList = "flex-row align-center";
        //check if current repo has issues or not
        if (repos[i].open_issues_count > 0) {
            statusEl.innerHTML =
                "<i class='fas fa-times status-icon icon-danger'></i>" + repos[i].open_issues_count + " issue(s)";
        } else {
            statusEl.innerHTML = "<i class='fas fa-check-square status-icon icon-success'></i>";
        }
        //append to container
        repoEl.appendChild(statusEl);
        //append container to the dom
        repoContainerEl.appendChild(repoEl);
    }
};
displayRepos();
//add submit event listener to userformel
userFormEl.addEventListener("submit", formSubmitHandler);
