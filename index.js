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

// getJoke();
let incrementCount = () => {
  counter++;
  // for (let count = 0; count <= 10; count++)
  console.log(counter);
  likeBtn.innerHTML = counter;

};
likeBtn.addEventListener("click", incrementCount);

// document.getElementById("btn").addEventListener("click", ()=>{
//   incrementCount});
