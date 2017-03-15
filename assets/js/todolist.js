// Checks off tasks by clicking

$("ul").on("click", "li", function(){ //toggles between strike and not striked
    $(this).toggleClass("completed");
});

$("ul").on("click", "span", function (event){ // deletes a task
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation(); // stops event bubbling
});

$("input[type = 'text']").keypress(function(event){
    if (event.which === 13){
        var taskText = $(this).val(); //gets task from input
        $(this).val("");
        $('ul').append("<li><span><i class='fa fa-trash'></span> " + taskText + "</li>");
    }
});

$(".fa-plus").click(function(){
    $("input[type = 'text']").fadeToggle();
});