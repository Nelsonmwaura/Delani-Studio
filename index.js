$(document).ready(function () {
    $(".clickable").click(function () {
        $("#description-showing").toggle();
        $("#decription-hidden").toggle();
    });
});