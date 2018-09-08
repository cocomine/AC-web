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
		$(id).html("<img src='https://i0.wp.com/cocopixelmc.com/wp-content/plugins/wp-support-plus-responsive-ticket-system/asset/images/ajax-loader@2x.gif?w=1170&amp;ssl=1' alt='Please Wait' width='80' height='80' />");
		var xhr = new XMLHttpRequest();
		xhr.onload = function (){
			var response = this.responseText;
			$(id).html(response);
		}
		xhr.open("GET", link);
		xhr.send(null)
	});
}
