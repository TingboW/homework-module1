  //Create a time data function
  function currentTime() {
    //Declare variables
    var d = new Date(); //get current date
    var hr = d.getHours(); //get current hours
    var min = d.getMinutes(); //get current minuts
    var sec = d.getSeconds(); //get current seconds
    var ampm; // declare empty variable to store AM or PM
    //Add 0 to single digits for seconds
    if (sec <10) {
        sec = "0" + sec;
    }
    //Add 0 to single digits for minuts
    if (min <10) {
        min = "0" + min;
    }
    //Determine AM or PM string
    if (hr == 12) {
        ampm = "PM"; //Set to PM
    } else if (hr > 12) {
        hr -= 12; //deduct 12 from hours greater than 12 (military time)
        ampm = "PM"; //set to PM
    } else {
        ampm = "AM"; //set to AM
    }

    var utchr = d.getUTCHours(); //Get current Greenwich Mean Time (GMT)
    var timeDiff = utchr - hr; //To store time difference between GMT hour and Local Hour
    var adjTimeDiff; //To store time difference converted to positive number
    var timeZone; //To store the 4 time zones (PF, MT, CT, ET)

    if (timeDiff < 0) {
        adjTimeDiff = Math.abs(timeDiff);
    } else {
        adjTimeDiff = timeDiff;
    }
    //Determine Time Zone
    var timeZone;
    if (adjTimeDiff == 4) {
        timeZone = "ET";
    } else if (adjTimeDiff == 5) {
        timeZone = "CT";
    } else if (adjTimeDiff == 6) {
        timeZone = "MT";
    } else if (adjTimeDiff == 7) {
        timeZone = "PT";
    }

    //Assemble time format to display 
    var time = hr + ":" + min + ":" + sec + " " + ampm + " " + timeZone;
    //Display current local time and time zone on HTML elements
    document.getElementById("clock").innerText = time; //adding time

    //Run time data function every 1 second
    setInterval (currentTime, 1000); //settign timer 
    //Initial run of time data function
}
    currentTime();