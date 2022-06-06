$(document).ready(function(){
    $("td").click(function (){
        var content = $(this).text();

        if (content != "Not Available"){
            $(this).toggleClass("highlight");

            if($(this).hasClass("highlight")) {
                $('#displaySelected').css("visibility","visible");
                $('#displaySelected').css("margin-top","2em");
                var location;
                if ($(this).index("td")%5 == 1){
                    location = "West Cliff";
                    console.log(location);
                } else if ($(this).index("td")%5 == 2) {
                    location = "North Cliff";
                } else if ($(this).index("td")%5 == 3) {
                    location = "East Cliff";
                } else if ($(this).index("td")%5 == 4) {
                    location = "South Cliff";
                }

                $('#result').append("<p>" + content + " at " + location + "</p>");

            } else {
                $('#result p:contains('+content+')').remove();
            
                if ($('#result').has('p').length == false){
                    $('#displaySelected').css("visibility", "hidden");
                    $('#displaySelected').css("margin-top","0");
                }
            }
        }
    });
});
