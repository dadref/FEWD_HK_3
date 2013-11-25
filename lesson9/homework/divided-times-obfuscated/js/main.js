${function (){
//user click on a button
$("nav").on('click', 'li', function(e))
var $this = $(this);
console.log($this);
//slide down the image thumbnails
slidethumbs($this);
// highlight the active section
activateBtn($this);
return false;
});

function slidethumbs (li) {
	var $slider = $
	
}