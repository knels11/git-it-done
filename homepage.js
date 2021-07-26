//create 2 new variable to store ref to form el with an id + input el w id 
var userFormEl = document.querySelector("#user-form");
var nameInputEl = document.querySelector("#username");
//function to be executed upon form submission browser event
var formSubmitHandler = function(event) {
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
//add submit event listener to userformel
userFormEl.addEventListener("submit", formSubmitHandler);