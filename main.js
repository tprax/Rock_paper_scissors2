$(document).ready( function() {

// varibles
var options = ['rock', 'paper', 'scissor']
var user
var computer
var results
var userChoice
var winner
var count


//functions
//user selects rock paper or scissors
//computer generates random choice
//compare choices
//display winner
//add wins to user,computer, or ties
function computerChoice(){
  return options[Math.floor(Math.random() * options.length)]
}

$('#rock').on('click',function(){
  userChoice = 'rock'
  compare(userChoice)
})
$('#paper').on('click',function(){
  userChoice = 'paper'
  compare(userChoice)
})
$('#scissors').on('click',function(){
  userChoice = 'scissors'
  compare(userChoice)
})


function compare(userChoice){
  computer = computerChoice()

  if (userChoice === computer)
  results = 'tie'
  $('#winner').text('You ' + results)
  
  switch (userChoice){
    case 'rock':
      results = computer === 'paper' ? 'lose' : 'win'
      $('#winner').text('You ' + results)
    case 'paper':
      results =computer === 'scissors' ? 'lose' : 'win'
      $('#winner').text('You ' + results)
    case 'scissors':
      results = computer === 'rock' ? 'lose' : 'win'
      $('#winner').text('You ' + results)
    default:
      return
  } 
}
// if (results === 'win'){
// $('#userwins').text('User wins: ' + 1)
// }






//listeners
})