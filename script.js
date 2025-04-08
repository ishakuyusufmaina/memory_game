//localStorage.setItem("highestScore", 0);
const playData = JSON.parse(localStorage.getItem("playData"));
/*const playData = {
    substandardLevel: 4,
    standardLevel: 2,
    score: 0
}*/
var scores = 0;

//var currentPlayer;
var currentLevel = 1;
const events = {
    onGameover: (level, score)=>{}
} 

const elmById = id=>document.getElementById(id);

//currentLevel = Number(localStorage.getItem("level"));
function setPlayerByLevel (level){
    while (level != currentPlayer.level) {
        currentPlayer = currentPlayer.next;
        if (!currentPlayer) {
            alert("an error occured, please report to Maina");
            break;
        }
        console.log(currentPlayer.level)
    }
}



function randint(low, high) {
    let num = Math.random();
    num = num*high + 1;
    num = Math.floor(num);
    if(num < low)
    num =  randint(low, high);
    return num
}
  

function choose(arr){
    function getRandomInt(start, end) {
        return Math.floor(Math.random() * (end - start + 1)) + start;
    }
    let randIndex = getRandomInt(0, arr.length-1);
    return arr[randIndex];
}

function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
    }
    return arr;
}


function show(elm){
    elm.classList.add("show");
    //click.click();
}


function hideAll(){
    let nodes = Array.from(board.children);
    nodes.forEach(node=> node.classList.remove("show"));
}
  
let guesses = [];
let nodes = board.children;
//modified on 26/Mar/2025
Array.from(nodes).forEach(node => node.classList.add("cell"));

const resolveClick = async cell =>{
    let conti = true;
    show(cell);
    await wait(1000);
    if (cell.textContent == guess.textContent) {
        scores++;
        correct_status.classList.add("show");
        correct_status.classList.remove("show");
        guesses = [];
        hideAll();
        //await play();
        guess.innerHTML = "";
        return conti;
    } else {
        Array.from(nodes).forEach(node=>show(node))
        await wait(1000);
        return false;
    }
}



//click.onclick= e=> e.target.play();

async function resolveGameOver(){
    let actionBtns = [replayBtn];
    gover_dialog.open = true;
    return new Promise(resolve=>actionBtns.forEach(btn=>btn.onclick=e=>{
        gover_dialog.open = false;
        resolve(e)
    }))
}
  
async function play(){
    //uniqSeqPlay(); return;
    hideAll();
    guesses = [];
    guess.innerHTML = "";
     let cells = Array.from(board.children)
    cells.forEach(cell=>cell.innerHTML = "");
    let limit = currentPlayer.limit;
    score.innerHTML = `${limit}/${scores}`;
    if (scores >= limit){
        currentPlayer = currentPlayer.next;
        scores = 0;
        //localStorage.setItem("highestScore", 0);
    }
    if (currentPlayer) {
        if (currentPlayer.level > playData.standardLevel){
            save.style.display = "inline-block";
        }
        elmById("level").innerHTML = currentPlayer.level;
        //console.log(currentPlayer.level)
        score.innerHTML = `${scores}/${currentPlayer.limit}`;
        await currentPlayer.play();
        let cellClicked = await new Promise(resolve =>cells.forEach(cell=>cell.onclick=e=>resolve(cell)));
        let conti = await resolveClick(cellClicked);
        if (conti)
        await play();
        else {//game over
            events.onGameover();
            conti = await resolveGameOver();
            if (conti) {
                scores = 0;
                await play();
            }
        }
    }
    else {
        document.body.innerHTML = `
        <h2>Congratulations!</h2>
        Your working memory has superceded 
        our memory game. But then, this is not 
        the ultimate end of the journey of training and testing your memory. 
        More advanced levels are on their way coming soon. 
        Stay tune! <hr>
        Kind regard,
        <br><small>~Maina</small><br>
        <a href="entry.html">HOME</a>
        `;
    }
}

const countdownElement = document.getElementById("countdown");
async function countDown(count){
    if (count){
        countdownElement.textContent = count;
        await wait(1000);
        await countDown(count-1);
    } else {
        countdownElement.style.display = "none"
        //await play();
    }
}
//await countDown(3);
async function wait(t){ return new Promise(resolve => setTimeout(_=>resolve(t), t)) }

async function init(db, doc, setDoc, onAuthStateChanged, auth){
    let user = JSON.parse(localStorage.getItem("user"));
    let email = user.email;
    let name = user.displayName;
    scores = playData.score;
    let currentLevel = playData.substandardLevel;
   setPlayerByLevel(+currentLevel);
    await countDown(3);
     play();
    
   // onAuthStateChanged(auth, u=> if (!u) window.location.href="signin.html");
   document.getElementById("save").onclick = async e =>{
       let level = currentPlayer.level;
       let score = scores;
       e.target.innerHTML = "saving...";
       e.target.disabled = true;
       await setDoc(doc(db, "players", email), {
           email: email,
           name: name,
           level: level,
           score: score
       });
       playData.standardLevel = level;
       playData.substandardLevel = level;
       playData.score = scores;
       localStorage.setItem("playData", JSON.stringify(playData));
       e.target.innerHTML = "saved!";
       setTimeout(()=>{e.target.disabled = false; e.target.innerHTML = "save"; e.target.style.display="none"}, 2000)
   }
}

//await init();
