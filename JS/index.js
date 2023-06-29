
import { createMatrix, createMatrixTwo, createMatrixTree} from "./matrix.js";
import { appElem } from "./box.js";

let body = document.querySelector('body')
let changeLevel = document.createElement('div');
let Level1 = document.createElement('button');
let Level2 = document.createElement('button');
let Level3 = document.createElement('button');
Level1.className = 'Level1'
Level2.className = 'Level2'
Level3.className = 'Level3'
Level1.innerHTML = 'Level1'
Level2.innerHTML = 'Level2'
Level3.innerHTML = 'Level3'
body.append(changeLevel)
changeLevel.append(Level1)
changeLevel.append(Level2)
changeLevel.append(Level3)

Level1.addEventListener('click', function () {
  Level1.classList.add('active')
  Level2.classList.remove('active')
  Level3.classList.remove('active')
  appElem.classList.add('app')
  appElem.classList.remove('app2')
  appElem.classList.remove('app3')
  NewGame()
 })
 Level2.addEventListener('click', function () {
  Level2.classList.add('active')
  Level1.classList.remove('active')
  Level3.classList.remove('active')
  appElem.classList.add('app2')
  appElem.classList.remove('app')
  appElem.classList.remove('app3')
  NewGame()
 })
 Level3.addEventListener('click', function () {
  Level3.classList.add('active')
  Level2.classList.remove('active')
  Level1.classList.remove('active')
  appElem.classList.add('app3')
  appElem.classList.remove('app2')
  appElem.classList.remove('app')
  NewGame()
 })

 function basicStart() {
  appElem.innerHTML = null
  createMatrix();
}
basicStart()
 

function startGame() {

   if (Level2.classList.contains('active')) {
    createMatrixTwo();
   }else if(Level1.classList.contains('active')) {

    createMatrix();
   } else {
    createMatrixTree();
    
   }
}



 function NewGame() {
   appElem.innerHTML = null
   startGame()
 }



let AllBox = document.querySelectorAll('.box')
let AllBomb = document.querySelectorAll('.bomb-count-💣')
let massage = document.createElement('div');
let countMove = document.createElement('div');
let Time = document.createElement('div');
let buttonNewGame = document.createElement('button');
let LightAndBlack = document.createElement('button');
// копки смены уровня


buttonNewGame.className = 'bt'
LightAndBlack.className = 'LightAndBlack'
body.append(buttonNewGame)
body.append(LightAndBlack)
body.append(Time)
body.append(countMove)

buttonNewGame.innerHTML = 'Начать занаво'
LightAndBlack.innerHTML = 'Сменить тему'
Time.innerHTML = '<span>Time: </span>'
countMove.innerHTML = '<span>Move: </span>'
let counterClick = 0
let counterTime = 0



  for (let i = 0; i < AllBomb.length; i++) {
    let bomb = AllBomb[i]

    bomb.addEventListener("click", function () {
      appElem.innerHTML = null
      appElem.append(massage)
      massage.innerHTML = `<h1>Вы проиграли!!!</h1>`
  })
  }

  

function CounterTime() {
  setInterval(function(){
    counterTime++;
    Time.innerHTML = `<span>Time: ${counterTime}</span>`;
  }, 1000);
}
CounterTime()
 

buttonNewGame.addEventListener("click", function () {
  NewGame()
 })

 LightAndBlack.addEventListener('click', function ChangeColor() {
  LightAndBlack.classList.toggle('NightBt')
  for (let i = 0; i < AllBox.length; i++) {
    AllBox[i].classList.toggle('NightBox')
  }
  
  

 })

 for (let i = 0; i < AllBox.length; i++) {
   AllBox[i].addEventListener('click', function() {
      counterClick++
       countMove.innerHTML = `<span>Move: ${counterClick}</span>`
   })
}
 export function Winner() {
  let bombDisplaitedCount = 0
  for (let i = 0; i < AllBomb.length; i++) {
    if (AllBomb[i].innerHTML == '🚩') {
      bombDisplaitedCount++
    }
    
    if (bombDisplaitedCount == 10) {
      appElem.innerHTML = null
      appElem.append(massage)
      massage.innerHTML = `<h1>Вы Выйграли!!!</h1>`
    }
  }

 }



 




