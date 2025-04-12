var level = 0;
function hide(elm){
    elm.classList.remove("show");
}
function Player(func, limit, parent){
    level++;
    this.level = level;
    this.next = null;
    if (parent) parent.next = this;
    this.limit = limit;
    this.func = func;
    this.play = _ => this.func();
}

async function row1SeqPlay(){
    gover_dialog.open=false;
    let cells = Array.from(board.children);
    cells = cells.slice(0, 3);
    cells.forEach(cell=>cell.innerHTML = ".");
    for (let cell of cells){
        show(cell);
        let num = choose([1,2,3,4,5,6,7,8,9]);
        cell.innerHTML = num;
        guesses.push(num);
        await wait(1000);
    }
    hideAll();
    guess.innerHTML = choose(guesses);
   // canGuess = true;
}

async function row1UniqSeqPlay(){
    gover_dialog.open=false;
    let cells = Array.from(board.children);
   cells = cells.slice(0, 3); 
   cells.forEach(cell=>cell.innerHTML = ".");
    // canGuess = false;
    let numIndex = 0;
    let nums = shuffle([1,2,3,4,5,6,7,8,9])
    for (let cell of cells){
        show(cell);
        let num = nums[numIndex];
        numIndex++
        cell.innerHTML = num;
        guesses.push(num);
        await wait(1000);
    }
    hideAll();
    guess.innerHTML = choose(guesses);
   // canGuess = true;
}
async function row1RandSeqPlay(){
    gover_dialog.open=false;
    let cells = Array.from(board.children);
    cells = cells.slice(0, 3)//.forEach(cell=>cell.remove());
    cells.forEach(cell=>cell.innerHTML = ".");
    cells = shuffle(cells);
   // canGuess = false;
    for (let cell of cells){
        show(cell);
        let num = choose([1,2,3,4,5,6,7,8,9]);
        cell.innerHTML = num;
        guesses.push(num);
        await wait(1000);
    }
    hideAll();
   // let operand = choose(guesses);
   // cells.forEach(cell=> cell.innerHTML=Number(cell.innerHTML)+operand)
    //guesses = guesses.map(guess => guess+operand)
    guess.innerHTML = choose(guesses);
   // canGuess = true;
}

async function row1RandUniqSeqPlay(){
    gover_dialog.open=false;
    let cells = Array.from(board.children);
    cells = cells.slice(0, 3)//.forEach(cell=>cell.remove());
    cells.forEach(cell=>cell.innerHTML = ".");
    cells = shuffle(cells);
   // canGuess = false;
    let nums = shuffle([1,2,3,4,5,6,7,8,9]);
    let numIndex = 0;
    for (let cell of cells){
        show(cell);
        let num = nums[numIndex];//choose([1,2,3,4,5,6,7,8,9]);
        numIndex++;
        cell.innerHTML = num;
        guesses.push(num);
        await wait(1000);
    }
    hideAll();
   // let operand = choose(guesses);
   // cells.forEach(cell=> cell.innerHTML=Number(cell.innerHTML)+operand)
    //guesses = guesses.map(guess => guess+operand)
    guess.innerHTML = choose(guesses);
   // canGuess = true;
}


