// Welcome Memory Game
// Define card options
// User will select one tile(listen for that button)
//  Tile will flip and show image
// User selects second tile
// Tile will flip and show image
// If they match, tile disappear.
//  If they do not match, tiles will flip back. 
//Prevent users of clicking more than 2 tiles
//  Once all the tiles are match the game is over. 
// Prompt “Congrats you completed the game!” message



const card = document.querySelector('.card');
card.addEventListener('click', function () {
    card.classList.toggle('is-flipped');
});
