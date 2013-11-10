$(document).ready(function() {
    //user clicks add item button
    $('.add-item-button').click(function(){
    var userInput = $('.list-input').val();
    $('.list-rows').append("<div class=\"checkbox\"> " +
            "<label> " +
    "<input type=\"checkbox\" value=\"\"> " +
    userInput + " </input>" +
  "</label>" +
"</div>");
    }); //end add-item-button

    //user clicks a checkbox
    $(document).on('click', '.checkbox', function(){
        $(this).toggleClass("completed-item");
        console.log("div clicked");
    });

    //user clicks select all
    $('.select-all-button').click(function(){
        $('.checkbox').addClass('completed-item');
    })
});
