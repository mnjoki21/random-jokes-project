const joke = document.getElementById('joke')
const jokeButton = document.getElementById('joke-btn')
const url = "https://v2.jokeapi.dev/joke/Programming,Dark,Pun?type=single"

let getJoke = () =>{
	fetch(url)
	.then(data => data.json())
	.then(item => 
		joke.textContent = `${item.joke}`
	)

} 
jokeButton.addEventListener("click",getJoke)

getJoke ()





