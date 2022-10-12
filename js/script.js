const pokemonText = document.querySelector(".pokemon"),
    timeText = document.querySelector(".time b"),
    inputField = document.querySelector("input"),
    refreshBtn = document.querySelector(".refresh-pokemon"),
    checkBtn= document.querySelector(".check-word");

let correctPokemon, timer;
let score = 0;

const initTimer = maxTime => {
    clearInterval(timer);
    timer = setInterval(() => {
        if(maxTime > 0) {
            maxTime--;
            return timeText.innerText = maxTime;
        }

        clearInterval(timer);
        return alert(`Times up! ${correctPokemon.toUpperCase()} was the correct Pokemon`);
        initGame();
    },1000);
}

const initGame = () => {

    initTimer(30);
    let randomObj  = pokemon[Math.floor(Math.random() * pokemon.length)]; // gets random object from topic
    let pokemonArray = randomObj.pokemon.split("");
    for (let i = pokemonArray.length -1; i > 0; i--){
        let j = Math.floor(Math.random() * (i+1));
        [pokemonArray[i], pokemonArray[j]] = [pokemonArray[j], pokemonArray[i]];
    }
    pokemonText.innerText = pokemonArray.join("");
    correctPokemon = randomObj.pokemon.toLocaleLowerCase();
    inputField.value = "";
    inputField.setAttribute("maxlength", correctPokemon.length);
    console.log(randomObj);
}
initGame();

const checkWord = () => {
    let userWord = inputField.value.toLocaleLowerCase();
    if(!userWord){
        return alert(`Please enter in something!`)
    }
    if(userWord !== correctPokemon){
        return alert(`Oops ${userWord} that Pokemon is not on the list! Your score is ${score}`)
    }
    alert(`Congrats! ${userWord.toUpperCase()} is the Pokemon. Your score is ${score}`);
    initGame();
}
refreshBtn.addEventListener("click",initGame);
checkBtn.addEventListener("click",checkWord);