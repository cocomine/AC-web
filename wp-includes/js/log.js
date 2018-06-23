/**
 * Create with Minecraft Coco
 * 29/5/2018 18:48
 * Updata: 16/6/2018 18:57
 */
var disabled = false;
jQuery(function($){
	
	$("#confirm").click(function() {
		name = $("#Name_input").val();
		window.history.pushState({},0,"https://cocopixelmc.com/ban/log/?q="+name);//set url
		check();
	});
	$("input").keydown(function (event) {
        	if (event.which == 13 && disabled == false) {
			name = $("#Name_input").val();
			window.history.pushState({},0,"https://cocopixelmc.com/ban/log/?q="+name);//set url
			check();
		}
	});
});

if(name != 'null'){
	check();
}

function check(){
	jQuery(function($){
		$("#londing").show();
		$("#confirm").prop('disabled', true);
		disabled = true;
		
		var xhr = new XMLHttpRequest();
		xhr.onload = function (){
			if(this.status == 200){
				var text = this.responseText;
				$("#show_here").html(text);
			}else{
				$("#show_here").html("<h3>你所輸入的玩家名稱不存在</h3>");
			}
			$("#londing").hide();
			$("#confirm").prop('disabled', false);
			disabled = false;
		};
		xhr.open("GET", "https://cocopixelmc.com/releaseAPI/ban?type=log&q="+name);
		xhr.send(null);
		
	});
}
