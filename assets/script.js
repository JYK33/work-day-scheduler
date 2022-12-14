$(document).ready(function() { 

    // create a listener for the click event
    $('.saveBtn').on('click', function() {

        // when the 'click' gets triggered get nearby values
        var value = $(this).siblings('.description').val();
        var time = $(this).parent().attr('id');
        
        // save the description
        localStorage.setItem(time, value);
        
        
        // timeout top remove 'show' class after 5 seconds
        setTimeout(function() {
            $('.notification').removeclass('show');
        }, 5000);
    });
    
    function hourUpdater() {
        // get current number of hours 
        var currentHour = moment().hours();
        
        // loop over time block
        $('.time-block').each(function () {
            var blockHour = parseInt($(this).attr('id').split('-')[1]);
            
            //  check if we've moved past this time
            if (blockHour < currentHour) {
                $(this).addClass('past');
            }  else if (blockHour === currentHour) {
                $(this).removeClass('past');
                $(this).addClass('present');
            } else {
                $(this).removeClass('past');
                $(this).removeClass('present');
                $(this).addClass('future');
            }
        });
    }
    
    hourUpdater();
    // set up interval to check if current time needs to be updated
    var interval = setInterval(hourUpdater, 15000);
    
    //load any saved data from localstorage
    $('#hour-9 .description').val(localStorage.getItem('hour-9'));
    $('#hour-10 .description').val(localStorage.getItem('hour-10'));
    $('#hour-11 .description').val(localStorage.getItem('hour-11'));
    $('#hour-12 .description').val(localStorage.getItem('hour-12'));
    $('#hour-13 .description').val(localStorage.getItem('hour-13'));
    $('#hour-14 .description').val(localStorage.getItem('hour-14'));
    $('#hour-15 .description').val(localStorage.getItem('hour-15'));
    $('#hour-16 .description').val(localStorage.getItem('hour-16'));
    $('#hour-17 .description').val(localStorage.getItem('hour-17'));
    
    // use moment to display the current date on the page 
    $('#currentDay').text(moment().format('dddd, MMMM Do'));
}); 
