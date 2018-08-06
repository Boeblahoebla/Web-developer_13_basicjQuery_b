// Created by Dzengiz Tafa //

/* 
The goal of this javascript file is to show the functionality of common jQuery methods like
* val()
* text()
* attr()
* html()
* addClass()
* removeClass()
* toggleClass()
*/


/////////////////////////////////
// javascript & library- check //
/////////////////////////////////
console.log("Javascript (demo.js) is connected!");

if (jQuery) {
    console.log("jQuery is enabled!");
    console.log("")
} else {
    console.log("!! ERROR !! jQuery is not available!");
    console.log("")
}


////////////////////////////////
// variables & eventlisteners //
////////////////////////////////

// val()
var btnLogValue = document.getElementById("btnLogValue");
var btnChangeValue = document.getElementById("btnChangeValue");

// text()
var btnChangeText = document.getElementById("btnChangeText");
var btnLogLisText = document.getElementById("btnLogLisText");
var btnLogUlText = document.getElementById("btnLogUlText");

var fullParagraph = $("#paragraph");
var originalText = fullParagraph.text();
var textChanged = false;

// html()
var btnLogHtml = document.getElementById("btnLogHtml");
var btnSetHtml = document.getElementById("btnSetHtml");
var htmlDiv = $("#htmlDiv");
var originalHtml = $("#htmlDiv").html();
var newHtml = "<p> This whole div now contains a paragraph with some text </p>";

var htmlChanged = false;

// attr()
var btnChangeImage = document.getElementById("btnChangeImage");
var imageToWorkOn = $("#attrImage");
var imageAltOriginal = imageToWorkOn.attr("alt");
var imageSrcOriginal = imageToWorkOn.attr("src");
var imageNewAlt = "Evil face";
var imageNewSrc = "https://c3.staticflickr.com/3/2418/2243463214_f32ab004af_b.jpg"

var imageChanged = false;

// addClass(), removeClass(), toggleClass()
var btnAddClass = document.getElementById("btnAddClass");
var btnRemoveClass = document.getElementById("btnRemoveClass");
var btnToggleClass = document.getElementById("btnToggleClass");

var styleToggled = false;



/////////////////////
// Logic goes here //
/////////////////////

// var()
issueHeader("jQuery method val()");

console.log("using .val() without arguments we can get the value of an input")
console.log("using val(value) with an argument sets the value of an input field (mostly used to clear the input)");
console.log("");

btnLogValue.addEventListener("click", logValue);
btnChangeValue.addEventListener("click", changeValue);

// text()
issueHeader("jQuery method text()");

console.log("using .text() without arguments returns the full text as a string");
console.log("using .text(value) with an argument sets the text of a certain elemant")
console.log("");

console.log("* fullParagraph.text()");
console.log(fullParagraph.text());
console.log("");

console.log("* subText.text()")
var subText = $("#subText");
console.log(subText.text());
console.log("");

btnChangeText.addEventListener("click", changeText);
btnLogLisText.addEventListener("click", logLisText);
btnLogUlText.addEventListener("click", logUlText);

// attr()
issueHeader("jQuery method attr()");

console.log("This method is used to retrieve or set an attribute of an element");
console.log("");
console.log("The original src of the image is " + imageSrcOriginal);
console.log("The original alt of the image is " + imageAltOriginal);
console.log("")

btnChangeImage.addEventListener("click", changeImage);

// html()
issueHeader("jQuery method html()");

console.log("using .html() is very analogous to .text(), but differs by changing the html, and thus the webpage itsself of a certain element")
console.log("using it with or without an argument either respectively sets or returns the html content")
console.log("");

btnLogHtml.addEventListener("click", logHtml);
btnSetHtml.addEventListener("click", changeHtml);

// addClass(), removeClass() & toggleClass
issueHeader("jQuery methods addClass(), removeClass() and toggleClass()");

console.log("using .addClass() adds a CSS class to an element for styling");
console.log("using .removeClass() removes a CSS class from an element to remove a certain set of styling attributes");
console.log("using .toggleClass() toggles a certain CSS class on or off");

