import $ from '../local_modules/jquery/dist/jquery.min'
import { tns } from  '../../node_modules/tiny-slider/src/tiny-slider'

$(document).ready(function(){
  var sliderView = tns({
      container: '.slider-views',
      items: 1,
      loop: false,
      nav: false,
      mouseDrag: true,
      arrowKeys: true,
      controlsText: ['',''],
      responsive: {
        640: {
          edgePadding: 20,
          gutter: 20,
          items: 2
        },
        700: {
          gutter: 30
        },
        900: {
          items: 4
        }
      }
  });

  var sliderObserver = tns({
      container: '.slider-observer',
      items: 1,
      loop: false,
      nav: false,
      mouseDrag: true,
      arrowKeys: true,
      controlsText: ['',''],
      responsive: {
        640: {
          edgePadding: 20,
          gutter: 20,
          items: 2
        },
        700: {
          gutter: 30
        },
        900: {
          items: 4
        }
      }
  });

  var sliderInfo = tns({
      container: '.slider-info',
      items: 1,
      loop: false,
      nav: false,
      mouseDrag: true,
      arrowKeys: true,
      controlsText: ['',''],
      responsive: {
        640: {
          items: 2
        },
        900: {
          items: 6
        }
      }
  });

  $('.tab-panel li').on('click', function() {
    var index = $(this).index();

    if (!$(this).is('active')) {
      $('.tab-panel li').removeClass('active');
      $('.tab-content div').removeClass('active');

      $(this).addClass('active');
      $('.tab-content').find('.tab-content__item:eq(' + index + ')').addClass('active');
    }
  });
});