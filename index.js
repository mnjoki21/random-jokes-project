


const button = document.getElementsByClassName('joke-btn')
const jokeText = document.getElementsByClassName ('text2') 


joke-btn.addEventListener('click' , getJoke) 
getJoke()

async function getJoke(){
	//calls the api using fetch 
	const jokesResponse = await fetch('https://v2.jokeapi.dev/joke/Programming,Dark,Pun' , {
		headers: {
			accept : 'application/json'
		}
	}) 
	
	//getting the function 

} 

const joke = await jokesResponse.json()
console.log (jokes) 

jokeEl.innerHTML=joke.joke




