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
		getlist("https://cocopixelmc.com/releaseAPI/ban?type=bans", "#bans")
	});
	
	$("span[data-anchor='mutes']").click(function(){
		getlist("https://cocopixelmc.com/releaseAPI/ban?type=mutes", "#mutes")
	});
	
	$("span[data-anchor='warnings']").click(function(){
		getlist("https://cocopixelmc.com/releaseAPI/ban?type=warnings", "#warnings")
	});
	
	$("span[data-anchor='kicks']").click(function(){
		getlist("https://cocopixelmc.com/releaseAPI/ban?type=kicks", "#kicks")
	});
});

function getlist(link, id){
	jQuery(function($) {
		var xhr = new XMLHttpRequest();
		xhr.onload = function (){
			var response = this.responseText;
			$(id).html(response);
		}
		xhr.open("GET", link);
		xhr.send(null)
	});
}
