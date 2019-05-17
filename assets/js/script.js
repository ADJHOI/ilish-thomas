$("#info").click(function(event){
    $("#descript").toggleClass("active");
});

$(document).scroll(function(){
    var y = $(document);
    if (y.scrollTop() > (window.innerHeight - 63)/4) {
        $("#info").addClass("active");
    } else {
        $("#info").removeClass("active");
        $("#descript").removeClass("active");
    }
    
});

$("#scroll").click(function(event){
   $([document.documentElement, document.body]).animate({
        scrollTop: $("#video").offset().top
    }, 600); 
});

