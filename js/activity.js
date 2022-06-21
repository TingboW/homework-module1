$(document).ready(function () {
    $("table tr").each(function () {
        $(this).find("td:not(:first)").attr('id', 'selectable');
        $(this).find('td:contains("Not")').attr('id', 'notSelectable');
    })

    $("td[id='selectable']").click(function () {
        $(this).toggleClass("highlight");

        if ($(this).hasClass("highlight")) {
            $('#displayModal').modal('show');

            
          //  if($(this).hasClass("highlight")) {
           //     $('#displayModal').css("visibility","visible");
              //  $('#displaySelected').css("margin-top","2em");
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

                $('#result').append("<p>" + $(this).text()  + " at " + location + "</p>");

            } else {
                $('#result p:contains('+$(this).text() +')').remove();
            
                if ($('#result').has('p').length == false){
                    $('#displayModal').modal('hide');
                 //   $('#displayModal').css("visibility", "hidden");
                 //   $('#displaySelected').css("margin-top","0");
                }
            }
    });
});


function unselect() {
    $("td[id='selectable']").removeClass("highlight");
    $("#result").empty();
}