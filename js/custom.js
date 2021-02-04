/* global $*/
$(document).ready(function() {
    $.get("navbar.html", function(data){ // imports navbar into each page
        $(".bar").replaceWith(data);
    });
    $.get("footer.html", function(data){ // imports js into each page
        $(".footer").replaceWith(data);
    });
    $("#mainHeader").hover(function(){ // when hovering over header, gif plays
        $(this).css("background", "url('img/photoville.gif')");
        }, function(){
        $(this).css("background", "url('img/cover.png')");
    });
    $("#testDiv").hover(function(){ // when hovering over header, gif plays
        $(this).css("color", "pink");
        }, function(){
            $(this).css("color", "black");
    });
    $(".timeline_magnify").hover(function(){ // when hovering over header, gif plays
        document.getElementById("overlay").style.display = "block";
        }, function(){
            document.getElementById("overlay").style.display = "none";
    });
});


