// loading the jokes immediaetly the site is visited 

document.addEventListener("DOMContentLoaded", () => {
  getJoke();
});

const like = document.getElementById("countLikes");
const likeBtn = document.getElementById("btn");
const joke = document.getElementById("joke");
const jokeButton = document.getElementById("joke-btn");
const url = "https://v2.jokeapi.dev/joke/Programming,Dark,Pun?type=single";

let counter = 0;

let getJoke = () => {
  //fetching the url for the API
  fetch(url)
    .then((data) => data.json())
    .then((item) => (joke.textContent = `${item.joke}`));
};
jokeButton.addEventListener("click", getJoke);
// increasing the like count
let incrementCount = () => {
  counter++;
  console.log(counter);
  like.innerHTML = counter;
};
likeBtn.addEventListener("click", incrementCount); 
 
// adding an alert
alert ('GET READY TO LAUGH!') 



