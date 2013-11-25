var currentImage = 1;

//Click event for the back button
$("input.back").click(function(){
 if (currentImage == 1) {
 	//do nothing
 } else {
	currentImage = currentImage - 1;
	$("#image-to-vote-on").attr("src", "images/food" + currentImage + ".jpg");
  }
});

//Click event for the skip button
$("input.skip").click(function(){
if (currentImage == 8) {
	//do nothing
 } else { 
	currentImage = currentImage + 1;
	$("#image-to-vote-on").attr("src", "images/food" + currentImage + ".jpg");
 }
});

//Change event for the selection list
$(".your-vote").change(function() {
	alert( "Handler for .your-vote() called.");
});

