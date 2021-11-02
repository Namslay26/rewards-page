let countEl = document.getElementById("countel");
console.log(countEl);
let points = 0;
function increment(){
    points=points+1;
    countEl.innerText=points;

}
function decrement(){
    if (points >=0){
        points=points-1;
        countEl.innerText=points;}
    
}
function reset(){
    countEl.innerText=0;
}