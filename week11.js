let mainText = document.getElementById('titleText');
let restartBTN = document.getElementById('restartBTN')
let boxes = Array.from(document.getElementsByClassName('box'))
let playerUp = document.getElementById('playersTurn');
 let zero = document.getElementById('o')
 let one = document.getElementById('1')
 let two = document.getElementById('2')
 let three = document.getElementById('3')
 let four = document.getElementById('4')
 let five = document.getElementById('5')
 let six = document.getElementById('6')
 let seven = document.getElementById('7')
 let eight = document.getElementById('8')
 let hide = document.getElementById('hid')
 let hide1 = document.getElementById('hid1')


// these are all the variables i used in the code these are all get element IDs so that i did not have to write this out a lot just made it easier.


console.log(boxes)

const light = ` <img src="pngegg.png" width="150px">`;
const dark = ` <img src="tiefighter.png" width="130px">`; 
const darkName = "TIE Fighters have demolsihed the Rebellion and Darkness will reign through out space!!!"
const lightName = "XWings have successfully held back the Darkness and the Rebellion Still Lives!!!"
let currentPlayer = light;
let spaces = Array(9).fill(null);
// these are constants i made for the code as well they are the images of the X and Os as well as a title taht is called upon based on who wins and an array created that fills in null for all the spaces

console.log(spaces);


const startGame = () => {
    boxes.forEach(box => box.addEventListener('click', boxClicked))
    hide.style.display = "none";
    hide1.style.display = "none";
// this starts the game and adds an event listenr to all boxes as well as hides the winner and tie alerts
}

function boxClicked(e) {
   const id = e.target.id
   console.log(e.target)

   //this creates a tageted id so that any time a box is click it fetches that specific id to use in the code

    

    if(!spaces[id]) {
        
        spaces[id] = currentPlayer         
        e.target.innerHTML = currentPlayer
         
        if(currentPlayer !== light) {
            playerUp.innerHTML = `${light}'s Turn Is At Hand!`
        }
         if(currentPlayer !== dark) {
            playerUp.innerHTML = `${dark}'s Turn Is At Hand!`
         }  
         
         // this is the code that targets the current player HTML and creates the banner that displays whos turn it is. it also
         // makes it to where the targeted HTML for the targeted space changes to the correct image
       
       if(winner() !==false){
        alert(`The Fight Is OVER AND A WINNER EMERGES`)  
          let winningBlocks = winner()
          console.log(winningBlocks)
          boxes.forEach(box => box.removeEventListener('click', boxClicked))
          playerUp.innerHTML = `${currentPlayer} IS THE VICTOR OVER THE GALAXY`
          
          console.log(winningBlocks)
          winningBlocks.map(box => boxes[box].style.borderColor='red')
          hide.style.display = "block";

          // this is the code that cyucles throught hte winner function and decides if there is a winner or not
          // if there is a winner it will run a seperate function that will change the title as well as highlight borders of the winning boxes and trigger the alert
           
         

        } 
        else if (!spaces.includes(null)) { 
            alert("Its a Tie... the fight for the Galaxy is not Over!!!")
            hide1.style.display = "block";
            playerUp.innerHTML = ` THERE IS NO VICTOR TODAY!`
            // this runs if there are no more nulls inside of the spaces array and the winner function has not triggered so a tie is declared

        }
     }

     currentPlayer = currentPlayer == light ? dark : light
     // this just makes sure that the current player changes everytime correctly so that its a new persons turn every time


     }
     


const winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
// these are all the winning combos and boxes that will trigger the winner function
function winner() {
    for (const condition of winningCombos) {
        let [a,b,c] = condition

        if(spaces[a] && (spaces[a] == spaces[b] && spaces[a] == spaces[c])) {
            return [a,b,c]
    }
}
    return false
    //this goes through all the spaces looking for a winning combonation above. if found it declares a winner and returns an array if not it returns false and the code moves on
    
}
console.log(spaces)
console.log(one)


restartBTN.addEventListener('click', restart)
// this adds a event listener to the restart button

function restart() {
    
    spaces.fill(null)
   
   //this is the restart function that refills the spaces with null and resets the inner html as well the border color change and resets all of the text that needs reset as well as hide the alerts

    boxes.forEach(box => {
        box.innerHTML = ' '
        box.style.borderColor=''
    })

    mainText = 'TIC TAC TOE'
    currentPlayer = light
    boxes.forEach(box => box.addEventListener('click', boxClicked))
    playerUp.innerHTML = `${light}'s Turn Is At Hand!`
    hide.style.display = "none";
    hide1.style.display = "none";
    
    

}

startGame()
//this starts the game

