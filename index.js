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
  fetch(url)
    .then((data) => data.json())
    .then((item) => (joke.textContent = `${item.joke}`));
};
jokeButton.addEventListener("click", getJoke);

let incrementCount = () => {
  counter++;
  console.log(counter);
  like.innerHTML = counter;
};
likeBtn.addEventListener("click", incrementCount); 

alert ('GET READY TO LAUGH!') 



