/**
 * Create with Minecraft Coco
 * 16/5/2018 20:00
 */
		
jQuery(function($) {
	$("#confirm").click(function() {
		$("#londing").show();
		name = $("#Name_input").val();
		window.history.pushState({},0,"https://cocopixelmc.com/name-check/?q="+name);//set url
		check();
	});
});


function check(){
	jQuery(function($) {
		
		var xhr = new XMLHttpRequest();
		xhr.onload = function (){
			var json = JSON.parse(this.responseText);
			console.dir(json);
			
			if(json.minecraft == false && json.server == false){
				$("#Name_can").show();
				$("#Name_cant").hide();
			}else{
				$("#Name_can").hide();
				$("#Name_cant").show();
			}
			
			if(json.minecraft == true){
				console.log("Minecraft true");
				$("#minecraft").html("<span style='font-weight: 400; color: #21c455;'>&#10003;</span>")
				$("#name").text(json.name);//set Name
				$("#uuid").text(json.uuid);//set UUID
				$("#url").text("mctw.xyz/name?q="+json.name);//set link
				$("#url").attr("data-clipboard-text", "https://mctw.xyz/name?q="+json.name);
				$("#skin").children("div").children("div").children("img").attr("src", "https://crafatar.com/renders/body/"+json.uuid+"?overlay=true");//set skin
				$("#more").show();
				$("#more2").show();
				var text = "";
				for(i in json.names){
					console.log(json.names[i]);
					text += json.names[i]+"<br>";
				}
				$("#record").html(text);//set list
			}else{
				$("#more").hide();
				$("#more2").hide();
				$("#minecraft").html("<span style='font-weight: 400; color: #d92929;'>&#10007;</span>")
			}
			console.log("Minecraft check done");
			
			if(json.server == true){
				console.log("Server true");
				$("#server").html("<span style='font-weight: 400; color: #21c455;'>&#10003;</span>")
			}else{
				$("#server").html("<span style='font-weight: 400; color: #d92929;'>&#10007;</span>")
			}
			console.log("Server check done");
			$("#londing").hide();
		};
		xhr.open("GET", "https://cocopixelmc.com/releaseAPI/player?q="+name);
		xhr.send(null);
		
	});
}

check();
