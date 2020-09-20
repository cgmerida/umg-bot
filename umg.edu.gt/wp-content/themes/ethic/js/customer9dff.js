
jQuery('.mega-menu-toggle').on('click',function(){
    "use strict";
    jQuery('#mega-menu-primary').toggleClass( "click_toggle" );
});

/* Method using for append element html in form Login */
jQuery(document).ready(function(){
    "use strict";
    if( jQuery('.widget_theme_my_login').length > 0 ){
        if( jQuery('#wp-admin-bar-my-account').length == 0 ) {
            jQuery("<span>Login to check your class schedule.</span>").insertAfter(jQuery(".widget_theme_my_login .module-title "));
        }
    }
});

/* Method using full width with for max megamenu*/
jQuery(document).ready(function(){
    "use strict";
    jQuery('.mega-sub-menu').css('display', 'block');
    jQuery(".mega-full-container").addClass('tz-megamenu-fullwidth');
    jQuery(".mega-full-container").parent().addClass('tz-megamenu-fullwidth');
    jQuery(".mega-full-container").parent().parent().addClass('tz-megamenu-fullwidth');
});

// Method using for post event
jQuery(document).ready(function(){
    "use strict";
    var color_style_2 = jQuery('.tz-introduce_color_hover_style_2').attr('value');
    var color_out_style_2 = jQuery('.tz-introduce_color_old_style_2').attr('value');


    jQuery( ".tz-introduce-content-style-5 ul li" ).mouseover(function() {
        jQuery(this).css('background-color',color_style_2);
    });
    jQuery( ".tz-introduce-content-style-5 ul li" ).mouseout(function() {
        jQuery(this).css('background-color',color_out_style_2);
    });
});

/* Method using for show or hidden form forget password and register account in forum */

jQuery(document).ready(function(){
    "use strict";
    jQuery(".tz-user-register-legend").click(function(){
        jQuery(".tz-user-register").fadeToggle();
    });
    jQuery(".tz-user-lost-password-legend").click(function(){
        jQuery(".tz-lost-password").fadeToggle();
    });

});