async function row1ContPlay(){
    gover_dialog.open=false;
    let cells = Array.from(board.children);
    cells = cells.slice(0, 3)//.forEach(cell=>cell.remove());
   cells.forEach(cell=>cell.innerHTML = ".");
    // cells = Array.from(board.children);
    //canGuess = false;
    for (let cell of cells){
        show(cell);
        let num = choose([1,2,3,4,5,6,7,8,9]);
        cell.innerHTML = num;
        guesses.push(num);
        await wait(1000);
        hide(cell);
    }
   // hideAll();
   // let operand = choose(guesses);
   // cells.forEach(cell=> cell.innerHTML=Number(cell.innerHTML)+operand)
    //guesses = guesses.map(guess => guess+operand)
    guess.innerHTML = choose(guesses);
    //canGuess = true;
}
async function row1RandContPlay(){
    gover_dialog.open=false;
    let cells = Array.from(board.children);
    cells = cells.slice(0, 3);//.forEach(cell=>cell.remove());
    cells.forEach(cell=>cell.innerHTML = ".");
    cells = shuffle(cells);
    //canGuess = false;
    for (let cell of cells){
        show(cell);
        let num = choose([1,2,3,4,5,6,7,8,9]);
        cell.innerHTML = num;
        guesses.push(num);
        await wait(1000);
        hide(cell);
    }
   // hideAll();
   // let operand = choose(guesses);
   // cells.forEach(cell=> cell.innerHTML=Number(cell.innerHTML)+operand)
    //guesses = guesses.map(guess => guess+operand)
    guess.innerHTML = choose(guesses);
    //canGuess = true;
}
async function row1RandUniqContPlay(){
    gover_dialog.open=false;
    let cells = Array.from(board.children);
    cells = cells.slice(0, 3);//.forEach(cell=>cell.remove());
    cells.forEach(cell=>cell.innerHTML = ".");
    cells = shuffle(cells);
    //canGuess = false;
    let nums = shuffle([1,2,3,4,5,6,7,8,9]);
    let numIndex = 0;
    for (let cell of cells){
        show(cell);
        let num = nums[numIndex];// choose([1,2,3,4,5,6,7,8,9]);
        numIndex++;
        cell.innerHTML = num;
        guesses.push(num);
        await wait(1000);
        hide(cell);
    }
   // hideAll();
   // let operand = choose(guesses);
   // cells.forEach(cell=> cell.innerHTML=Number(cell.innerHTML)+operand)
    //guesses = guesses.map(guess => guess+operand)
    guess.innerHTML = choose(guesses);
    //canGuess = true;
}

async function row2SeqPlay(){
    gover_dialog.open=false;
    let cells = Array.from(board.children);
    cells = cells.slice(0, 6);
    cells.forEach(cell=>cell.innerHTML = ".");
    //console.log("2 row seq play", ", cells: ", cells.length);
    for (let cell of cells){
        show(cell);
        let num = choose([1,2,3,4,5,6,7,8,9]);
        cell.innerHTML = num;
        guesses.push(num);
        await wait(1000);
    }
    hideAll();
    guess.innerHTML = choose(guesses);
   // canGuess = true;
}
async function row2UniqSeqPlay(){
    gover_dialog.open=false;
    let cells = Array.from(board.children);
   cells = cells.slice(0, 6);
    cells.forEach(cell=>cell.innerHTML = ".");
   // canGuess = false;
    let numIndex = 0;
    let nums = shuffle([1,2,3,4,5,6,7,8,9])
    for (let cell of cells){
        show(cell);
        let num = nums[numIndex];
        numIndex++
        cell.innerHTML = num;
        guesses.push(num);
        await wait(1000);
    }
    hideAll();
    guess.innerHTML = choose(guesses);
   // canGuess = true;
}


async function row2RandSeqPlay(){
    gover_dialog.open=false;
    let cells = Array.from(board.children);
    cells = cells.slice(0, 6); //.forEach(cell=>cell.remove());
    cells.forEach(cell=>cell.innerHTML = ".");
    cells = shuffle(cells);
    //canGuess = false;
    for (let cell of cells){
        show(cell);
        let num = choose([1,2,3,4,5,6,7,8,9]);
        cell.innerHTML = num;
        guesses.push(num);
        await wait(1000);
    }
    hideAll();
   // let operand = choose(guesses);
   // cells.forEach(cell=> cell.innerHTML=Number(cell.innerHTML)+operand)
    //guesses = guesses.map(guess => guess+operand)
    guess.innerHTML = choose(guesses);
    //canGuess = true;
}


async function row2RandUniqSeqPlay(){
    gover_dialog.open=false;
    let cells = Array.from(board.children);
    cells = cells.slice(0, 6); //.forEach(cell=>cell.remove());
    cells.forEach(cell=>cell.innerHTML = ".");
    cells = shuffle(cells);
    //canGuess = false;
    let nums = shuffle([1,2,3,4,5,6,7,8,9]);
    let numIndex = 0;
    for (let cell of cells){
        show(cell);
        let num = nums[numIndex];//choose([1,2,3,4,5,6,7,8,9]);
        numIndex++;
        cell.innerHTML = num;
        guesses.push(num);
        await wait(1000);
    }
    hideAll();
   // let operand = choose(guesses);
   // cells.forEach(cell=> cell.innerHTML=Number(cell.innerHTML)+operand)
    //guesses = guesses.map(guess => guess+operand)
    guess.innerHTML = choose(guesses);
    //canGuess = true;
}

