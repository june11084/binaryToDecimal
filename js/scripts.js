var binaryToDecimal = function(binaryString, base){
  var toDecimal = parseInt(binaryString, base);
  return toDecimal;
 };


$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var string = parseInt($("#stringInput").val());
    var base = parseInt($("select#base").val());
    var decimal = binaryToDecimal(string, base);
    $("#result").text(decimal);
    console.log(base)
  });
});
