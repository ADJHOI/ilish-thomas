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
    if ($(window).width() > 699){
//        $("#citation-1").addClass("active");
        $("#one").addClass("active");
    }
}, function(event){
    if ($(window).width() > 699){
//        $("#citation-1").removeClass("active");
        $("#one").removeClass("active");
    }
});

$("#counter-1").click(function(event){
    if ($(window).width() < 700){
//        $("#citation-1").toggleClass("active");
        $("#mobile-1").toggleClass("active");  
    }
});
            
$("#counter-2").hover(function(event){
    if ($(window).width() > 699){
//        $("#citation-2").addClass("active");
        $("#two").addClass("active");
    }
}, function(event){
    if ($(window).width() > 699){
//        $("#citation-2").removeClass("active");
        $("#two").removeClass("active");
    }
});

$("#counter-2").click(function(event){
    if ($(window).width() < 700){
//        $("#citation-2").toggleClass("active");
        $("#mobile-2").toggleClass("active");  
    }
});

$("#counter-3").hover(function(event){
    if ($(window).width() > 699){
//        $("#citation-3").addClass("active");
        $("#three").addClass("active");
    }
}, function(event){
    if ($(window).width() > 699){
//        $("#citation-3").removeClass("active");
        $("#three").removeClass("active");
    }
});

$("#counter-3").click(function(event){
    if ($(window).width() < 700){
        $("#citation-3").toggleClass("active");
        $("#mobile-3").toggleClass("active");  
    }
});

$("#counter-4").hover(function(event){
    if ($(window).width() > 699){
//        $("#citation-4").addClass("active");
        $("#four").addClass("active");
    }
}, function(event){
    if ($(window).width() > 699){
//        $("#citation-4").removeClass("active");
        $("#four").removeClass("active");
    }
});

$("#counter-4").click(function(event){
    if ($(window).width() < 700){
//        $("#citation-4").toggleClass("active");
        $("#mobile-4").toggleClass("active");  
    }
});

$(".close").click(function(event){
    $(this).parent().removeClass("active");
//    $(this).parent().prev().children().removeClass("active")
});

$(window).resize(function(event){
    if ($(window).width() > 699){
        $("#mobile-1").removeClass("active");
        $("#mobile-2").removeClass("active");
        $("#mobile-3").removeClass("active");
        $("#mobile-4").removeClass("active");
    }
});

$(function () {
    var touch = 'ontouchstart' in document.documentElement
                || navigator.maxTouchPoints > 0
                || navigator.msMaxTouchPoints > 0;

    if (touch) {
        try {

            for (var si in document.styleSheets) {
                var styleSheet = document.styleSheets[si];
                if (!styleSheet.rules) continue;

                for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
                    if (!styleSheet.rules[ri].selectorText) continue;

                    if (styleSheet.rules[ri].selectorText.match(':hover')) {
                        styleSheet.deleteRule(ri);
                    }
                }
            }
        } catch (ex) {}
    }
});   