// BUSINESS LOGIC

var reverseString = function(word) {
  var splitString = word.split("");
  var reverseArray = splitString.reverse();
  var joinArray = reverseArray.join("");
  if (joinArray.toUpperCase() === word.toUpperCase()) {
    return true;
  } else {
    return false;
  }
};



// UI LOGIC
$(document).ready(function() {
  $("form#palindrome").submit(function(event) {
    event.preventDefault();
    var word = $("input#word").val();
    var result = reverseString(word);

    $(".answer").text(word);

    if (!result) {
    $(".not").text("not");
  } else {
    $(".not").text("")
  }

    $("#results").show();
  });
});
