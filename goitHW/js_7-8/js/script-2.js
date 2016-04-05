$(document).ready(function(){
 
//    $("fieldset div").append("&lt;em&gt;&lt;/em&gt;");
 
    $("fieldset div").hover(function() {
        $(this).find("em").animate({opacity: "show", top: "-75"}, "slow");
        var hoverText = $(this).attr("data-title");
        $(this).find("em").text(hoverText);
    }, function() {
        $(this).find("em").animate({opacity: "hide", top: "-85"}, "fast");
    });
 
});