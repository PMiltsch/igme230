$(".menu").click(function () {
    $(this).next(".submenu").slideToggle("slow");
});









$("#story").load("story0.txt");





var button = document.getElementById("increment"),
  count = 0;
button.onclick = function() {
  count += 1;
  button.innerHTML = "button click count: " + count;
};
