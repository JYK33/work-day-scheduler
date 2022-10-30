$(document).ready(function() { 
     // display current day on page
  $('#currentDay').text(moment().format('dddd, MMMM Do'));

// listen for save button clicks
    $('saveBtn').on('click', function() {
        // get nearby values
        var value = $(this).siblings('description').val();
        var time = $(this).parent().attr('id');
        
        // save in local storage
        localStorage.setItem(time, value);
        
        // show notification that item was saved to the localstorage by adding class 'show'
        $('notification').addclass('show');

        // timeout top remove 'show' class after 5 seconds
        setTimeout(function() {
            $('notification').removeclass('show');
        }, 5000);
    });

    



});