const jokesetup =document.querySelector('#joke-setup')
const jokepunchline =document.querySelector('#joke-punchline')
const jokebtn =document.querySelector('#joke-btn')

async function fetchjokes() {
    try {
        const response = await fetch('https://official-joke-api.appspot.com/random_joke')
        // console.log(response)
        const data = await response.json();
        console.log(data)
        jokesetup.textContent =data.setup;
        jokepunchline.textContent =data.punchline;
    } catch (error) {
        console.error('Error fetching jokes:', error);
        jokesetup.textContent = 'Error fetching jokes!';
        jokepunchline.textContent = 'please try again latter';
    }
}
jokebtn.addEventListener("click",fetchjokes)
fetchjokes();
