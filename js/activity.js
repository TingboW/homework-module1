$(document).ready(function(){
    $("table tr").each(function(){
        $(this).find("td:not(:first)").attr("id","selectable");
        $(this).find("td:contains('Not')").attr("id","notSelectable");
    })
$("td[id='selectable']").click(function(){
    $(this).toggleClass("highlight");
})

})