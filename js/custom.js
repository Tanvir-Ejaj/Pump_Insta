$(function(){
        // banner part start
        $('#banner-main').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<i class="fa-solid fa-angle-left left-arrow"></i>',
            nextArrow: '<i class="fa-solid fa-angle-right right-arrow"></i>',
            dots: false,
            speed: 2000,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 2000,
          });
        // banner part end

        var mixer = mixitup('.mixitup');

        $('.latest-main').slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          prevArrow: '<i class="fa-solid fa-angle-left left-arrow-1"></i>',
          nextArrow: '<i class="fa-solid fa-angle-right right-arrow-1"></i>',
          dots: false,
          speed: 2000,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 2000,
        });

        $('.comment-slick').slick({
          slidesToShow: 2,
          slidesToScroll: 1,
          prevArrow: '<i class="fa-solid fa-angle-left left-arrow-2"></i>',
          nextArrow: '<i class="fa-solid fa-angle-right right-arrow-2"></i>',
          dots: false,
          speed: 2000,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 2000,
        });
});
$('.company-main').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  prevArrow: '<i class="fa-solid fa-angle-left left-arrow-3"></i>',
  nextArrow: '<i class="fa-solid fa-angle-right right-arrow-3"></i>',
  dots: false,
  speed: 2000,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
});

$('.counter').counterUp({
  delay: 100,
  time: 8000,
});
