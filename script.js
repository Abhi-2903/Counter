const increase = document.getElementById('increment');
let reset = document.getElementById('reset');
let decrease = document.getElementById('decrement');
let counter = document.getElementById('displays');
let count=0;

increase.onclick = function(){
    count++;
    counter.textContent=count;
}
decrease.onclick = function(){
    count--;
    counter.textContent=count;
}
reset.onclick = function(){

    counter.textContent=0;
}