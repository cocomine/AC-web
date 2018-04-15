var refurl=document.referrer;
if(refurl.indexOf(Uplink)<0){ //here
	  if(show == 0){
    	location.replace(location.protocol+location.hostname+location.pathname+"?show=1");
		}
}

	if(show == 1){
		jQuery(function($){
			$("#access").remove();
			$("#access1").remove();
			$("#show").show();
		});
	}
