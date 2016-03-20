var $output = $("#output");

$(".add_input:not(#percent)").on("click", function() {
  var id = $(this).attr("id");
  $output.html($output.html() + id)
});

$(".bk").on("click", function() {
  var text = $output.html();
  $output.html(text.substring(0, text.length - 1));
});

$(".clear").on("click", function() {
  $output.html("");
});

$("#equals").on("click", function() {
  var ans = calc($output.html());
  $output.html(ans)
});

function calc(input) {
  return eval(input);
}
