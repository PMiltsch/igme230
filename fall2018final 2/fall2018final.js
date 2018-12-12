$(".mainmenu").click(function () {
    $(this).next(".submenu").slideToggle("slow");
});




$("article").load("article0.txt");

$("input[name='content']").click(function () {
    let article = this.value;
    console.log(article);
    $("article").load(article);
})