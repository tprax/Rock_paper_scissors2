$(document).ready( function() {

// varibles
var options = ['rock', 'paper', 'scissor']
var user
var computer
var results
var userChoice
var winner


//functions
//user selects rock paper or scissors
//computer generates random choice
//compare choices
//display winner
//add wins to user,computer, or ties

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

function computerChoice(){
  return options[Math.floor(Math.random() * options.length)]
}

function compare(userChoice){
  computer = computerChoice()
  debugger
  if (userChoice === computer)
  return 'tie'
  switch (userChoice){
    case 'rock':
      return computer === 'paper' ? 'lose' : 'win'
    case 'paper':
      return computer === 'scissors' ? 'lose' : 'win'
    case 'scissors':
      return computer === 'rock' ? 'lose' : 'win'
    default:
      return
    
  }
}

function winner(){
  if(compare() === 'win'){
    winner = "You Win!"
  }
  if(compare() === 'lose'){
    winner = "You Lose!"
  }
  if(compare() === 'tie'){
    winner = "It is a tie!"
  }
  $('#winner').text(winner)
}





//listeners
})