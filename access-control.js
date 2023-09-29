document.addEventListener("DOMContentLoaded", function() {
    var accessContent = document.getElementById("access-content");
    var nextPage = document.getElementById("next-page");

    var currentTime = new Date();
    var currentHour = currentTime.getHours();
    var currentMinute = currentTime.getMinutes();

    console.log(currentHour, currentMinute)

    // Check if the current hour is not between 23 and 2
    //if (((currentHour >= 8 && currentMinute >= 57) && (currentHour <=9 && currentMinute <= 10)) || ((currentHour >=9  && currentMinute >= 10) && (currentHour <=9 && currentMinute <= 12)))
    if ((currentHour >= 23) && (currentHour <= 02))
    {
        accessContent.style.display = "none";
        nextPage.style.display = "block";
    } 
    else 
    {
        accessContent.style.display = "block";
        nextPage.style.display = "none";
    }
});

document.addEventListener("DOMContentLoaded", function() {
    var accessContent = document.getElementById("access-content");
    var nextPage = document.getElementById("next-page");
    var clockElement = document.getElementById("clock");

    function updateClock() {
        var currentTime = new Date();
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();
        var amPm = hours >= 12 ? 'PM' : 'AM';
    
        // Convert 24-hour format to 12-hour format
        hours = (hours % 12) || 12;
    
        // Add leading zeros to single-digit values
        hours = (hours < 10 ? "0" : "") + hours;
        minutes = (minutes < 10 ? "0" : "") + minutes;
        seconds = (seconds < 10 ? "0" : "") + seconds;
    
        // Update the clock element's content
        clockElement.innerHTML = hours + " : " + minutes + " : " + seconds + " : " + amPm;
    
        setTimeout(updateClock, 1000); // Update every second
    }
    

    updateClock(); // Initial call to start the clock
});

document.addEventListener("DOMContentLoaded", function() {
    // Your existing code...

    var pageRefreshButton = document.getElementById("page-refresh-button");

    // Add event listener to the page refresh button
    pageRefreshButton.addEventListener("click", function() {
        location.reload(); // Reload the webpage
    });

    // Your existing code...
});
