window.onload=autoDL;
var done=false;
	
jQuery(function($){	
	//resize
	$(window).resize(function() {
		if(dl==1){
			var a = $("#read").offset().top;
			if(a >= $(window).scrollTop() && a+188 < ($(window).scrollTop() + $(window).height())){
				$("#read").position({
					my: "center bottom",
					at: "center top",
					of: "#fist"
				});
			}
		
			var b = $("#clickhere").offset().top;
			if(b >= $(window).scrollTop() && b+200 < ($(window).scrollTop() + $(window).height())){
			$("#clickhere").position({
				my: "right+20px bottom+15px",
				at: "left top",
				of: "#DLlink"
				});
			}
		}
	});
	
	$(window).scroll(function() {
		if(dl==1){
			var a = $("#read").offset().top;
			if(a >= $(window).scrollTop() && a+188 < ($(window).scrollTop() + $(window).height())){
				$("#read").position({
					my: "center bottom",
					at: "center top",
					of: "#fist"
				});
			}
			
			var b = $("#clickhere").offset().top;
			if(b >= $(window).scrollTop() && b+200 < ($(window).scrollTop() + $(window).height())){
			$("#clickhere").position({
				my: "right+20px bottom+15px",
				at: "left top",
				of: "#DLlink"
				});
			}
		}
	});
});

function autoDL(){
	jQuery(function($){
		var height = window.screen.height;
		var width = window.screen.width;
		if(dl==1 && height>=768 && width>=1024){
			$("#DLlink").attr("href", $("#DLlink").attr("href")+"?dl=1");
			
			var target = $(this.hash);
			target = target.length ? target : $('[name=here]');
			$('html, body').animate({
				scrollTop: target.offset().top-300
			}, 1000, "easeInOutCubic", 
			(function(){
				$("#read").position({
					my: "center bottom",
					at: "center top",
					of: "#fist"
				});
				$("#read").show("fade", 1500,
				(function(){
					$("#clickhere").position({
						my: "right+20px bottom+15px",
						at: "left top",
						of: "#DLlink"
					});
					$("#clickhere").show("fade", 1500);
					done=true;
				}));
			}));
		}else{
			if(dl == 1){
				alert("This feature can't work on phone!");
			}
			dl=0;
		}
	});
}