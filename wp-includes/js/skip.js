var downloading = false;
var delayMillis = 5; //5 second

function skip() {
    if(downloading == false){
        downloading = true;
        timer();
    }
}

function timer(){
    for(i=0;i<6;i++){
        document.getElementById("wait").innerText="The download will start in "+i+" seconds...";
        delayMillis = delayMillis-1;
        setTimeout(timer(),1000);
    }
    document.getElementById("wait").innerText="Start Downloading..";
    stat(FileName, link);
}
