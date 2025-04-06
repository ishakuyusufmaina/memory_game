var playData = localStorage.getItem("playData");
playData = playData? JSON.parse(playData) : {
    substandardLevel: 1,
    standardLevel: 5,
    score: 0
}
async function init(db, doc, runTransaction, auth={}, onAuthStateChanged){
    let promisedUser = new Promise(resolve=>onAuthStateChanged(auth, user=> resolve(user)))
    let user = await promisedUser;
    /*if (!user){
        window.location.href = "signin.html";
        return;
    }*/
    
    //at this level, there exists a user
    let email =  "email"//user.email;
    let name = "name"//user.displayName;
    let globalPlayData = await runTransaction(db, async transaction=>{
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
    onAuthStateChanged(auth, user=> {if (!user) window.location.href = "signin.html"})
    presentLevelSelection();
    
    
    function presentLevelSelection(){
        let level = playData.standardLevel;
        let currLevel = playData.substandardLevel;
        let levelSelect = document.getElementById("level");
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
        levelSelect.children[currLevel-1].selected = true;
    }
}

//init();
