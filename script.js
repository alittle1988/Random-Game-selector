const gameArray = [];
const addedGameList = document.querySelector('.addedGameList');
const addGame = document.querySelector('.addGameBtn');
const gameInput = document.querySelector('.addGameInput');
const selectGameBtn = document.getElementById('selectGameBtn')
const selectedGameList = document.getElementById('selectedGameList')


// game functions 
// adds game to game list
const addGameFunc = (input) => {
    gameArray.push(input)
    let game = '';
    for(let i = 0;i < gameArray.length; i++) {
        game += `<p class="item">${gameArray[i]}</p>`
    }
    return game
    
};

// adds game to selected game list

const addSelectedGame = () => {
    let randNum = Math.floor(Math.random() * gameArray.length)
    let selectedGame = '';
    if(gameArray.length === 0){
        alert('Please add games')
    } else{
        selectedGame += `<p class="item">${gameArray[randNum]}</p>`;
        gameArray.splice(randNum, 1)
        
    }
    return selectedGame
}


// event listeners 

addGame.addEventListener('click', () => {
    if(gameInput.value === '') {
        alert('Please enter a game!')
    } else {
    addedGameList.innerHTML = addGameFunc(gameInput.value)
    gameInput.value = '';
    }
});

selectGameBtn.addEventListener('click', () => {
    selectedGameList.innerHTML += addSelectedGame()
    console.log(gameArray)

})
