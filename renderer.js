var emooji = require('node-emoji');
const clipboard = require('electron').clipboard;

$( document ).ready(function() {
  $("#main").focus();
  console.log("fammm")
});

$("#main").focusout(function(){
  var input = $(this).val().split();
  var output = [];
  input.forEach(element => {
    output.push(emooji.emojify(element))
  });
  clipboard.writeText(output.join(""));
  $("#main").val('');
})