jQuery(window).on('load resize', function() {
    "use strict";
    jQuery('.tz-training-images').each(function(){
        var $heightElement = jQuery(this).height();
        var $heightText = jQuery(this).find('.tz-training-content').height();

        var $padding       = ( $heightElement - $heightText ) / 2;
        jQuery(this).find('.tz-training-content').css("top",$padding+'px');
    })

    var $heightAuthor  = jQuery('.tz-single-author').height();

    var $heightBanner        = jQuery('.tz-items').height();
    var $heightContentBanner = jQuery('.tz-banner-content').height();
    var $topContentBanner  =  ($heightBanner - $heightContentBanner) / 2;

    if(jQuery('.tz-header-2').length > 0 || jQuery('.tz-header-4').length > 0 || jQuery('.tz-header-6').length > 0){
        jQuery('.tz-banner-content').css('top',$topContentBanner);
        jQuery('.tz-button-right').css('top','40%');
        jQuery('.tz-button-left').css('top','40%');
    }

});
//jQuery()
jQuery(window).load(function(){
    jQuery('.tz-header-home-1').css({'display':'block'});
});
jQuery(window).on('load resize scroll',function() {
    "use strict";
    var $width_Windows = jQuery(window).width(); // This is width of windows
    var height_header  = jQuery('.tz-header').outerHeight();
    /*Sidebar header*/
    if(jQuery('.tz-sign-in').length > 0){
        var $height_Tz_Sign_In = jQuery('.tz-sign-in').outerHeight();
    }else{
        var $height_Tz_Sign_In = 0;
    }
    /*  Method for scroll Header 01 */
    if(jQuery(window).scrollTop() > 0){
        jQuery('.tz-header-1').addClass('tz-header-eff');
    }else{
        jQuery('.tz-header-1').removeClass('tz-header-eff');
    }
    /*  Method for scroll Header Home01 */
    var $affixTopBanner01;
    if(jQuery(".rev_slider_wrapper").length){
        $affixTopBanner01 = jQuery(".rev_slider_wrapper").height();
    }else{
        $affixTopBanner01 = jQuery(window).height();
    }

    var $heightHeaderHome01 = jQuery('.tz-header-home-1').height();

    /*  Header 1- check admin toolbar */
    if (jQuery('.tz-header').hasClass('tzAdmin_bar')) {
        if($width_Windows >= 768){
            jQuery('.tz-header-home-1').css({'top':$affixTopBanner01,'margin-top':-$heightHeaderHome01-32});
        }else if($width_Windows < 768 && $width_Windows >= 600){
            jQuery('.tz-header-home-1').css({'top':$affixTopBanner01,'margin-top':-$heightHeaderHome01-46});
        }else{
            jQuery('.tz-header-home-1').css({'top':$affixTopBanner01,'margin-top':-$heightHeaderHome01});
        }
        if($width_Windows <= 600){
            if(jQuery(window).scrollTop() > 0){
                jQuery('.tz-liner-logo.tzAdmin_bar').css('top',0);
            }else{
                jQuery('.tz-liner-logo.tzAdmin_bar').css('top',46);
            }
        }

    }else{
        jQuery('.tz-header-home-1').css({'top':$affixTopBanner01,'margin-top':-$heightHeaderHome01});
    }

/*  Scroll header-1 */
    if (jQuery(window).scrollTop() >= ($affixTopBanner01 - $heightHeaderHome01+$height_Tz_Sign_In)) {
        jQuery('.tz-header-home-1').css({'top':0,'display':'block','margin-top':'0'});
        jQuery('.tz-header-home-1,.tz-liner-logo').addClass('affix-eff');
    }
    else {
        jQuery('.tz-header-home-1,.tz-liner-logo').removeClass('affix-eff');
    }



    /*  Method for scroll Header Home-02 */
    if(jQuery('.tz-header-2').length > 0){
        jQuery('body').css('margin-top',height_header);
        if(jQuery(window).width()>991){
            if(jQuery(this).scrollTop() > ($height_Tz_Sign_In)){
                jQuery('.tz-header-2').addClass('tz-header-2-eff');
                jQuery('.tz-header-2.tz-header-2-eff .tz-sign-in').css('margin-top',-$height_Tz_Sign_In);
            }
            else{
                jQuery('.tz-header-2').removeClass('tz-header-2-eff');
                jQuery('.tz-header-2 .tz-sign-in').css('margin-top',0);
            }
        }
    }

    /*  Method for scroll Header Home-03 */
    if(jQuery('.tz-header-3').length > 0){
        //if(jQuery('.tz-sign-in').length > 0){
        //    var height_sign_in = jQuery('.tz-sign-in').height();
        //}else{
        //    var height_sign_in = 0;
        //}
        if(jQuery(this).scrollTop() > ($height_Tz_Sign_In+15)){
            jQuery('.tz-header-3').addClass('tz-header-3-eff');
            jQuery('body').css('margin-top',$height_Tz_Sign_In);
            jQuery('.tz-banner .tz-header-3').css('top',-$height_Tz_Sign_In);
        }
        else{
            jQuery('.tz-header-3').removeClass('tz-header-3-eff');
            jQuery('body').css('margin-top',0);
            jQuery('.tz-banner .tz-header-3').css('top',0);
        }
    }

    /*  Method for scroll Header Home-04 */

    if(jQuery('.tz-header-4').length > 0){
        jQuery('body').css('margin-top',height_header);
        if(jQuery(this).scrollTop() > $height_Tz_Sign_In +15 ){
            jQuery('.tz-header-4').addClass('tz-header-4-eff');
            jQuery('.tz-header-4.tz-header-4-eff .tz-sign-in').css('margin-top',-$height_Tz_Sign_In);
        }else{
            jQuery('.tz-header-4').removeClass('tz-header-4-eff');
            jQuery('.tz-header-4 .tz-sign-in').css('margin-top',0);
        }
    }

    /*  Method for scroll Header Home-05 */

    if(jQuery('.tz-header-5').length > 0){
        if (jQuery(this).scrollTop() > $height_Tz_Sign_In) {
            jQuery('.tz-header-5').addClass('tz-header-5-eff');
            jQuery('.tz-header-5.tz-header-5-eff .tz-sign-in').css('margin-top',-$height_Tz_Sign_In);
        }else{
            jQuery('.tz-header-5').removeClass('tz-header-5-eff');
            jQuery('.tz-header-5 .tz-sign-in').css('margin-top',0);
        }
    }
    /*  Method for scroll Header Home-06 */

    if(jQuery('.tz-header-6').length > 0){
        jQuery('body').css('margin-top',height_header);
        if(jQuery('.tz-sign-in').length > 0){
            jQuery('.tz-header-6 .tz-logo').css('top',-8);
            if(jQuery(this).scrollTop() > $height_Tz_Sign_In){
                jQuery('.tz-header-6').addClass('tz-header-6-eff');
                jQuery('.tz-header-6.tz-header-6-eff .tz-sign-in').css('margin-top',-$height_Tz_Sign_In);
            }
            else{
                jQuery('.tz-header-6').removeClass('tz-header-6-eff');
                jQuery('.tz-header-6 .tz-sign-in').css('margin-top',0);
            }
        }else{
            jQuery('.tz-header-6 .tz-logo').css('top',0);
            if(jQuery(this).scrollTop() > 0){
                jQuery('.tz-header-6').addClass('tz-header-6-eff')
            }
            else{
                jQuery('.tz-header-6').removeClass('tz-header-6-eff')
            }
        }
    }
    /*  Method for scroll Header Home-07 */
    if(jQuery('.tz-header-7').length > 0){
        if(jQuery(this).scrollTop() > $height_Tz_Sign_In){
            jQuery('.tz-header-7').addClass('tz-header-7-eff');
            jQuery('.tz-header-7.tz-header-7-eff .tz-sign-in').css('margin-top',-$height_Tz_Sign_In);
        }
        else{
            jQuery('.tz-header-7').removeClass('tz-header-7-eff');
            jQuery('.tz-header-7 .tz-sign-in').css('margin-top',0);
        }
    }

});

