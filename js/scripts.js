$(document).ready(function() {
  $("h5#dark").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-background");
  });
  $("h5#light").click(function() {
    $("body").removeClass();
    $("body").addClass("light-background");
  });
  $("h5#original").click(function() {
    $("body").removeClass();
  });
});