async function row2ContPlay(){
    gover_dialog.open=false;
    let cells = Array.from(board.children);
    cells = cells.slice(0, 6); //.forEach(cell=>cell.remove());
    cells.forEach(cell=>cell.innerHTML = ".");
   // cells = Array.from(board.children);
  //  canGuess = false;
    for (let cell of cells){
        show(cell);
        let num = choose([1,2,3,4,5,6,7,8,9]);
        cell.innerHTML = num;
        guesses.push(num);
        await wait(1000);
        hide(cell);
    }
   // hideAll();
   // let operand = choose(guesses);
   // cells.forEach(cell=> cell.innerHTML=Number(cell.innerHTML)+operand)
    //guesses = guesses.map(guess => guess+operand)
    guess.innerHTML = choose(guesses);
    //canGuess = true;
}

async function row2RandContPlay(){
    gover_dialog.open=false;
    let cells = Array.from(board.children);
    cells = cells.slice(0, 6)//.forEach(cell=>cell.remove());
    cells.forEach(cell=>cell.innerHTML = ".");
    cells = shuffle(cells);
    //canGuess = false;
    for (let cell of cells){
        show(cell);
        let num = choose([1,2,3,4,5,6,7,8,9]);
        cell.innerHTML = num;
        guesses.push(num);
        await wait(1000);
        hide(cell);
    }
   // hideAll();
   // let operand = choose(guesses);
   // cells.forEach(cell=> cell.innerHTML=Number(cell.innerHTML)+operand)
    //guesses = guesses.map(guess => guess+operand)
    guess.innerHTML = choose(guesses);
    //canGuess = true;
}
async function row2RandUniqContPlay(){
    gover_dialog.open=false;
    let cells = Array.from(board.children);
    cells = cells.slice(0, 6);//.forEach(cell=>cell.remove());
    cells.forEach(cell=>cell.innerHTML = ".");
    cells = shuffle(cells);
    //canGuess = false;
    let nums = shuffle([1,2,3,4,5,6,7,8,9]);
    let numIndex = 0;
    for (let cell of cells){
        show(cell);
        let num = nums[numIndex];// choose([1,2,3,4,5,6,7,8,9]);
        numIndex++;
        cell.innerHTML = num;
        guesses.push(num);
        await wait(1000);
        hide(cell);
    }
   // hideAll();
   // let operand = choose(guesses);
   // cells.forEach(cell=> cell.innerHTML=Number(cell.innerHTML)+operand)
    //guesses = guesses.map(guess => guess+operand)
    guess.innerHTML = choose(guesses);
    //canGuess = true;
}





async function seqPlay(){
    gover_dialog.open=false;
    let cells = Array.from(board.children);
   // cells = cells.slice(0, 6);
    cells.forEach(cell=>cell.innerHTML = ".");
    //console.log("2 row seq play", ", cells: ", cells.length);
    for (let cell of cells){
        show(cell);
        let num = choose([1,2,3,4,5,6,7,8,9]);
        cell.innerHTML = num;
        guesses.push(num);
        await wait(1000);
    }
    hideAll();
    guess.innerHTML = choose(guesses);
   // canGuess = true;
}
async function uniqSeqPlay(){
    gover_dialog.open=false;
    let cells = Array.from(board.children);
   //cells = cells.slice(0, 6);
    cells.forEach(cell=>cell.innerHTML = ".");
   // canGuess = false;
    let numIndex = 0;
    let nums = shuffle([1,2,3,4,5,6,7,8,9])
    for (let cell of cells){
        show(cell);
        let num = nums[numIndex];
        numIndex++
        cell.innerHTML = num;
        guesses.push(num);
        await wait(1000);
    }
    hideAll();
    guess.innerHTML = choose(guesses);
   // canGuess = true;
}


