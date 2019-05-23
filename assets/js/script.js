$("#scroll").click(function(event){
   $([document.documentElement, document.body]).animate({
        scrollTop: $("#video").offset().top
    }, 600); 
});

$(document).scroll(function(event){
//   console.log($(document).scrollTop());
    if($(document).scrollTop() > 20) {
        $(".footer").addClass("active");
    } else {
        $(".footer").removeClass("active");
    }
});
