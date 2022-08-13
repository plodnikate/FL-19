
let container = document.getElementsByClassName('container');
let announcer = document.getElementsByClassName('announcer');

const playerArr = ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X'];

let number = 0;
let player = playerArr[number];
let numberChild = -1;
const num1_ = -1;
const num1 = 1;
const num2 = 2;
const num3 = 3;
const num4 = 4;
const num5 = 5;
const num6 = 6;
const num7 = 7;
const num8 = 8;
const num9 = 9;


function isWinner(){
    if( container[0].children[0].innerHTML && container[0].children[1].innerHTML && 
        container[0].children[num2].innerHTML && container[0].children[0].innerHTML === 
        container[0].children[1].innerHTML && container[0].children[0].innerHTML === 
        container[0].children[num2].innerHTML){
        announcer[0].classList.remove('hide');
        announcer[0].innerHTML = 'Player  ' + container[0].children[0].innerHTML + ' won'
        container[0].removeEventListener('click', clickListener, false);
        document.removeEventListener('keydown', keydownListener, false);
        return;
    }
    if(container[0].children[num3].innerHTML && container[0].children[num4].innerHTML && 
        container[0].children[num5].innerHTML && container[0].children[num3].innerHTML === 
        container[0].children[num4].innerHTML 
        && container[0].children[num3].innerHTML === container[0].children[num5].innerHTML){
        announcer[0].classList.remove('hide');
        announcer[0].innerHTML = 'Player  ' + container[0].children[num3].innerHTML + ' won'
        container[0].removeEventListener('click', clickListener, false);
        document.removeEventListener('keydown', keydownListener, false);
        return;
    }
    if(container[0].children[num6].innerHTML && container[0].children[num7].innerHTML
         && container[0].children[num8].innerHTML && container[0].children[num6].innerHTML === 
         container[0].children[num7].innerHTML && 
         container[0].children[num6].innerHTML === container[0].children[num7].innerHTML){
        announcer[0].classList.remove('hide');
        announcer[0].innerHTML = 'Player  ' + container[0].children[num6].innerHTML + ' won'
        container[0].removeEventListener('click', clickListener, false);
        document.removeEventListener('keydown', keydownListener, false);
        return;
    }
    if(container[0].children[0].innerHTML && container[0].children[num3].innerHTML && 
        container[0].children[num6].innerHTML && container[0].children[0].innerHTML 
        === container[0].children[num3].innerHTML && 
        container[0].children[0].innerHTML === container[0].children[num6].innerHTML){
        announcer[0].classList.remove('hide');
        announcer[0].innerHTML = 'Player  ' + container[0].children[0].innerHTML + ' won'
        container[0].removeEventListener('click', clickListener, false);
        document.removeEventListener('keydown', keydownListener, false);
        return;
    }
    if(container[0].children[1].innerHTML && container[0].children[num4].innerHTML 
        && container[0].children[num7].innerHTML && container[0].children[1].innerHTML 
        === container[0].children[num4].innerHTML && 
        container[0].children[1].innerHTML === container[0].children[num7].innerHTML){
        announcer[0].classList.remove('hide');
        announcer[0].innerHTML = 'Player  ' + container[0].children[1].innerHTML + ' won'
        container[0].removeEventListener('click', clickListener, false);
        document.removeEventListener('keydown', keydownListener, false);
        return;
    }
    if(container[0].children[num2].innerHTML && container[0].children[num5].innerHTML && 
        container[0].children[num8].innerHTML && container[0].children[num2].innerHTML === 
        container[0].children[num5].innerHTML && 
        container[0].children[num2].innerHTML === container[0].children[num8].innerHTML){
        announcer[0].classList.remove('hide');
        announcer[0].innerHTML = 'Player  ' + container[0].children[num2].innerHTML + ' won'
        container[0].removeEventListener('click', clickListener, false);
        document.removeEventListener('keydown', keydownListener, false);
        return;
    }
    if(container[0].children[0].innerHTML && container[0].children[num4].innerHTML && 
        container[0].children[num8].innerHTML && 
        container[0].children[0].innerHTML === container[0].children[num4].innerHTML && 
        container[0].children[0].innerHTML === container[0].children[num8].innerHTML){
        announcer[0].classList.remove('hide');
        announcer[0].innerHTML = 'Player  ' + container[0].children[0].innerHTML + ' won'
        container[0].removeEventListener('click', clickListener, false);
        document.removeEventListener('keydown', keydownListener, false);
        return;
    }
    if(container[0].children[num2].innerHTML && container[0].children[num4].innerHTML && 
        container[0].children[num6].innerHTML && container[0].children[num2].innerHTML === 
        container[0].children[num4].innerHTML && 
        container[0].children[num2].innerHTML === container[0].children[num6].innerHTML){
        announcer[0].classList.remove('hide');
        announcer[0].innerHTML = 'Player  ' + container[0].children[num2].innerHTML + ' won'
        container[0].removeEventListener('click', clickListener, false);
        document.removeEventListener('keydown', keydownListener, false);
        return;
    }
    if(container[0].children[0].innerHTML && container[0].children[1].innerHTML && 
        container[0].children[num2].innerHTML && container[0].children[num3].innerHTML && 
        container[0].children[num4].innerHTML && 
        container[0].children[num5].innerHTML && container[0].children[num6].innerHTML && 
        container[0].children[num7].innerHTML && container[0].children[num8].innerHTML){
        announcer[0].classList.remove('hide');
        announcer[0].innerHTML = 'Draw'
        container[0].removeEventListener('click', clickListener, false);
        document.removeEventListener('keydown', keydownListener, false);
        return;
    }
    
}

  
const clickListener = function(event){
    if (event.target.className === 'tile') { 
        event.target.innerHTML = player;
        event.target.classList.add('player'+ player);
        isWinner()
        number++;
        player = playerArr[number];
    }
};
const keydownListener = function(event){
    if (event.code !== 'ArrowRight' && event.code !== 'ArrowLeft' &&
    event.code !== 'Enter') {
 return; 
}

        if (event.code === 'Enter' ) {
            container[0].children[numberChild].innerHTML = player;
            container[0].children[numberChild].classList.add('player'+ player);
            console.log(player);
            container[0].children[numberChild].classList.remove('active');
            isWinner()
            number++;
            player = playerArr[number];
            console.log(player);
            }

            if (event.code === 'ArrowRight' ) {
                if(numberChild === num8){
                    return;
                }
                if(numberChild !== num1_ ) {
 container[0].children[numberChild].classList.remove('active'); 
}
                numberChild++;
                console.log(numberChild);
                container[0].children[numberChild].classList.add('active');  
            }

            if (event.code === 'ArrowLeft' && 0 >= numberChild <= num8) {
                if(numberChild === 0){
                    return;
                }
                container[0].children[numberChild].classList.remove('active');
                numberChild--;
                console.log(numberChild);
                container[0].children[numberChild].classList.add('active');
            }
        
}
const resetFunction = function(){
    document.location.reload();
}
function initial() {
    let avatar1 = document.querySelector("[data-item='1']");
    let avatar2 = document.querySelector("[data-item='2']");
    let avatar3 = document.querySelector("[data-item='3']");
    let avatar4 = document.querySelector("[data-item='4']");

  for(let i = 0; i < num9; i++) {
    let tile = document.createElement('div');
    container[0].appendChild(tile); 
    tile.classList.add('tile');
  }
  console.log( container[0])
  container[0].addEventListener('click', clickListener);
  container[0].addEventListener('click', clickListener);
  document.addEventListener('keydown', keydownListener);
  document.getElementById('reset').addEventListener('click', resetFunction)

 
  avatar1.setAttribute('draggable', true);
  avatar2.setAttribute('draggable', true);
  avatar3.setAttribute('draggable', true);
  avatar4.setAttribute('draggable', true);
 

  const zoneX = document.getElementsByClassName('avatar-container')[0];
  const zoneY = document.getElementsByClassName('avatar-container')[1];

 zoneX.ondragover = allowDrop;
 zoneX.ondrop = drop;
 zoneY.ondragover = allowDrop;
 zoneY.ondrop = drop;

  
  function allowDrop(event){
      event.preventDefault();
  }

  avatar1.ondragstart = drag;
  avatar2.ondragstart = drag;
  avatar3.ondragstart = drag;
  avatar4.ondragstart = drag;
  
  function drag(event){
      event.dataTransfer.setData('data-item', event.target.getAttribute('data-item'));
  }
  
  function drop(event) {
      let dataItem = event.dataTransfer.getData('data-item');
      event.target.append(document.querySelector("[data-item='" + dataItem + "']"));
    }


  }
  
  if (document.readyState === 'loading') {  
   document.addEventListener('DOMContentLoaded', initial);
  } else {  
      initial();
    }
