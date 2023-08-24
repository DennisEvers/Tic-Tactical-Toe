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





console.log(boxes)

const light = ` <img src="pngegg.png" width="150px">`;
const dark = ` <img src="tiefighter.png" width="130px">`; 
const darkName = "TIE Fighters have demolsihed the Rebellion and Darkness will reign through out space!!!"
const lightName = "XWings have successfully held back the Darkness and the Rebellion Still Lives!!!"
let currentPlayer = light;
let spaces = Array(9).fill(null);

console.log(spaces);


const startGame = () => {
    boxes.forEach(box => box.addEventListener('click', boxClicked))
    hide.style.display = "none";
    hide1.style.display = "none";

}

function boxClicked(e) {
   const id = e.target.id
   console.log(e.target)

    

    if(!spaces[id]) {
        
        spaces[id] = currentPlayer         
        e.target.innerHTML = currentPlayer
         
        if(currentPlayer !== light) {
            playerUp.innerHTML = `${light}'s Turn Is At Hand!`
        }
         if(currentPlayer !== dark) {
            playerUp.innerHTML = `${dark}'s Turn Is At Hand!`
         }         
       
       if(winner() !==false){
        alert(`The Fight Is OVER AND A WINNER EMERGES`)  
          let winningBlocks = winner()
          console.log(winningBlocks)
          boxes.forEach(box => box.removeEventListener('click', boxClicked))
          playerUp.innerHTML = `${currentPlayer} IS THE VICTOR OVER THE GALAXY`
          
          console.log(winningBlocks)
          winningBlocks.map(box => boxes[box].style.borderColor='red')
          hide.style.display = "block";
           
         

        } 
        else if (!spaces.includes(null)) { 
            alert("Its a Tie... the fight for the Galaxy is not Over!!!")
            hide1.style.display = "block";

        }
     }

     currentPlayer = currentPlayer == light ? dark : light
     


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

function winner() {
    for (const condition of winningCombos) {
        let [a,b,c] = condition

        if(spaces[a] && (spaces[a] == spaces[b] && spaces[a] == spaces[c])) {
            return [a,b,c]
    }
}
    return false
    
}
console.log(spaces)
console.log(one)


restartBTN.addEventListener('click', restart)

function restart() {
    
    spaces.fill(null)
   
   

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

