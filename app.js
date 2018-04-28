$('document').ready(()=> {
  const wordCount = 10;
  var guessCount = 4;
  var password = ''
$('#start').click(
  () => {
    $('#start-screen').toggleClass('show hide')
    $('#game-screen').toggleClass('show hide')
    startGame()
  }
)

// start game function
function startGame() {
  let wordList = $('#word-list');
  let randomValue = getRandomValue(words,wordCount)
  randomValue.forEach(function(word){
    wordList.append(`<li> ${word}</li>`)
  })
  password = getRandomValue(randomValue,1)[0]
  console.log("password in startGame", password)
  setGuessCount(guessCount)
  wordList.click(updateGame)
}
// get the random value from the word list
let getRandomValue = (array,numberOfVals) => {
 return  shuffle(array).slice(0,numberOfVals)
}
// this shuffle the number in words list array
let shuffle = (array) =>{
   var arrayCopy = array.slice();
   for (var idx1 = arrayCopy.length - 1; idx1 > 0; idx1--) {
     // generate a random index between 0 and idx1 (inclusive)
     var idx2 = Math.floor(Math.random() * (idx1 + 1));
     // swap elements at idx1 and idx2
  [arrayCopy[idx1],arrayCopy[idx2]] = [arrayCopy[idx2],arrayCopy[idx1]]
   }
   return arrayCopy;
 }
// this show the DOMS guessCount number
let setGuessCount = (newCount) => {
  guessCount = newCount
  $('#guesses-remaining').text("Guesses remaining: " + guessCount + ".")
}
// this update the
function  updateGame(e){
  if(e.target.nodeName === 'LI' && !e.target.classList.contains("disabled")){
    var guess = e.target.innerText;


    // debugger
    var Matched = compareWords(guess,password)
    var rightOrWrong = match(Matched)
    console.log(password)
    e.target.classList.add("disabled")
    e.target.innerText = `${e.target.innerText}  ${rightOrWrong}`;
    setGuessCount(guessCount - 1);
      // check whether the game is over
      if (Matched) {
        $('#winner').toggleClass('hide show')
        $(this).off("click",updateGame)
      } else if (guessCount === 0) {
        $('#loser').toggleClass('hide show')
        $(this).off("click",updateGame)
      }
  }
}

let match = (rightOrwrong) => {
  let str = 'You answer is'
  if(rightOrwrong){
    str += " correct"
  }
  else{
    str += ' incorrect, try again'
  }
return str
}
// this function compares the two numbers
var  compareWords = (word1, word2) =>{
  // if(word1.length !== word2.length) throw "Words must have the same length"
  let right = false
  if(word1 === word2){right = true}

  return right;
}

})
