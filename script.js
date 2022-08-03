$(document).ready(function () {
    $("#nav-link").on("click", function () {
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
        console.log("activated");
    });
});
