/**
 * Create with Minecraft Coco
 * 29/5/2018 18:48
 */

jQuery(function($){
	$("#confirm").click(function() {
		name = $("#Name_input").val();
		check();
	});
	$("input").keydown(function (event) {
        if (event.which == 13) {
			name = $("#Name_input").val();
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
		
		var xhr = new XMLHttpRequest();
		xhr.onload = function (){
			if(this.status == 200){
				var text = this.responseText;
				$("#show_here").html(text);
			}else{
				$("#show_here").html("<h3>你所輸入的玩家名稱不存在</h3>");
			}
			$("#londing").hide();
		};
		xhr.open("GET", "https://cocopixelmc.com/releaseAPI/ban?type=log&q="+name);
		xhr.send(null);
		
	});
}