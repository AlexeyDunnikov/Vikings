$(function(){
    
    $('.menu__btn').on('click', function(){
        $('.menu__list').toggleClass('menu__list--active')
    });

    $('.heroes__slider-img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.heroes__slider-text',
        arrows: true,
        
        prevArrow:'<button class="slick-prev slick-btn"><img src="images/icon/arrow-left.png" alt=""></button>',
       
        nextArrow:'<button class="slick-next slick-btn"><img src="images/icon/arrow-right.png" alt=""></button>',
        responsive:[
            {
                breakpoint: 769,
                settings:{
                    arrows: false,
                    dots: true
                }
            }
        ]
      });
      $('.heroes__slider-text').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        
        fade: true,
        asNavFor: '.heroes__slider-img',
        arrows: false,
      });



});