var playData = localStorage.getItem("playData");
playData= (playData)? JSON.parse(playData) : {
    substandardLevel: 1,
    standardLevel: 1,
    score: 0
    }
   // localStorage.setItem("playData", JSON.stringify
//}
async function init(db, doc, runTransaction, auth={}, onAuthStateChanged){
    let promisedUser = new Promise(resolve=>onAuthStateChanged(auth, user=> resolve(user)))
    let user = await promisedUser;
    if (!user){
        window.location.href = "signin.html";
        return;
    }
    
    //at this level, there exists a user
    localStorage.setItem("user", JSON.stringify(user));
    let email =  user.email;
    let name = user.displayName;
  //  user = JSON.parse(localStorage.getItem("user"));
   // alert(user.email);
    const levelSelect = document.getElementById("level");
    document.getElementById("username").innerHTML = name;
    levelSelect.innerHTML = "<option>Please wait...</option>";
    const playBtnLabel = document.getElementById("play").innerHTML;
    document.getElementById("play").innerHTML = "...";
    document.getElementById("play").disabled = true;
    const globalPlayData = await runTransaction(db, async transaction=>{
        let playDoc = await transaction.get(doc(db, "players", email));
        if (!playDoc.exists())
        transaction.set(doc(db, "players", email), {
            email: email,
            name: name,
            level: 1,
            score: 0
        });
        return playDoc.data();
    }); 
    playData.standardLevel = +globalPlayData.level;
    playData.substandardLevel = +globalPlayData.level;
    playData.score = +globalPlayData.score;
    localStorage.setItem("playData", JSON.stringify(playData));
    onAuthStateChanged(auth, user=> {if (!user) window.location.href = "signin.html"})
    presentLevelSelection();
    
    
    function presentLevelSelection(){
        let level = playData.standardLevel;
        let currLevel = playData.substandardLevel;
        levelSelect.innerHTML = "";
        for (let i=1; i<=level; i++){
            let option = document.createElement("option");
            option.innerHTML = "Level " + i;
            levelSelect.appendChild(option);
            option.value = i;
        }
        levelSelect.onchange = e=> {
            let substdLevel = levelSelect.value;
            playData.substandardLevel = Number(substdLevel);
            localStorage.setItem("playData", JSON.stringify(playData));
        }
        document.getElementById("play").innerHTML = playBtnLabel;
        document.getElementById("play").disabled = false;
        document.getElementById("play").onclick = ()=>{
            //localStorage.setItem("level", level.value);
            window.location.href = "v1.html"; // Change this to your game page
    }
        let selectedIndex = (currLevel)? currLevel-1 : 0
        levelSelect.children[selectedIndex].selected = true;
    }
}

//init();

/*
dLevel: 1,
    standardLevel: 1,
    score: 0
    }
   // localStorage.setItem("playData", JSON.stringify
//}
async function init(db, doc, runTransaction, auth={}, onAuthStateChanged){
    let promisedUser = new Promise(resolve=>onAuthStateChanged(auth, user=> resolve(user)))
    let user = await promisedUser;
    if (!user){
        window.location.href = "signin.html";
        return;
    }
    
    //at this level, there exists a user
    localStorage.setItem("user", JSON.stringify(user));
    let email =  user.email;
    let name = user.displayName;
  //  user = JSON.parse(localStorage.getItem("user"));
   // alert(user.email);
    const levelSelect = document.getElementById("level");
    document.getElementById("username").innerHTML = name;
    levelSelect.innerHTML = "<option>Please wait...</option>";
    const playBtnLabel = document.getElementById("play").innerHTML;
    document.getElementById("play").innerHTML = "...";
    document.getElementById("play").disabled = true;
    const globalPlayData = await runTransaction(db, async transaction=>{
        let playDoc = await transaction.get(doc(db, "players", email));
        if (!playDoc.exists())
        transaction.set(doc(db, "players", email), {
            email: email,
            name: name,
            level: 1,
            score: 0
        });
        return playDoc.data();
    }); 
    playData.standardLevel = +globalPlayData.level;
    playData.score = +globalPlayData.score;
    localStorage.setItem("playData", JSON.stringify(playData));
    onAuthStateChanged(auth, user=> {if (!user) window.location.href = "signin.html"})
    presentLevelSelection();
    
    
    function presentLevelSelection(){
        let level = playData.standardLevel;
        let currLevel = playData.substandardLevel;
        levelSelect.innerHTML = "";
        for (let i=1; i<=level; i++){
            let option = document.createElement("option");
            option.innerHTML = "Level " + i;
            levelSelect.appendChild(option);
            option.value = i;
        }
        levelSelect.onchange = e=> {
            let substdLevel = levelSelect.value;
            playData.substandardLevel = Number(substdLevel);
            localStorage.setItem("playData", JSON.stringify(playData));
        }
        document.getElementById("play").innerHTML = playBtnLabel;
        document.getElementById("play").disabled = false;
        document.getElementById("play").onclick = ()=>{
            //localStorage.setItem("level", level.value);
            window.location.href = "v1.html"; // Change this to your game page
    }
        let selectedIndex = (currLevel)? currLevel-1 : 0
        levelSelect.children[selectedIndex].selected = true;
    }
}

//init();
*/