async function randSeqPlay(){
    gover_dialog.open=false;
    let cells = Array.from(board.children);
   // cells = cells.slice(0, 6); //.forEach(cell=>cell.remove());
    cells.forEach(cell=>cell.innerHTML = ".");
    cells = shuffle(cells);
    //canGuess = false;
    for (let cell of cells){
        show(cell);
        let num = choose([1,2,3,4,5,6,7,8,9]);
        cell.innerHTML = num;
        guesses.push(num);
        await wait(1000);
    }
    hideAll();
   // let operand = choose(guesses);
   // cells.forEach(cell=> cell.innerHTML=Number(cell.innerHTML)+operand)
    //guesses = guesses.map(guess => guess+operand)
    guess.innerHTML = choose(guesses);
    //canGuess = true;
}


async function randUniqSeqPlay(){
    gover_dialog.open=false;
    let cells = Array.from(board.children);
   // cells = cells.slice(0, 6); //.forEach(cell=>cell.remove());
    cells.forEach(cell=>cell.innerHTML = ".");
    cells = shuffle(cells);
    //canGuess = false;
    let nums = shuffle([1,2,3,4,5,6,7,8,9]);
    let numIndex = 0;
    for (let cell of cells){
        show(cell);
        let num = nums[numIndex];//choose([1,2,3,4,5,6,7,8,9]);
        numIndex++;
        cell.innerHTML = num;
        guesses.push(num);
        await wait(1000);
    }
    hideAll();
   // let operand = choose(guesses);
   // cells.forEach(cell=> cell.innerHTML=Number(cell.innerHTML)+operand)
    //guesses = guesses.map(guess => guess+operand)
    guess.innerHTML = choose(guesses);
    //canGuess = true;
}

async function contPlay(){
    gover_dialog.open=false;
    let cells = Array.from(board.children);
   // cells = cells.slice(0, 6); //.forEach(cell=>cell.remove());
    cells.forEach(cell=>cell.innerHTML = ".");
   // cells = Array.from(board.children);
  //  canGuess = false;
    for (let cell of cells){
        show(cell);
        let num = choose([1,2,3,4,5,6,7,8,9]);
        cell.innerHTML = num;
        guesses.push(num);
        await wait(1000);
        hide(cell);
    }
   // hideAll();
   // let operand = choose(guesses);
   // cells.forEach(cell=> cell.innerHTML=Number(cell.innerHTML)+operand)
    //guesses = guesses.map(guess => guess+operand)
    guess.innerHTML = choose(guesses);
    //canGuess = true;
}

async function randContPlay(){
    gover_dialog.open=false;
    let cells = Array.from(board.children);
  //  cells = cells.slice(0, 6)//.forEach(cell=>cell.remove());
    cells.forEach(cell=>cell.innerHTML = ".");
    cells = shuffle(cells);
    //canGuess = false;
    for (let cell of cells){
        show(cell);
        let num = choose([1,2,3,4,5,6,7,8,9]);
        cell.innerHTML = num;
        guesses.push(num);
        await wait(1000);
        hide(cell);
    }
   // hideAll();
   // let operand = choose(guesses);
   // cells.forEach(cell=> cell.innerHTML=Number(cell.innerHTML)+operand)
    //guesses = guesses.map(guess => guess+operand)
    guess.innerHTML = choose(guesses);
    //canGuess = true;
}

async function randUniqContPlay(){
    gover_dialog.open=false;
    let cells = Array.from(board.children);
    //cells = cells.slice(0, 6);//.forEach(cell=>cell.remove());
    cells.forEach(cell=>cell.innerHTML = ".");
    cells = shuffle(cells);
    //canGuess = false;
    let nums = shuffle([1,2,3,4,5,6,7,8,9]);
    let numIndex = 0;
    for (let cell of cells){
        show(cell);
        let num = nums[numIndex];// choose([1,2,3,4,5,6,7,8,9]);
        numIndex++;
        cell.innerHTML = num;
        guesses.push(num);
        await wait(1000);
        hide(cell);
    }
   // hideAll();
   // let operand = choose(guesses);
   // cells.forEach(cell=> cell.innerHTML=Number(cell.innerHTML)+operand)
    //guesses = guesses.map(guess => guess+operand)
    guess.innerHTML = choose(guesses);
    //canGuess = true;
}


