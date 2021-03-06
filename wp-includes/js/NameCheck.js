/**
 * Create with Minecraft Coco
 * 16/5/2018 20:00
 */
var disabled = false;
var name = null;
jQuery(function($) {
	
	$("#confirm").click(function() {
		$("#londing").show();
		$("#confirm").prop('disabled', true);
		disabled = true;
		name = $("#Name_input").val();
		window.history.pushState({},0,"https://cocopixelmc.com/name-check/?q="+name);//set url
		check();
	});
	$("input").keydown(function (event) {
        if (event.which == 13 && disabled == false) {
        	$("#londing").show();
		$("#confirm").prop('disabled', true);
		disabled = true;
		name = $("#Name_input").val();
		window.history.pushState({},0,"https://cocopixelmc.com/name-check/?q="+name);//set url
		check();
        }
    });
});


function check(){
	jQuery(function($) {
		
		var xhr = new XMLHttpRequest();
		xhr.onload = function (){
			var json = JSON.parse(this.responseText);
			console.dir(json);
			
			if(json.minecraft == true){
				console.log("Minecraft true");
				$("#Name_can").hide();
				$("#Name_cant").show();
				$("#minecraft").html("<span style='font-weight: 400; color: #21c455;'>&#10003;</span>")
				$("#name").text(json.name);//set Name
				$("#uuid").text(json.uuid);//set UUID
				$("#url").text("ggo.fun/n?q="+json.name);//set link
				$("#url").attr("data-clipboard-text", "https://ggo.fun/n?q="+json.name);
				$("#skin").children("div").children("div").children("img").attr("src", "https://crafatar.com/renders/body/"+json.uuid+"?overlay=true");//set skin
				$(".skinContainer").attr("src", "https://skinrender.ga/embed/?skin.name="+json.name+"&controls.pan=false&camera.position=20,35,20&shadow=true&controls.zoom=false");
				$("#more").show();
				$("#more2").show();
				$("#more3").show();
				var text = "";
				for(i in json.names){
					console.log(json.names[i]);
					text += json.names[i];
				}
				$("#record").html(text);//set list
			}else{
				$("#Name_can").show();
				$("#Name_cant").hide();
				$("#more3").hide();
				$("#more").hide();
				$("#more2").hide();
				$("#minecraft").html("<span style='font-weight: 400; color: #d92929;'>&#10007;</span>")
			}
			$("#londing").hide();
			$("#confirm").prop('disabled', false);
			disabled = false;
			console.log("Minecraft check done");
			
		};
		xhr.open("GET", "https://cocopixelmc.com/releaseAPI/player?q="+name);
		xhr.send(null);
		
	});
}