jQuery(window).on('load resize',function(){
    "use strict";

    /* Method for menu offcavas-menu for page Canvans-Menu */
    if(jQuery('.tz-header-4').length > 0){
            if(jQuery(window).width() > 991){
                jQuery('.tz-button-toggle-canvans').on('click',function(){
                    jQuery('.tz-offcavans-menu-customer').toggleClass('tz-offcavans-menu-left');
                    jQuery('.tzscrollable').toggleClass('tz-offcavans-menu-eff-customer');
                });
                jQuery('.tz-offcanvas-close').on('click',function(){
                    jQuery('.tz-offcavans-menu-customer').removeClass('tz-offcavans-menu-left');
                    jQuery('.tzscrollable').removeClass('tz-offcavans-menu-eff-customer');
                });
            }else{
                jQuery('.tz-button-toggle-canvans').on('click',function(){
                    jQuery('.tz-offcavans-menu-customer').toggleClass('tz-offcavans-menu-right');
                    jQuery('.tzscrollable').toggleClass('tz-offcavans-menu-eff');
                });
                jQuery('.tz-offcanvas-close').on('click',function(){
                    jQuery('.tz-offcavans-menu-customer').removeClass('tz-offcavans-menu-right');
                    jQuery('.tzscrollable').removeClass('tz-offcavans-menu-eff');
                });
            }

    } else{

        jQuery('.tz-button-toggle-canvans').on('click',function(){
            jQuery('.tz-offcavans-menu').toggleClass('tz-offcavans-menu-right');
            jQuery('.tzscrollable').toggleClass('tz-offcavans-menu-eff');
            //console.log(jQuery('.tz-offcavans-menu').position().left);
        });
        jQuery('.tz-offcanvas-close').on('click',function(){
            jQuery('.tz-offcavans-menu').removeClass('tz-offcavans-menu-right');
            jQuery('.tzscrollable').removeClass('tz-offcavans-menu-eff');
            //console.log(jQuery('.tz-offcavans-menu').position().left);
        });
        //console.log(jQuery('.tz-offcavans-menu').position().left);
    }


    /* Method for button search */
    jQuery('.tz-header .tz-search').on('click',function(){
        jQuery('.tz-content-search').addClass('tz-content-search-eff');
        jQuery('.tz-content-search .tz-search-input').focus();
    });
    jQuery('.tz-form-close').on('click',function(){
        jQuery('.tz-content-search').removeClass('tz-content-search-eff');
    });


    /* ethic_owlCarousel for Courses*/

    jQuery('.tz-tab-slider').ethic_owlCarousel({
        loop:false,
        nav: false,
        smartSpeed: 500,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            992:{
                items:1
                },
            1200:{
                items:1
                },
            1300:{
                items:1
                }
            }
    });
    jQuery('.tz-cources-prev').on('click',function(){
        jQuery(".tz-tab-slider").trigger('prev');
    }) ;
    jQuery(".tz-cources-next").on('click',function(){
        jQuery(".tz-tab-slider").trigger('next');
    }) ;

    /* ethic_owlCarousel for section in Event-Single-Page*/

    jQuery('.tz-gallery-wrapper').ethic_owlCarousel({
        loop:false,
        nav: false,
        autoplay:true,
        smartSpeed: 500,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            992:{
                items:1
            },
            1200:{
                items:1
            },
            1300:{
                items:1
            }
        }
    });
    jQuery('.tz-cources-prev').on('click',function(){
        jQuery(".tz-gallery-wrapper").trigger('prev');
    }) ;
    jQuery(".tz-cources-next").on('click',function(){
        jQuery(".tz-gallery-wrapper").trigger('next');
    }) ;


    /* ethic_owlCarousel for section Page Social-Activity */

    jQuery('.tz-connect-people').ethic_owlCarousel({
        loop:false,
        nav: false,
        autoplay:true,
        smartSpeed: 500,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            992:{
                items:1
            },
            1200:{
                items:1
            },
            1300:{
                items:1
            }
        }
    });

    /* ethic_owlCarousel for Slider Banner */

    jQuery('.tz-slider-banner').ethic_owlCarousel({
        loop:false,
        nav: false,
        autoplay:false,
        smartSpeed: 500,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            992:{
                items:1
            },
            1200:{
                items:1
            },
            1300:{
                items:1
            }
        }
    });

    jQuery(".tz-button-left").on('click',function(){
        jQuery(".tz-slider-banner").trigger('prev');
    }) ;
    jQuery(".tz-button-right").on('click',function(){
        jQuery(".tz-slider-banner").trigger('next');
    }) ;

    /* Method for video */
    jQuery('.tzautoplay').on('click',function(){
        var $_this = jQuery(this);
        var myVideo = $_this.parents('.tz-video').find('.videoID')[0];
        jQuery(this).hide();
        $_this.parents('.tz-video').find('.tz-video-content h3').css('opacity',0);
        $_this.parents('.tz-video').find('.tz-video-content small').css('opacity',0);
        $_this.parents('.tz-video').find('.tz-video-content span').css('opacity',0);
        $_this.parents('.tz-video').find('.tz-video-content strong').css('opacity',0);
        $_this.parents('.tz-video').find('.bg-video').hide();
        $_this.parents('.tz-video').find('.bg-video-style-5').hide();
        $_this.parents('.tz-video').find('.bg-video-style-7').hide();
        $_this.parents('.tz-video').find('.tzpause').show().css('opacity',0);
        if (myVideo.paused)
            myVideo.play();

    }) ;
    jQuery('.tzpause').on('click',function(){
        jQuery(this).hide();
        var $_this = jQuery(this);
        var myVideo = $_this.parents('.tz-video').find('.videoID')[0];
        $_this.parents('.tz-video').find('.tz-video-content h3').css('opacity',1);
        $_this.parents('.tz-video').find('.tz-video-content small').css('opacity',1);
        $_this.parents('.tz-video').find('.tz-video-content span').css('opacity',1);
        $_this.parents('.tz-video').find('.tz-video-content strong').css('opacity',1);
        $_this.parents('.tz-video').find('.bg-video').show();
        $_this.parents('.tz-video').find('.bg-video-style-5').show();
        $_this.parents('.tz-video').find('.bg-video-style-7').show();
        $_this.parents('.tz-video').find('.tzautoplay').show();
        if (myVideo.play)
            myVideo.pause();
    });
});











