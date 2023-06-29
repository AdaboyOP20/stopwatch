
let ten, sec, d_ten, my_interval;
ten = 0;
function tick(){
    ten++;
    sec = Math.round(ten/100);
    d_ten = Math.round(ten%100);
    document.getElementById('timer').textContent = sec +":"+ d_ten;

}

function start_fn(){
    my_interval = setInterval(tick, 10);
}

function stop_fn(){
    clearInterval(my_interval);
}

function reset_fn(){
    ten = 0;
    sec = 0;
    d_ten = 0;
    TimeRanges.textContent = "00:00";
}

start_button.onclick = start_fn;
stop_button.onclick = stop_fn;
reset_button.onclick = reset_fn;