async function opRow1SeqPlay(){
    gover_dialog.open=false;
    let cells = Array.from(board.children);
    cells = cells.slice(0, 3);
    cells.forEach(cell=>cell.innerHTML = ".");
    let operand = choose([1,2,3,4,5,6,7,8,9]);
    for (let cell of cells){
        show(cell);
        let num = choose([1,2,3,4,5,6,7,8,9]);
        cell.innerHTML = num;
        guesses.push(num+operand);
        await wait(1000);
    }
        
    hideAll();
    cells.forEach(cell => cell.innerHTML = +cell.textContent + operand);
    let opElm = document.getElementById("operation")
    opElm.innerHTML = " + " + operand;
    show(opElm);
    await wait(1000);
    hide(opElm);
    guess.innerHTML = choose(guesses);
   // canGuess = true;
}

/*async function seqPlay(){
    gover_dialog.open=false;
    let cells = Array.from(board.children);
    cells.forEach(cell=>cell.innerHTML = ".");
    //canGuess = false;
    for (let cell of cells){
        show(cell);
        let num = choose([1,2,3,4,5,6,7,8,9]);
        cell.innerHTML = num;
        guesses.push(num);
        await wait(1000);
    }
    hideAll();
    
    guess.innerHTML = choose(guesses);
    //canGuess = true;
}
async function uniqSeqPlay(){
    gover_dialog.open=false;
    let cells = Array.from(board.children);
    cells.forEach(cell=>cell.innerHTML = ".");
   // canGuess = false;
    let numIndex = 0;
    let nums = shuffle([1,2,3,4,5,6,7,8,9])
    for (let cell of cells){
        show(cell);
        let num = nums[numIndex];
        numIndex++
        cell.innerHTML = num;
        guesses.push(num);
        await wait(1000);
    }
    hideAll();
    guess.innerHTML = choose(guesses);
   // canGuess = true;
}*/

let row1SeqPlayer = new Player(row1SeqPlay, 1);
let row1UniqSeqPlayer = new Player(row1UniqSeqPlay, 1, row1SeqPlayer);
let row1ContPlayer = new Player(row1ContPlay, 1, row1UniqSeqPlayer)
let row1RandSeqPlayer = new Player(row1RandSeqPlay, 1, row1ContPlayer);
let row1RandUniqSeqPlayer = new Player(row1RandUniqSeqPlay, 1, row1RandSeqPlayer)
let row1RandContPlayer = new Player(row1RandContPlay,1, row1RandUniqSeqPlayer )
let row1RandUniqContPlayer = new Player(row1RandUniqContPlay, 1, row1RandContPlayer)

let row2SeqPlayer = new Player(row2SeqPlay, 1, row1RandUniqContPlayer)
let row2UniqSeqPlayer = new Player(row2UniqSeqPlay, 1, row2SeqPlayer);
let row2ContPlayer = new Player(row2ContPlay, 1, row2UniqSeqPlayer);
let row2RandSeqPlayer = new Player(row2RandSeqPlay, 1, row2ContPlayer);
let row2RandUniqSeqPlayer = new Player(row2RandUniqSeqPlay, 1, row2RandSeqPlayer)
let row2RandContPlayer = new Player(row2RandContPlay, 1, row2RandUniqSeqPlayer);
let row2RandUniqContPlayer = new Player(row2RandUniqContPlay, 1, row2RandContPlayer)

let seqPlayer = new Player(seqPlay, 1, row2RandUniqContPlayer)
let uniqSeqPlayer = new Player(uniqSeqPlay, 1, seqPlayer);
let contPlayer = new Player(contPlay, 1, uniqSeqPlayer);
let randSeqPlayer = new Player(randSeqPlay, 1, contPlayer);
let randUniqSeqPlayer = new Player(randUniqSeqPlay, 1, randSeqPlayer)
let randContPlayer = new Player(randContPlay, 1, randUniqSeqPlayer);
let randUniqContPlayer = new Player(randUniqContPlay, 1, randContPlayer)

let opRow1SeqPlayer = new Player(opRow1SeqPlay, 1, randUniqContPlayer);



var currentPlayer = row1SeqPlayer;

function setUniformLimit(n, currPlayer){
    let player = currPlayer;
    while(player){
        player.limit = n;
        player = player.next;
    }
}
setUniformLimit(5, currentPlayer);
