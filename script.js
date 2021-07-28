var getUserRepos = function(user) {
    //format the github api url 
var apiUrl = "https://api.github/com/users/" + user + "/repos";
    //make a request to the url
    fetch(apiUrl).then(function(response) {
        //request was successful
        if (response.ok) {
            response.json().then(function(data) {
                displayRepos(data, user);
            });
        } else {
            alert("Error: GitHub User Not Found");
        }
    })
    .catch (function(error) {
        //this '.catch()' getting chained onto the end of the '.then()' method
        alert("Unable to connect to GitHub");
    });
    };
getUserRepos();
    //fetch("https://api.github.com/users/octocat/repos").then(function(response){
      //  console.log("inside", response);
    //});