var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

var hour = $(".hour");
var timeBlock = $(".time-block");
var description = $(".description");
var saveBtn = $(".saveBtn");


function init() {
    colorCode();

    renderTodos();
 }

function renderTodos() {
    timeBlock.each(function () {
        var dataNumber = parseInt($(this).attr("data-number"));
        var dataText = localStorage.getItem(dataNumber);
        //console.log(dataNumber);
        console.log(dataText);
        $(this).children("textarea").val(dataText);

    })



}
   
function colorCode() {
    timeBlock.each(function () {
        var dataNumber = parseInt($(this).attr("data-number"));
        console.log(dataNumber)
        var currentHour = today.format("k")
        console.log(currentHour);

        
        if (dataNumber < currentHour) {
            $(this).children("textarea").addClass("past");
        }
        else if (dataNumber == currentHour) {
            $(this).children("textarea").addClass("present");
        }
        else {
            $(this).children("textarea").addClass("future");
        }
    })
}



saveBtn.on('click', function (event) {
    event.preventDefault();
    var todoText = $(this).siblings(".description").val();
    if (todoText === ""){
        return;
    }
    
    localStorage.setItem(($(this).parent().attr("data-number")), todoText);
    renderTodos ();
    
    renderTodos();
}) 


init();