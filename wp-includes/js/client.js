/**
 * Create with Minecraft Coco
 * 24/5/2018 23:02
 */
 
jQuery(function($) {
	$("#confirm").click(function(){
		var name = $("#Name_input").val();
		window.location = "/log?q="+name;
	});
	$("input").keydown(function (event) {
		if (event.which == 13) {
			var name = $("#Name_input").val();
			window.location = "/log?q="+name;
		}
	});
	
	$("span[data-anchor='bans']").click(function(){
		var xhr = new XMLHttpRequest();
		xhr.onload = function (){
			var response = this.responseText;
			$("#bans").html(response);
		}
		xhr.open("GET", "https://cocopixelmc.com/releaseAPI/ban?type=bans");
		xhr.send(null);
	});
	
	$("span[data-anchor='mutes']").click(function(){
		var xhr = new XMLHttpRequest();
		xhr.onload = function (){
			var response = this.responseText;
			$("#mutes").html(response);
		}
		xhr.open("GET", "https://cocopixelmc.com/releaseAPI/ban?type=mutes");
		xhr.send(null);
	});
	
	$("span[data-anchor='warnings']").click(function(){
		var xhr = new XMLHttpRequest();
		xhr.onload = function (){
			var response = this.responseText;
			$("#warnings").html(response);
		}
		xhr.open("GET", "https://cocopixelmc.com/releaseAPI/ban?type=warnings");
		xhr.send(null);
	});
	
	$("span[data-anchor='kicks']").click(function(){
		var xhr = new XMLHttpRequest();
		xhr.onload = function (){
			var response = this.responseText;
			$("#kicks").html(response);
		}
		xhr.open("GET", "https://cocopixelmc.com/releaseAPI/ban?type=kicks");
		xhr.send(null);
	});
});