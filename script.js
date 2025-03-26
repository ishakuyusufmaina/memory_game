function randint(low, high) {
    let num = Math.random();
    num = num*high + 1;
    num = Math.floor(num);
    if(num < low)
    num =  randint(low, high);
    return num
}
  
function choose(arr, start){
    start = (start)? start : 0;
    let randIndex = randint(start, arr.length);
    return arr[randIndex-1];
}
  
let timerId;
function countup(count, limit, oncount, oncountLimit){
    if (count < limit) {
      oncount(count);
      timerId= setTimeout(()=>{
          countup(count+1, limit, oncount, oncountLimit)}, 1000);
    } else {
        clearTimeout(timerId);
        oncountLimit();
    }
}

function show(elm){
    elm.classList.add("show");
}

function hideAll(){
    let nodes = Array.from(board.children);
    nodes.forEach(node=> node.classList.remove("show"));
}
  
let guesses = [];
let scores = 0;
let canGuess = false;
let highestScore = localStorage.getItem("highestScore");
hScore.innerHTML = (highestScore)? highestScore : 0;
let nodes = board.children;
//modified on 26/Mar/2025
Array.from(nodes).forEach(node => node.classList.add("cell"));
let size = nodes.length;
for (let i=0; i<size; i++){
    nodes[i].onclick = (e)=>{
        if (!canGuess) return;
        canGuess = false;
        clearTimeout(timerId);
        show(e.target);
        if (e.target.textContent == guess.textContent) {
            scores++;
            score.innerHTML = scores;
            correct_status.classList.add("show");
            setTimeout(_=> correct_status.classList.remove("show"), 1000);
            guesses = [];
            if (scores > +hScore.textContent){
                highestScore = scores;
                localStorage.setItem("highestScore", highestScore);
                hScore.innerHTML = localStorage.getItem("highestScore");
            }
            timerId= setTimeout(()=>{
                hideAll();
                play();
                canGuess=false;
                guess.innerHTML = "";
            }, 1000);
        } else {
            timerId = setTimeout(()=>{
                clearTimeout(timerId);
                tscore.innerHTML = scores;
                gover_dialog.open = true;
            }, 1000);
        }
    };
}
   
  
replayBtn.onclick = ()=>{
    hideAll();
    guesses = [];
    scores= 0;
    score.innerHTML = scores;
    guess.innerHTML = "";
    play();
}
    
    
  
function play(){
    gover_dialog.open=false;
    countup(0, board.children.length, (i)=>{
        show(board.children[i]);
        let num = choose([1,2,3,4,5,6,7,8,9])
        board.children[i].innerHTML = num;
        guesses.push(num);
    }, ()=>{
        hideAll();
        guess.innerHTML = choose(guesses);
        canGuess = true;
    });
    canGuess = false;
}

//setTimeout(_=>play(), 1000);



let count = 3;
        const countdownElement = document.getElementById("countdown");

        const countdownInterval = setInterval(() => {
            count--;
            if (count >= 0) {
                countdownElement.textContent = count;
            }
            if (count < 0) {
                clearInterval(countdownInterval);
                countdownElement.style.display = "none"; // Hide countdown after reaching 0
                // You can trigger the game start here
                play()
            }
        }, 1000);