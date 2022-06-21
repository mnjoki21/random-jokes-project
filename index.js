const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f744cd80ddmshd282901e93a5739p1281c5jsn8ed87d8aeeba',
		'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
	}
};

fetch('https://dad-jokes.p.rapidapi.com/random/joke', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));