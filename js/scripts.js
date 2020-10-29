console.log(window);

alert("This alert fires before the page loads.")

$(document).ready(function () {

	alert("This alert fired after the page finished loading");

	console.log(document);

});

