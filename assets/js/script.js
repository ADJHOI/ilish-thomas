$("#scroll").click(function(event){
   $([document.documentElement, document.body]).animate({
        scrollTop: $("#video").offset().top
    }, 600); 
});

$(document).scroll(function(event){
    if($(document).scrollTop() > 20) {
        $(".footer").addClass("active");
    } else {
        $(".footer").removeClass("active");
    }
});

$("#counter-1").hover(function(event){
    $("#citation-1").toggleClass("active");
    $("#one").toggleClass("active");
  }, function(event){
    $("#citation-1").toggleClass("active");
    $("#one").toggleClass("active");
  }
);

$("#counter-2").hover(function(event){
    $("#citation-2").toggleClass("active");
    $("#two").toggleClass("active");
  }, function(event){
    $("#citation-2").toggleClass("active");
    $("#two").toggleClass("active");
  }
);

$("#counter-3").hover(function(event){
    $("#citation-3").toggleClass("active");
    $("#three").toggleClass("active");
  }, function(event){
    $("#citation-3").toggleClass("active");
    $("#three").toggleClass("active");
  }
);

$("#counter-4").hover(function(event){
    $("#citation-4").toggleClass("active");
    $("#four").toggleClass("active");
  }, function(event){
    $("#citation-4").toggleClass("active");
    $("#four").toggleClass("active");
  }
);
