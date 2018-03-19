var downloading = false;

function skip() {
jQuery(function($){
    var delayMillis = 5000; //5 second
    var timelift = 1000; //1 sec
    
 if(downloading == false){
    downloading = true;
    document.getElementById("wait").innerText="The download will start in 5 seconds...";
    
    setTimeout(function() {
        document.getElementById("wait").innerText="The download will start in 4 seconds...";
        
        setTimeout(function() {
            document.getElementById("wait").innerText="The download will start in 3 seconds...";
            
            setTimeout(function() {
                document.getElementById("wait").innerText="The download will start in 2 seconds...";
                
                setTimeout(function() {
                    document.getElementById("wait").innerText="The download will start in 1 seconds...";
                    
                    setTimeout(function() {
                        document.getElementById("wait").innerText="Downloading..";
                        stat(FileName, link);
                    }, timelift);
    
                }, timelift);
    
            }, timelift);
    
        }, timelift);
    
    }, timelift);
 }
});
}