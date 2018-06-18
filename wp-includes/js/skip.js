var downloading = false;
var delayMillis = 5; //5 second

function skip() {
    if(downloading == false){
        downloading = true;
        timer();
    }
}

function timer(){
    if(delayMillis != 0){
        document.getElementById("wait").innerText="The download will start in "+delayMillis+" seconds...";
        delayMillis = delayMillis-1;
        setTimeout(timer(),1000);
    }else{
        document.getElementById("wait").innerText="Start Downloading..";
        stat(FileName, link);
    }
}
