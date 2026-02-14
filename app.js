const apiUrl = "https://v2.jokeapi.dev/joke/Programming,Dark,Spooky?type=single"
const dialog = document.querySelector(".wrapper");
const jokeBody = document.getElementById("joke");
const btn = document.getElementById("getjokes");

const closeBtn = document.getElementById("close");

let getjokes = () => {
    fetch(apiUrl)
        .then(data => data.json())
        .then(item => {
            jokeBody.textContent = `${item.joke}`;
            dialog.showModal();
        })
        .catch(error => console.error("Error fetching joke:", error));
}

btn.addEventListener("click", getjokes);
closeBtn.addEventListener("click", () => dialog.close());
