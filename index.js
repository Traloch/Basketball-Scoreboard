let homeScore = 0;
let guestScore = 0;

//Function to highlight current leader
function highlightLeader(){
    if (homeScore > guestScore){
        let element1 = document.getElementById('team1');
        element1.style.fontSize = "45px";
        element1.style.color = "red";
        let element2 = document.getElementById('team2');
        element2.style.fontSize = "40px";
        element2.style.color = "#EEEEEE";
    }
    
    if (guestScore > homeScore){
        let element2 = document.getElementById('team2');
        element2.style.fontSize = "45px";
        element2.style.color = "red";
        let element1 = document.getElementById('team1');
        element1.style.fontSize = "40px";
        element1.style.color = "#EEEEEE";
    }
    
        if (homeScore == guestScore){
        let element1 = document.getElementById('team1');
        element1.style.fontSize = "40px";
        element1.style.color = "#EEEEEE";
        let element2 = document.getElementById('team2');
        element2.style.fontSize = "40px";
        element2.style.color = "#EEEEEE";
        }
    }

//Points increment with button
function add(num, Id) {
    let sumEl = document.getElementById(Id)
    
    //Add points to score
    if (Id == 'score-home'){
        homeScore += num;    
        sumEl.textContent = homeScore
    } 
    if (Id == 'score-guest'){
        guestScore += num;    
        sumEl.textContent = guestScore
    } 
    //Check if leader has changed
    highlightLeader()    
}

//Reset score for new game
function newGame(){
    let sumHome = document.getElementById('score-home');
    let sumGuest = document.getElementById('score-guest');
    homeScore = 0;
    guestScore = 0;
    sumHome.textContent = homeScore;
    sumGuest.textContent = guestScore;  
    highlightLeader()    
}
