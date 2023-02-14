console.log("Your index.js file is loaded correctly!");

$(window).load(function () {
      $('body').sakura();
  }); 

$('.navProj').on("click", function(e){
    e.preventDefault();
    var targetHref = $(this).attr('href');
    
  $('html, body').animate({
      scrollTop: $(targetHref).offset().top
  }, 1000);
});
