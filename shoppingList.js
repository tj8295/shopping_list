$(document).ready(function() {
    $('.add-item-button').click(function(){
    var userInput = $('.list-input').val();
    console.log(userInput);
    $('.list-rows').append("<div class=\"checkbox\"> " +
            "<label> " +
    "<input type=\"checkbox\" value=\"\"> " +
    userInput +
  "</label>" +
"</div>");
    });
});
