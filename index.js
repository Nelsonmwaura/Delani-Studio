
$(document).ready(function () {
    $("#blanks form").submit(function (event) {
        var nameInput = $("input#name").val();
        var emailInput = $("input#email").val();
        var animalInput = $("input#animal").val();
        $(".name").text(nameInput);
        $(".email").text(emailInput);
        $(".message").text(messageInput);

        $("#story").show();

        event.preventDefault();
    });
});