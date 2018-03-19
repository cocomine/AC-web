var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var voide;

function onPlayerStateChange(event) {
    jQuery(function($) {
        if(event.data == YT.PlayerState.PLAYING){
            $('#voide').animate({borderColor:"#81d742"},500);

        }else if(event.data == YT.PlayerState.PAUSED){
            $('#voide').animate({borderColor:'#dd9933'},500);

        }else if(event.data == YT.PlayerState.ENDED){
            $('#voide').animate({borderColor:'#dd3333'},500);

        }else if(event.data == YT.PlayerState.BUFFERING){
            $('#voide').animate({borderColor:'#1e73be'},500);
        }
    });
}