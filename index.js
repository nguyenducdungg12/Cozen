$('.grid').colcade({
    columns: '.grid-col',
    items: '.grid-item'
  });
  function isElementInViewport(el) {

    // Special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }

    var rect = el.getBoundingClientRect();
        return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
    );
}
$(document).ready(function(){
    $('.owl-carousel-logo').owlCarousel({
        loop:true,
        margin:50,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
    var heroSlide = $('.owl-carousel');
    heroSlide.owlCarousel({
        loop:true,
        items:1,
        margin:10,
        nav:true,
        animateOut: 'fadeOut',
        dots:false,
        navText:['<i class="fas fa-arrow-left"></i>','<i class="fas fa-arrow-right"></i>'],
    });
    new WOW().init();


    //Count Number
    var x = document.querySelector('.statistic--custom');
    $(document).scroll(function(){
        if (isElementInViewport(x)){
            var speed = 20;
            var y = $('.statistic__item__number').each(function(e,index){
                var tong=0;
                var number = parseFloat($(this).attr('data-count'));
                var nextNumber = (number/speed);
                var counter = ()=>{
                    tong = tong+nextNumber;
                    if (tong>=number){
                        $(this).html(`${number}K`);
                    }
                    else{
                        $(this).html(`${tong}K`);
                        setTimeout(counter,100);
                    }
                }
                counter();
            })
            $(this).unbind();
        }    
        
    })
    //fiter product
    $('.product__menu__text').click(function(){
        $('.product__menu').find('.product__active').removeClass('product__active');
        $(this).addClass('product__active');
        filter = $(this).attr('data-filter');
        if (filter=='*'){
            $('.product__item').show("1000");
        }
        $('.product__item').not($(filter)).hide("1000");
        $('.product__item').filter($(filter)).show("1000");
    })

    /* responsive */
    /*  open navbar*/
    $('.header__hamburger').click(function(){
        $('.header__menu').slideToggle();
    })
    $('.header__menu__link').click(function(){
        $(this).find('.header__menu__dropdown').slideToggle();
        $(this).find('.header__menu__link__submenu').slideToggle();
    })
})
