window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
// var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= 100) {
    navbar.classList.add("sticky")
    
  } else {
    navbar.classList.remove("sticky");
    $("#drpdwn").css({top:"130px"});
  }
}

$('#studyabroaddrp').hover(function () {
  $("#drpdwn").css({opacity: "1"});
  $("#drpdwn").css({visibility: "visible"});
  if (window.pageYOffset >= 100) {
  
    $("#drpdwn").css({top:"80px"});
  } 
  else{
    $("#drpdwn").css({top:"130px"});

  }
}, function () {
  // $("#drpdwn").css({opacity: "0"});
});
$("#drpdwn").hover(function () {
  // $("#drpdwn").css({opacity: "1"});
}, function () {
  $("#drpdwn").css({opacity: "0"});
  $("#drpdwn").css({visibility: "hidden"});
});

$('.topslider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    nextArrow:'<i class="fa-solid fa-chevron-right next"></i>',
    prevArrow:'<i class="fa-solid fa-chevron-left prev"></i>',
    arrows:true,
    loop:false,
    infinite:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          arrows:true,
          nextArrow:'<i class="fa-solid fa-chevron-right next"></i>',
            prevArrow:'<i class="fa-solid fa-chevron-left prev"></i>',
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
           arrows:true,
            nextArrow:'<i class="fa-solid fa-chevron-right next"></i>',
            prevArrow:'<i class="fa-solid fa-chevron-left prev"></i>',
           
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
           arrows:true,
               prevArrow:'<i class="fa-solid fa-chevron-left prev"></i>',
               prevArrow:'<i class="fa-solid fa-chevron-left prev"></i>',
           
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  }).on('afterChange', function(event, slick, currentSlide){
    var $nextArrow = $('.topslider .slick-arrow.next');
    var $prevArrow = $('.topslider .slick-arrow.prev');
    var slideCount = slick.slideCount;
    
    if (currentSlide === slideCount - 1 ) {
      $nextArrow.addClass('slick-disabled');
      // $prevArrow.addClass('slick-disabled');
    } 
    if (currentSlide === 1) {
      $prevArrow.addClass('slick-enabled');
      // $prevArrow.addClass('slick-disabled');
    } 
    else{
      $prevArrow.removeClass('slick-enabled');
    }
    console.log(currentSlide)

  });

 