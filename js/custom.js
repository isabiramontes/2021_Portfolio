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
    $('article:nth-child(2n)').addClass('right-aligned')
    $('article:nth-child(n)').addClass('left-aligned')


});


