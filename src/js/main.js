import $ from '../local_modules/jquery/dist/jquery.min'
import { tns } from '../../node_modules/tiny-slider/src/tiny-slider'

$(document).ready(function(){

    let regions = document.getElementsByClassName('region')
    let sliderItemsRegion = document.getElementsByClassName('slider-info__slide')

    regions = Array.from(regions)
    sliderItemsRegion = Array.from(sliderItemsRegion)

    sliderItemsRegion.map(item => {
        item.addEventListener('click', () => {
            let id = item.getAttribute('id')
            let formatId = id.toLowerCase()

            regions.forEach(region => {
                region.classList.remove('active')
            })

            document.getElementById(`${formatId}`).classList.add('active')
        })
    })

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
            $('.section--tab-content').removeClass('active');
            $('.section--tab-content .content-container').removeClass('active');
            
            switch (index + 1) {
                case (4):
                    $('.section--tab-content').addClass('active');
                    break
                case (5):
                    $('.section--tab-content').addClass('active');
                    break
                case (7):
                    $('.section--tab-content').addClass('active');
                    break
                case (8):
                    $('.section--tab-content').addClass('active');
                    break
                case (10):
                    $('.section--tab-content').addClass('active');
                    break
                case (14):
                    $('.section--tab-content').addClass('active');
                    break
                case (17):
                    $('.section--tab-content').addClass('active');
                    break
                default:
                    $('.section--tab-content').removeClass('active');
                    break
            }

            $(this).addClass('active');
            $('.tab-content').find('.tab-content__item:eq(' + index + ')').addClass('active');
            $(`#content-container-${index + 1}`).addClass('active');
        }
    });

    new SimpleBar(document.getElementById('tab-panel'));

});

