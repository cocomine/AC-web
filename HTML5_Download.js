//downloadFile
function downloadFile(url, size, success) {
    jQuery(function($){
            var xhr = new XMLHttpRequest(); 
        
            $('#bar-text').text("Downloading...")
            $('#bar').progressbar("value", 0);
            
            xhr.open('GET', url, true); 
            xhr.responseType ="blob";
            xhr.onreadystatechange = function () { 
                if (xhr.readyState == 4) {
                    if (success) success(xhr.response);
                }
            };
            
            xhr.onprogress = function(e) {
                var loaded = e.loaded;
                
                var value = 100*loaded/size;
                $('#bar-text').text("Downloading...   "+parseInt(value)+"%");
                $('#bar').progressbar("value", loaded);
                
            };
            xhr.send(null);
    });
}

//getfilesize
function get_filesize(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("HEAD", url, true); // Notice "HEAD" instead of "GET",
                                 //  to get only the header
    xhr.onreadystatechange = function() {
        if (this.readyState == this.DONE) {
            callback(parseInt(xhr.getResponseHeader("Content-Length")));
        }
    };
    xhr.send();
}

//FileSystem API

    window.requestFileSystem = window.webkitRequestFileSystem || window.requestFileSystem;
    window.storageInfo = window.webkitStorageInfo || window.storageInfo;

    //Request access to the file system
    var fileSystem = null//DOMFileSystem instance
    , fsType = TEMPORARY//PERSISTENT vs. TEMPORARY storage 
    , fsSize = 10 * 1024 * 1024//size (bytes) of needed space 
    ;

    window.storageInfo.requestQuota(fsType, fsSize, function(gb) {
        window.requestFileSystem(fsType, gb, function(fs) {
            fileSystem = fs;
        }, errorHandler);
    }, errorHandler);


//stat
function stat(Name, url) {
    jQuery(function($){
        $('#bar').progressbar("value", false);
        $('#bar-text').text("Loading...");
        
        get_filesize(url, function(size) {
            $('#bar').progressbar("option", "max", size);
            
            downloadFile(url, size, function(blob) {
                saveAs(blob, Name);
                $('#bar-text').text("Download Complete!");
                document.getElementById("bgMusic").play();
                window.location.replace("https://animationcloud.cocopixelmc.com/thx?link="+Uplink);
            });
        });
    });
};

//errorHandler
function errorHandler(e) {
    var msg = '';

    switch (e.code) {
        case FileError.QUOTA_EXCEEDED_ERR:
        msg = 'QUOTA_EXCEEDED_ERR';
        break;
        case FileError.NOT_FOUND_ERR:
        msg = 'NOT_FOUND_ERR';
        break;
        case FileError.SECURITY_ERR:
        msg = 'SECURITY_ERR';
        break;
        case FileError.INVALID_MODIFICATION_ERR:
        msg = 'INVALID_MODIFICATION_ERR';
        break;
        case FileError.INVALID_STATE_ERR:
        msg = 'INVALID_STATE_ERR';
        break;
        default:
        msg = 'Unknown Error';
        break;
    };
    $('#bar-text').text("Download Error!");
    console.log('Error: ' + msg);
}