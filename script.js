var hitrn;      //bhar declare kiya hai cause we need to use it in "click" event listner (last part of code)

function display_bubble(){
    var clutter = "";
    var i=0;
    for(i=1; i<=176; i++){
        let rn = Math.floor(Math.random()*10);  /* Math.floor() --> removes decimal ; Math.random()*10 --> generates (1-10) random number */
        clutter +=  `<div class="bubble">${rn}</div>`;      
        /* backtick (``) use kiya hai so, humlog dynamic value string ke ander likh sakte hai using this --> ${var} */
    }
    document.querySelector("#pbtm").innerHTML = clutter;
}

function timer(){
    var timer = 60;
    var timer_interval = setInterval(function(){
        if(timer>=0){
            var timer_div = document.querySelector("#timerval");
            timer_div.innerHTML = timer-- ;     //har ek sec ka timer ki value minus 1 hogi 
        }
        else{
            clearInterval(timer_interval);
            document.querySelector("#pbtm").innerHTML = `<h1> Game Over </h1>`;
        }
    }, 1000);
    /* setInterval( ()==> {}, pause_time_before runnning_again);  this is know as arrow function,
     which is same as this--> setInterval(function(){}, pause_time(in millisec)_before runnning_again); */
}

function hit(){
    hitrn =  Math.floor(Math.random()*10);
    document.querySelector("#hitval").innerHTML=hitrn;
}


var score = 0;
function scoreadd(){
    score += 10;
    document.querySelector("#scoreval").innerHTML = score;
}



hit();  //hit div mai new value display karega
timer();        //time div mai new value display karega
display_bubble();       //new bubbles with new values show karega. 
document.querySelector("#pbtm").addEventListener("click",function(details){
    var elem = Number(details.target.innerHTML);
    console.log(elem);
    if(elem==hitrn){
        scoreadd();     //if mathced increase value by 10
        hit();      //referesh hit number
        display_bubble();       //refresh all bubbles
    }
});



