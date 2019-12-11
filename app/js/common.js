$(document).ready(function() {



$(".gallery_carousel").owlCarousel({
    items:3,
    loop: true,
    margin: 30,
    navText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
    responsive: {
        992: {
            items:3
        }
        ,
        768:{
            items:2
        },
        0:{
            items: 1
        }
    }
})
    $(".testimonials_carousel").owlCarousel({
        items:2,
        loop: true,
        margin: 30,
        navText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
        responsive: {
            992: {
                items:2
            },
            768:{
                items:1
            },
            0:{
                items: 1
            }
        }
    })
    $(".answer li .body").each(function(){
        height =  $(this).outerHeight();

            $(this).attr("data-height",height).css("height",0)

    })
    $(".answer li .title").click(function () {
        item = $(this).parents("li")
        item.toggleClass("expand")
        if( item.hasClass("expand")){
            item.find(".body").css("height",item.find(".body").data("height"))
        }else{
            item.find(".body").css("height",0)
        }
    })

});
