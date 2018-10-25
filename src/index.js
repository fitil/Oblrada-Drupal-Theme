import "bootstrap"
import "./sass/style.sass"
import PhotoSwipe from "photoswipe"
import PhotoSwipeUIDefault from "photoswipe/dist/photoswipe-ui-default"
import 'slick-carousel'

jQuery('.carousel-inner .item:first-child').addClass('active')
jQuery('.carousel-indicators li:first-child').addClass('active')

var openPhotoSwipe = function () {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    var items = [
        {
            src: 'https://farm2.staticflickr.com/1043/5186867718_06b2e9e551_b.jpg',
            w: 964,
            h: 1024
        },
        {
            src: 'https://farm7.staticflickr.com/6175/6176698785_7dee72237e_b.jpg',
            w: 1024,
            h: 683
        }
    ];

    // define options (if needed)
    var options = {
        // history & focus options are disabled on CodePen        
        history: false,
        focus: false,

        showAnimationDuration: 0,
        hideAnimationDuration: 0

    };

    var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUIDefault, items, options);
    gallery.init();
};



//document.getElementById('btn').onclick = openPhotoSwipe;


Drupal.behaviors.exampleModule = {
        attach: function (context, settings) {
            // Code to be run on page load, and
            // on ajax load added here


            jQuery(document).ready(() => {

                (function ($) {
                    $('.view-karusel .view-content').slick({
                        slidesToShow: 6,
                        slidesToScroll: 1
                    });
                    
                }(jQuery));

                let element = document.getElementById("calendar")

                let myCalendar = jsCalendar.new(element, "now", {
                    "navigatorPosition": "left",
                    "zeroFill": "true",
                    "monthFormat": "month YYYY",
                    "fdotw": "2",
                    "language": "uk",
                    "firstDayOfTheWeek": "2"
                })

                myCalendar.onDateClick(function (event, date) { 
                    console.log(date)
                })


            })
        }
    }