btnAddClass.addEventListener("click", function() {
    $("#paragraphToManipulate").addClass("style1");
    console.log("CSS style1 added to element");
    console.log("")
});

btnRemoveClass.addEventListener("click", function() {
    $("#paragraphToManipulate").removeClass("style1");
    console.log("CSS style1 removed from element");
    console.log("")
});

btnToggleClass.addEventListener("click", function() {
    $("#paragraphToManipulate").toggleClass("style2");

    if (!styleToggled) {
        styleToggled = true;
        console.log("CSS style2 toggled on");
        console.log("");
    } else {
        styleToggled = false;
        console.log("CSS style2 toggled off");
        console.log("");
    }
});


///////////////////////////////
// Helpler functions go here //
///////////////////////////////

// Helper function to issue a header for the given topic
function issueHeader(text) {
    console.log(text);
    var stars = "";
    for (var i = 0; i < text.length; i++) {
        stars = stars + "*";
    }
    console.log(stars);
}

// Helper method to log the value of an inputfield
function logValue() {
    console.log($("#inputName").val());
    console.log("");
}

// Helper method to change the value of an inputfield
function changeValue() {
    var stringToUse = prompt("What is the value you would like to enter in the inputfield?");
    $("#inputName").val(stringToUse);

    console.log("The text input has been changed to " + stringToUse);
    console.log("");
}

// Helper function to change the text of the paragraph in the text-section
function changeText() {
    var otherText = "This is a new text which replaced the text in the full paragraph";

    if (!textChanged) {
        // Change the text in the paragraph
        fullParagraph.text(otherText)
        btnChangeText.textContent = "Revert to original text";
        textChanged = true;

        console.log("The original text has changed");
    } else {
        fullParagraph.text(originalText)
        btnChangeText.textContent = "Change original text";
        textChanged = false;

        console.log("reverted back to original text");
    }
}

// Helper function to log the .text() method on the <li> tags in the text-section
function logLisText() {
    console.log("* .text() on Li's in the text-section");
    console.log($(".ulTextLi").text());
    console.log("")
}

// Helper function to log the .text() method on the whole <ul> in the text-section
function logUlText() {
    console.log("* .text() on the whole Ul in the text-section");
    console.log($("#ulTextSection").text());
    console.log("");
}

// Helper function to change the html of an element (in this case div with id #htmlDiv)
function changeHtml() {
    if (!htmlChanged) {
        htmlDiv.html(newHtml);
        btnSetHtml.textContent = "Revert back to the original html";
        htmlChanged = true;

        console.log("The original html has changed");
        console.log("");
    } else {
        htmlDiv.html(originalHtml);
        btnSetHtml.textContent = "Change original html";
        htmlChanged = false;

        console.log("reverted back to original html");
        console.log("");
    }
}

// Helper function to change the image source & alt of an image using the attr() method
function changeImage() {
    if (!imageChanged) {
        imageToWorkOn.attr("src", imageNewSrc);
        imageToWorkOn.attr("alt", imageNewAlt);

        btnChangeImage.textContent = "Revert back to the original image src & alt"
        imageChanged = true;

        console.log("The original image source & alt have changed");
        console.log("* src is now " + imageNewSrc);
        console.log("* alt is now " + imageNewAlt);
        console.log("");
    } else {
        imageToWorkOn.attr("src", imageSrcOriginal);
        imageToWorkOn.attr("alt", imageAltOriginal);

        btnChangeImage.textContent = "Change original image src & alt";
        imageChanged = false;

        console.log("Reverted to the original image src & alt");
        console.log("* src is now " + imageSrcOriginal + " again");
        console.log("* alt is now " + imageAltOriginal + " again");
        console.log("");
    }
}

// Helper function to log the html of an element (in this case a div with id #htmlDiv)
function logHtml() {
    console.log("* .html() on a div containing elements")
    console.log($("#htmlDiv").html());
}