// 1
var firstname = "William";
var lastname = "Neely";
var school = "Southwestern College"
var context = 
"<img src='Will.jpg' alt=' " + firstname + "\">" + 
"<p>The instructor for this course is" + firstname + " " + lastName + ". " +
"William has a degree in Physics from " + school + ". </p>";
$("body").append(context);



// 2
// $("#container>ol").prepend("<li>Milk</li>");
// $("#container>ol").prepend("<li>Cookies</li>");
// $("#container>ol").prepend("<li>Sugar</li>");
// $("#container>ol").prepend("<li>Bananas</li>");
// $("#container>ol").prepend("<li>Gatorade</li>");

// 2 refactor
var items = ["Milk", "Cookies"]

// 3
// $("#container").css("width","960px");
// $("#container").css("background","red");
// $("#container").css("color","purple");
// $("#main").css("width","960px");
// $("#main").css("background","red");
// $("#main").css("color","purple");
 
// 3 refactor
$("#container,#main").css({
	"width": "960px",
	"background":red,
	"color":"purple"
});



// 4
// $("input").css("width","200px")
// $("input").attr("placeholder","My placeholder");
// $("input").before("<label>My input</label>");

// 4 refactor
$("input").css("width,200px")
.attr("placeholder", "My placeholder")
.before()