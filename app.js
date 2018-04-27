$('document').ready(()=> {
  var wordCount = 10;
  var guessCount = 4;
  var password = '';
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
}
// get the random value from the word list
let getRandomValue = (array,numberOfVals) => {
 return   array.slice(0,numberOfVals)
}
})
