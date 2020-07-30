$('#work').on("click",function(e){
    $('.span').hover('slow');
    $('.work1').hover("click");
   });
$(document).ready(function () {
    $("#blanks form").submit(function (event) {
        var nameInput = $("input#name").val();
        var emailInput = $("input#email").val();
        var messageInput = $("input#animal").val();
        $(".name").text(nameInput);
        $(".email").text(emailInput);
        $(".message").text(messageInput);

        $("#recieved").show();

        event.preventDefault();
    });
});