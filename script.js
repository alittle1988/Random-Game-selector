const gameArray = [];
const addedGameList = document.querySelector('.addedGameList')
const addGame = document.querySelector('.addGameBtn')
const gameInput = document.querySelector('.addGameInput')



const addGameFunc = (input) => {
    gameArray.push(input)
    let game = '';
    for(let i = 0;i < gameArray.length; i++) {
        game += `<li>${gameArray[i]}</li>`
    }
    return game
    
}

addGame.addEventListener('click', () => {
    addedGameList.innerHTML = addGameFunc(gameInput.value)
    gameInput.value = '';
})

const selectGame = (list) => {
    randNum = Math.floor(Math.random() * list.length)
    if(addedGameList.length === 0){

    } else {
        
    }

}