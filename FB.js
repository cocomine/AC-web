window.fbAsyncInit = function() {
    FB.AppEvents.logPageView();
    FB.Event.subscribe('edge.create', function(response) {
        document.getElementById("wait").innerText="Downloading...";
        if(downloading == false){
            stat(FileName, link);
            downloading = true;
        }
    });
    FB.Event.subscribe('edge.remove', function(response) {
        alert("Plz Like~~~  :(");
        alert("Push the like button to download Free template.");
    });
};