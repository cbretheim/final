var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
};



//
// $("#project-1-survey input").keyup(function() {
//
//   // calculate progress
//
// });
//
// var numValid = 0;
// $("#project-1-survey input[required]").each(function() {
//     if (this.validity.valid) {
//         numValid++;
//     }
// });
//
// // "Cached" somewhere once
// var progress = $("#progress"),
//     // progressMessage = $("#progressMessage");
//
// // Logic that runs after counting every time
// if (numValid == 0) {
//     progress.attr("value", "0");
//     // progressMessage.text("The form, it wants you.");
// }
// if (numValid == 1) {
//     progress.attr("value", "20");
//     // progressMessage.text("There you go, great start!");
// }
