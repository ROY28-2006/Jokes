const apiUrl = "https://v2.jokeapi.dev/joke/Programming,Dark,Spooky?type=single"

const jokeBody = document.getElementById("joke");
const btn = document.getElementById("getjokes");

alert("arpan gendu")

let getjokes = ()=>{
    
    fetch(apiUrl)
    .then(data => data.json())
    .then(item => (jokeBody.textContent= `${item.joke}`));
    
    
}

btn.addEventListener("click", getjokes);
