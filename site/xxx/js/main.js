$(document).ready(function () {
    //CSS

        //header cards
    let h_cardH = parseInt($(".h-card-1").css("height"));
    let h_cardH_after = h_cardH + 15 + "px";
    let h_cardH__after = h_cardH - 15 + "px";
    let h_cardH_before = h_cardH + "px";
    $(".h-card-1").hover(function () {
        $(".h-card-1").css("height", h_cardH_after);
            
        }, function () {
            $(".h-card-1").css("height", h_cardH_before);
        }
    );
    $(".h-card-2").hover(function () {
        $(".h-card-2").css("height", h_cardH_after);
            
        }, function () {
            $(".h-card-2").css("height", h_cardH_before);
        }
    );
    $(".h-card-3").hover(function () {
        $(".h-card-3").css("height", h_cardH_after);
            
        }, function () {
            $(".h-card-3").css("height", h_cardH_before);
        }
    );
    $(".h-card-4").hover(function () {
        $(".h-card-4").css("height", h_cardH_after);
            
        }, function () {
            $(".h-card-4").css("height", h_cardH_before);
        }
    );
    $(".h-card-1").click(function () { 
        $(".h-card-1").css("height", h_cardH__after);
    });
    $(".h-card-2").click(function () { 
        $(".h-card-2").css("height", h_cardH__after);
    });
    $(".h-card-3").click(function () { 
        $(".h-card-3").css("height", h_cardH__after);
    });
    $(".h-card-4").click(function () { 
        $(".h-card-4").css("height", h_cardH__after);
    });
    //burger
   let index = 0;
   $(".burger").click(function () { 
    if (index == 0){
        $(".nav").css(
            "transform", "translateX(0)"
        );
        $(".social-web").css(
            "transform", "translateX(0)"
        );
        index = 1;
    }
    else{
        $(".nav").css(
            "transform", "translateX(100%)"
        );
        $(".social-web").css(
            "transform", "translateX(150%)"
        );
        index = 0;
    }
   });

    //scroll-fixed-header
    let headerH = parseInt($(".header").css("height"));
    $(window).scroll(function () { 
        if ($(window).scrollTop() > headerH){
            $(".header-top").css( "transform", "translateY(-100%)");
            $(".header-top").css("padding", "0 10px");
            $(".header-top").css( "transform", "translateY(0)");
            $(".header-top").css("position", "fixed");
            $(".header-top").css("background-color", "#999");
            $(".top-end-line").css("position", "fixed");
        }
        else{
            $(".header-top").css("background-color", "rgba(255, 255, 255, 0)");
            $(".header-top").css("padding", "0");
            $(".header-top").css("position", "relative");
            $(".top-end-line").css("position", "absolute");
        }
    });

    //carousel
    //def - 8D86C9
    //hover - 7871b3
    //active - aea7e4
    let indexCarousel = 0;
    let indexCarouselMax = 0;
    let tCardW = parseInt($(".trainers-slide").css("width"));
    if (tCardW == 1296){
        indexCarousel = 2;
        indexCarouselMax = 2;
    }
    else if(tCardW == 648){
        indexCarousel = 5;
        indexCarouselMax = 5;
    }
    else if(tCardW == 216){
        indexCarousel = 7;
        indexCarouselMax = 7;
    }
    let trainersCardW = parseInt($(".trainers-list-elem").css("width")) + 20; 
    if(indexCarousel <= 0){
        $(".trainers-btn-left").css("background-color", ("#aea7e4"));
    }
    else{
        $(".trainers-btn-left").mousedown(function () {
            if(indexCarousel >0){
                let mlTrack = parseInt($(".trainers-track").css("left"));
                $(".trainers-track").css("left", mlTrack - trainersCardW + "px");
                $(".trainers-btn-right").css("background-color", ("#8D86C9"));
                indexCarousel--;
                if(indexCarousel == 0){
                    $(".trainers-btn-left").css("background-color", ("#aea7e4")); 
                }
            }
        });
        $(".trainers-btn-right").mousedown(function () {
            if(indexCarousel < indexCarouselMax){
                let mlTrack = parseInt($(".trainers-track").css("left"));
                $(".trainers-track").css("left", mlTrack + trainersCardW + "px");
                $(".trainers-btn-left").css("background-color", ("#8D86C9"));
                indexCarousel++;
                if(indexCarousel == indexCarouselMax){
                    $(".trainers-btn-right").css("background-color", ("#aea7e4")); 
                }
                
            }
        });
    }


    //Bottom Carousel
   let bottomCarousel = 3;
   let bottomCarouselMax = 3;
   let servicesCardW = parseInt($(".services-main-card").css("width")) + 50; 
    if(bottomCarousel <= 0){
        $(".s-btn-left").css("background-color", ("#aea7e4"));
    }
    else{
        $(".s-btn-left").mousedown(function () {
            if(bottomCarousel >0){
                let BottomMTrack = parseInt($(".services-track").css("left"));
                $(".services-track").css("left", BottomMTrack - servicesCardW + "px");
                $(".s-btn-right").css("background-color", ("#8D86C9"));
                bottomCarousel--;
                if(bottomCarousel == 0){
                    $(".s-btn-left").css("background-color", ("#aea7e4")); 
                }
            }
        });
        $(".s-btn-right").mousedown(function () {
            if(bottomCarousel < bottomCarouselMax){
                let BottomMTrack = parseInt($(".services-track").css("left"));
                $(".services-track").css("left", BottomMTrack + servicesCardW + "px");
                $(".s-btn-left").css("background-color", ("#8D86C9"));
                bottomCarousel++;
                if(bottomCarousel == bottomCarouselMax){
                    $(".s-btn-right").css("background-color", ("#aea7e4")); 
                }
                
            }
        });
    }
});