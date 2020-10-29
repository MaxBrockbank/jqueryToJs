//window object
console.log(window);
// Represents the browser's window, each tab is a window
// is global
// check it out in the browser Console

// comes with a lot of properties:
console.log("window height: " + window.innerHeight);
console.log("window width: " + window.innerWidth);

// comes with a lot of functions. Like alert()!
window.alert("This alert fired before the page was finished loading.");

// NOTE - no need to do window. before everything as you've seen before using alerts

// document object
console.log(window.document); //same as console.log(document);
// represents the web page. Can access all page content
// check it out in the browser console

function pageReady() {
	alert("This alert fired after the page finished loading.");
};


// PRACTICE in the browser Console
function callFromConsole(message) {
	alert(message);
}
// Declare a variable
// Pass that variable as an argument to callFromConsole in the browser console
