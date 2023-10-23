let homeScore = 0
let newHomeScore = document.getElementById("home-score")

function addHomeOne(){
    homeScore += 1
    newHomeScore.innerText = homeScore
}

function addHomeTwo(){
    homeScore += 2
    newHomeScore.innerText = homeScore
}

function addHomeThree(){
    homeScore += 3
    newHomeScore.innerText = homeScore
}

let guestScore = 0
let newGuestScore = document.getElementById("guest-score")

function addGuestOne() {
    guestScore += 1
    newGuestScore.innerText = guestScore
}

function addGuestTwo() {
    guestScore += 2
    newGuestScore.innerText = guestScore
}

function addGuestThree() {
    guestScore += 3
    newGuestScore.innerText = guestScore
}

function resetScore() {
    guestScore = 0
    homeScore = 0
    newHomeScore.innerText = homeScore
    newGuestScore.innerText = guestScore
}