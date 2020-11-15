// Welcome Memory Game
// Prompt username request
const userName = prompt(`Welcome to Memory Game, please enter your username`);

// Cards are to be shuffled on load or restart
const card = document.querySelector('.card');
card.addEventListener('click', function () {
    card.classList.toggle('is-flipped');
});

const card1 = document.querySelector('.card1');
card1.addEventListener('click', function () {
    card1.classList.toggle('is-flipped');
});

const card2 = document.querySelector('.card2');
card2.addEventListener('click', function () {
    card2.classList.toggle('is-flipped');
});

const card3 = document.querySelector('.card3');
card3.addEventListener('click', function () {
    card3.classList.toggle('is-flipped');
});

// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
// }


// User will select one tile(listen for that button)



    //  Tile will flip and show image
// User selects second tile
// Tile will flip and show image
// If they match, tile disappear.
// const userAnswer = prompt("guess a number between 1 to 20");
// let userScore = 0;
// if (userAnswer == 9 || userAnswer == "nine") {
//     userScore += 1;
//     console.log("You got it! Your score is " + userScore);
// } else {
//     console.log("good luck next time! Your score is " + userScore);
// }
    // const moves = 0; 
    // when tiles match add 1 to the moves count moves ++

    //  If they do not match, tiles will flip back. 
    //Prevent users of clicking more than 2 tiles
//  Once all the tiles are match the game is over. 
// Prompt “Congrats you completed the game!” message
// const = alert(`Congrats you completed the game ${userName}.`);

// Restart button button should allo the player reset the game board. 

// remember to add a button to re-start the game in css 
// {/* <button onclick="document.getElementById('demo').innerHTML = getRndInteger(0,10)">Click Me</button> */}
// 

