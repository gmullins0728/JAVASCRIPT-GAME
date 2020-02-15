const letsPlay = prompt('Would you like to play a 2 player game? [yes] or [no]: ');

//Function based on what the user chooses 
function gamePlay() {
  if(letsPlay.toUpperCase() === 'YES') {
    let results = playGame();
  }
  else if (letsPlay.toUpperCase() === 'NO') {
    alert('Have a nice day!');
  }
  else {
    alert('Invalid input. Enter yes or no.')
  }
}
gamePlay();

//Function to run the game
function playGame() {
  let userName = prompt('Enter name: ');
  let userPts = 40;
  let grantName = 'Grant the Mighty Chicken';
  let grantPts = 10;
  let numOfWins = 0;

  // While loop to keep iterating when the user has more than 0 points and less than 3 wins
  while (userPts > 0 && numOfWins !=3) {
    let ranNum = getRandomNum(2); //Get a random number
    userPts = userPts - ranNum; 
    grantPts = grantPts - ranNum;
    

    console.log(`${userName} has ${userPts} health left.`);
    console.log(`${grantName} has ${grantPts} health left.`);

    // Resets Grants points to 10 if less or equal to 0
    if (grantPts <= 0) {
      grantPts = 10;
      numOfWins++;

      console.log(`\n${grantName} defeated. ${userName} has ${numOfWins} out of 3 wins. \n\n`)
    }
  }
      console.log(getResults(userName, numOfWins));
}

  //Function to generate num for random number of 1 or 2
function getRandomNum(num) {
  return Math.floor(Math.random() * 3) + 1;
}

//Function that determines win or loss
function getResults(userName, numOfWins) {
  if (numOfWins === 3)
    console.log(`${userName} has won the game with ${numOfWins} wins.\n\n`);
  else
    console.log(`${userName} has no points left.  ${numOfWins} lost the game.\n\n`);
}
