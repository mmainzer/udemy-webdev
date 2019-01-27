//                CHECK OFF SPECIFIC TODOS BY CLICKING

// $("li").click(function(){
// 	//if li is gray
// 	if($(this).css("color") === "rgb(128, 128, 128)"){
// 		$(this).css({
// 			color: "black",
// 			textDecoration: "none"
// 		});
// 	} 
// 	else{
// 		$(this).css({
// 			color: "gray",
// 			textDecoration: "line-through"
// 		});
// 	}
// });

// AN EASIER WAY
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//               REMOVE TODO WHEN CLICKING SPAN

$("ul").on("click", "span", function(e){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	e.stopPropagation();
});

//               ADD A NEW TODO WHEN TEXT ENTERED IN INPUT AND ENTER KEY IS CLICKED

$("input[type='text']").keypress(function(e){
	if(e.which === 13){
		// grab new todo text from input on enter
		var todoText = $(this).val();
		$(this).val("");
		// create a new li and add to ul
		$("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + todoText + "<li>")
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});