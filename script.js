fetch("https://icanhazdadjoke.com/slack")
    .then(response => response.json())
    .then(data => {
        const jokeText = data.attachments[0].text;
        const jokeElement = document.getElementById("jokeElement");

        jokeElement.innerHTML = jokeText;
    })

const nextBtn = document.getElementById("nextBtn");
nextBtn.onclick = function(){
    const jokeElement = document.getElementById("jokeElement");
    jokeElement.innerHTML = "Loading...";
    
    fetch("https://icanhazdadjoke.com/slack")
    .then(response => response.json())
    .then(data => {
        const jokeText = data.attachments[0].text;
        const jokeElement = document.getElementById("jokeElement");

        jokeElement.innerHTML = jokeText;
    })
}