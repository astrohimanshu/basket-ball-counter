let count=0
function plus1(){
    count+=1
    document.getElementById("score-home").textContent=count
}
function plus2(){
    count+=2
    document.getElementById("score-home").textContent=count
}
function plus3(){
    count+=3
    document.getElementById("score-home").textContent=count
}
let countGuest=0
function plus1Guest(){
    countGuest+=1
    document.getElementById("score-guest").textContent=countGuest
}
function plus2Guest(){
    countGuest+=2
    document.getElementById("score-guest").textContent=countGuest
}
function plus3Guest(){
    countGuest+=3
    document.getElementById("score-guest").textContent=countGuest
}