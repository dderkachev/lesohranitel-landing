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
            edgePadding: 20,
            gutter: 20,
            items: 2
          },
          700: {
            gutter: 30
          },
          900: {
            gutter: 25,
            items: 6
          }
        }
    });
});