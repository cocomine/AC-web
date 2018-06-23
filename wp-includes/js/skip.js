var downloading = false;
var delayMillis = 5; //5 second

function skip() {
    if(downloading == false){
        downloading = true;
        timer();
    }
}

function timer(){
    setTimeout(function () {
        document.getElementById("wait").innerText="The download will start in 5 seconds...";
        setTimeout(function () {
            document.getElementById("wait").innerText="The download will start in 4 seconds...";
            setTimeout(function () {
                document.getElementById("wait").innerText="The download will start in 3 seconds...";
                setTimeout(function () {
                    document.getElementById("wait").innerText="The download will start in 2 seconds...";
                    setTimeout(function () {
                        document.getElementById("wait").innerText="The download will start in 1 seconds...";
                        setTimeout(function () {
                            document.getElementById("wait").innerText="Start Downloading..";
                            stat(FileName, link);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}
