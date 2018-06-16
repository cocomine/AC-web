var downloading = false;

function skip() {
    var delayMillis = 5; //5 second
    var timelift = 1000; //1 sec
    
    if(downloading == false){
        downloading = true;
        timer();
    }
}

function timer(){
    if(delayMillis > 0){
        document.getElementById("wait").innerText="The download will start in "+delayMillis+" seconds...";
        delayMillis --;
        setTimeout(timer(),1000);
    }else{
        document.getElementById("wait").innerText="Start Downloading..";
        stat(FileName, link);
    }
}
