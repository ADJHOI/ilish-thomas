$("#scroll").click(function(event){
   $([document.documentElement, document.body]).animate({
        scrollTop: $("#video").offset().top
    }, 600); 
});
