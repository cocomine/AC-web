jQuery(function($) {
	//topic
	$("#Topic").dialog({
		autoOpen: false,
		dialogClass: "for-topic",
		width: 312,
		draggable: false,
		minHeight: 0,
		resizable: false,
		show:{
			effect: "drop",
			duration: 500,
			direction: "left"
		},
		hide: {
			effect: "drop",
			duration: 500,
			direction: "left"
		},
		position:{
			my: "left+20px bottom-20px",
			at: "left bottom",
		}
	});
	//topic2
	$("#Topic2").dialog({
		autoOpen: false,
		dialogClass: "for-topic",
		width: 363,
		draggable: false,
		minHeight: 0,
		resizable: false,
		show:{
			effect: "drop",
			duration: 500,
			direction: "left"
		},
		hide: {
			effect: "drop",
			duration: 500,
			direction: "left"
		},
		position:{
			my: "left+20px bottom-20px",
			at: "left bottom",
		}
	});
	//help
	$("#Help").dialog({
		autoOpen: false,
		dialogClass: "for-help",
		modal: true,
		width: 350,
		draggable: false,
		show:{
			effect: "drop",
			duration: 500,
			direction: "down"
		},
		hide: {
			effect: "drop",
			duration: 500,
			direction: "down"
		},
		buttons: [{
			text: "OK",
			click: function() {
				$(this).dialog("close");
			}
		}]
	});
	
	//open
	$("#opener").click(function() {
		$("#Help").dialog("open");
		$("#Topic").dialog("close");
		$("#onesignal-bell-container").show("fade");
		last();
	});
	
	//close
	$("#closeer").click(function() {
		$("#Topic").dialog("close");
		$("#onesignal-bell-container").show("fade");
		last();
	});
	
	//last
	$("#last").click(function() {
		$("#Topic2").dialog("close");
		location.replace(Uplink+"?dl=1");
	});
	$("#last-clo").click(function() {
		$("#Topic2").dialog("close");
		$("#onesignal-bell-container").show("fade");
	});
	
	//show help
	setTimeout(function() {
		if(downloading == false && show == 0){
			$("#Topic").dialog('open');;
			$("#onesignal-bell-container").hide("fade");
		}
	}, 30000);
	
	//resize
	$(window).resize(function() {
		$("#Topic").dialog("option", "position", {my: "left+20px bottom-20px", at: "left bottom", of: window});
		$("#Topic2").dialog("option", "position", {my: "left+20px bottom-20px", at: "left bottom", of: window});
		
		if(dl==1){
			var a = $("#clickhere").offset().top;
			if(a >= $(window).scrollTop() && a+200 < ($(window).scrollTop() + $(window).height())){
				//console.log("work resize");
				$("#clickhere").position({
					my: "right+15px bottom+15px",
					at: "left top",
					of: "#execute-request-button"
				});
			}
		}
	});
	
	//scroll
	$(window).scroll(function() {
		if(dl==1){
			var a = $("#clickhere").offset().top;
			if(a >= $(window).scrollTop() && a+200 < ($(window).scrollTop() + $(window).height())){
				//console.log("work scroll:"+a+","+$(window).scrollTop()+","+($(window).scrollTop() + $(window).height()));
				$("#clickhere").position({
					my: "right+15px bottom+15px",
					at: "left top",
					of: "#execute-request-button"
				});
			}
		}
	});
});

////////////////////////////////////////////

function last(){
	jQuery(function($){
		setTimeout(function() {
			if(downloading == false){
				$("#Topic2").dialog('open');;
				$("#onesignal-bell-container").hide("fade");
			}
		}, 30000);
	});
}

//////////////////////////////////////////
window.onload=autoDL;
			
function autoDL(){
	jQuery(function($){
		var height = window.screen.height;
		var width = window.screen.width;
		if(dl == 1 && show == 0 && height>=768 && width>=1024){
			var target = $(this.hash);
			target = target.length ? target : $('#execute-request-button');
			$('html, body').animate({
				scrollTop: target.offset().top-500
			}, 1000, "easeInOutCubic", (function(){
				$("#clickhere").position({
					my: "right+15px bottom+15px",
					at: "left top",
					of: "#execute-request-button"
				});
				$("#clickhere").show("fade", 1500);
			}));
		}else{
			if(show == 0 && dl == 1){
				alert("This feature can't work on phone!");
			}
			dl=0;
		}
	});
}
