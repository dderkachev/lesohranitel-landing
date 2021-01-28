import $ from '../local_modules/jquery/dist/jquery.min'
import { tns } from '../../node_modules/tiny-slider/src/tiny-slider'
import Swiper from '../local_modules/swiper/swiper-bundle.min'
import SimpleBar from '../local_modules/simplebar/dist/simplebar.min'
import yall from '../local_modules/yall-js/dist/yall.min'
import lightbox from '../local_modules/lightbox2/dist/js/lightbox.min'
import { event } from 'jquery'

document.addEventListener("DOMContentLoaded", yall);

$(document).ready(function () {

    lightbox.option({
        albumLabel: "%1 / %2",
        disableScrolling: true
    })

    if($('.slider-info').length) {
        new Swiper('.slider-info-wrapper', {
            slidesPerView: 6,
            loop: true,
            lazy: true,
            allowTouchMove: false,
            preventClicksPropagation: false,
            navigation: {
                nextEl: '.slider-next',
                prevEl: '.slider-prev'
            }
        })
    }

    if($('.region').length) {
        let regions = document.getElementsByClassName(`region`)
        let sliderItemsRegion = document.getElementsByClassName(`slider-info__slide`)
    
        regions = Array.from(regions)
        sliderItemsRegion = Array.from(sliderItemsRegion)
    
        sliderItemsRegion.map((item) => {
            item.addEventListener(`click`, () => {
                const id = item.getAttribute(`id`)
                const formatId = id.toLowerCase()
    
                regions.forEach((region) => {
                    region.classList.remove('active')
                })
    
                document.getElementById(`${formatId}`).classList.add('active')
            })
        })
    }
    
    if($('.slider-views').length) {
        let sliderView = tns({
            container: '.slider-views',
            items: 4,
            loop: false,
            nav: false,
            mouseDrag: true,
            arrowKeys: true,
            edgePadding: 20,
            gutter: 30,
            controlsText: ['','']
        });
    }

    if($('.slider-observer').length) {
        let sliderObserver = tns({
            container: '.slider-observer',
            items: 4,
            loop: false,
            nav: false,
            mouseDrag: true,
            arrowKeys: true,
            edgePadding: 20,
            gutter: 30,
            controlsText: ['','']
        });
    }

    if($('.tab-panel').length) {

        const removeTabActive = () => {
            $('.tab-panel li').removeClass('active');
            $('.tab-content div').removeClass('active');
            $('.section--tab-content').removeClass('active');
            $('.section--tab-content .content-container').removeClass('active');
        }

        const switchTabContent = (index) => {
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
                case (18):
                    $('.section--tab-content').addClass('active');
                    break
                default:
                    $('.section--tab-content').removeClass('active');
                    break
            }
        }

        $('.tab-panel li').on('click', function() {
            var index = $(this).index();
             
            if (!$(this).is('active')) {
                
                removeTabActive()
                switchTabContent(index)

                $(this).addClass('active');
                $('.tab-content').find('.tab-content__item:eq(' + index + ')').addClass('active');
                $(`#content-container-${index + 1}`).addClass('active');
            }
        });
        
        let simpleBar = new SimpleBar(document.getElementById('tab-panel'));

        //hash navigation
        if(window.location.hash.length) {
            const updateTab = () => {
                let hash = window.location.hash
                let regHash = hash.match(/(sub)(\d{1,2})/)
                if (regHash) {
                    let liIndex = regHash[2] - 1
                    let liCount = $('.tab-panel').find('li').length
    
                    if (regHash[2] == 0 || regHash[2] > liCount) {
                        liIndex = 0
                        history.pushState('', document.title, window.location.pathname)
                    }
    
                    let formatHash = liIndex.toString()
    
                    //Очистка active классов и проверка на доп. контент
                    removeTabActive()
                    switchTabContent(liIndex)
    
                    //Скролл tab-panel до нужного элемента
                    $('.tab-panel').find(`li:eq('${formatHash}')`).addClass('active')
                    let scrollEl = simpleBar.getScrollElement()
                    let length = $('.tab-panel li.active').offset().top - $('.tab-panel li#tab-panel-1').offset().top - $('.tab-panel li#tab-panel-1').height()
                    scrollEl.scrollTop = length

                    //Поиск контента таба и присвоение active класса
                    $('.tab-content').find(`.tab-content__item:eq('${formatHash}')`).addClass('active');
                    $(`#content-container-${parseInt(formatHash) + 1}`).addClass('active');

                    //Плавный скролл к контенту табов
                    $('html, body').animate({
                        'scrollTop': $('.tab-panel').offset().top - 100
                    }, 900, 'swing')
                }
            }
            window.addEventListener('load', updateTab)
            window.addEventListener('hashchange', updateTab)
        }
        
        $('.tab-panel li a').on('click', (event) => {
            event.preventDefault()
        })
    }
    
    if ($('.feedback').length) {
        //counters and form total logic
        const radio22 = document.getElementById('radio22')

        const counter1 = document.getElementById('counter1-input')
        const minusBtn1 = document.getElementById('counter1-minus')
        const plusBtn1 = document.getElementById('counter1-plus')

        const counter2 = document.getElementById('counter2-input')
        const minusBtn2 = document.getElementById('counter2-minus')
        const plusBtn2 = document.getElementById('counter2-plus')

        const counter3 = document.getElementById('counter3-input')
        const minusBtn3 = document.getElementById('counter3-minus')
        const plusBtn3 = document.getElementById('counter3-plus')

        const counter4 = document.getElementById('counter4-input')
        const minusBtn4 = document.getElementById('counter4-minus')
        const plusBtn4 = document.getElementById('counter4-plus')

        const counter5 = document.getElementById('counter5-input')
        const minusBtn5 = document.getElementById('counter5-minus')
        const plusBtn5 = document.getElementById('counter5-plus')

        const formCount = document.getElementById('count1')
        const camerCount = document.getElementById('count2')
        const monthCount = document.getElementById('count3')
        const camerTitle = document.getElementById('title2')
        const monthTitle = document.getElementById('title3')

        const select = document.getElementById('select-menu-wrapper')
        const selectInput = document.getElementById('select-input')
        const selectImage = document.getElementById('select-image')
        let selectItems = document.getElementsByClassName('select-menu__item')

        const decl = (number, titles) => {  
            let cases = [2, 0, 1, 1, 1, 2];
            return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
        }

        const total = (value1, value2, mult) => {
            if (mult) {
                let sumForm = Number(value1) * 8000 * Number(value2)
                let format = sumForm.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1.');
                camerCount.innerHTML = value1
                monthCount.innerHTML = value2
                camerTitle.innerHTML = decl(value1, ['камеру', 'камеры', 'камер'])
                monthTitle.innerHTML = decl(value2, ['месяц', 'месяца', 'месяцев'])
                formCount.innerHTML = format
            }
            else {
                let sumForm = Number(value1) * 8900 * Number(value2)
                let format = sumForm.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1.');
                camerCount.innerHTML = value1
                monthCount.innerHTML = value2
                camerTitle.innerHTML = decl(value1, ['камера', 'камеры', 'камер'])
                monthTitle.innerHTML = decl(value2, ['месяц', 'месяца', 'месяцев'])
                formCount.innerHTML = format
            }  
        }

        selectInput.addEventListener('click', () => {
            selectInput.classList.toggle('active')
            select.classList.toggle('active')
        })

        selectImage.addEventListener('click', () => {
            selectInput.classList.toggle('active')
            select.classList.toggle('active')
        })
        
        selectItems = Array.from(selectItems)

        selectItems.map((item) => {
            item.addEventListener('click', () => {
                selectInput.classList.toggle('active')
                select.classList.toggle('active')
                selectInput.value = item.innerText 
            })
        })

        plusBtn1.addEventListener('click', () => {
            counter1.value++

            if (radio22.checked) {
                total(counter1.value, counter2.value, true)
            }
            else {
                total(counter1.value, counter2.value, false)
            }  
        })

        minusBtn1.addEventListener('click', () => {
            counter1.value--

            if (counter1.value < 1) {
                counter1.value = 1
            }

            if (radio22.checked) {
                total(counter1.value, counter2.value, true)
            }
            else {
                total(counter1.value, counter2.value, false)
            } 
        })

        plusBtn2.addEventListener('click', () => {
            counter2.value++

            if (radio22.checked) {
                total(counter1.value, counter2.value, true)
            }
            else {
                total(counter1.value, counter2.value, false)
            }    
        })

        minusBtn2.addEventListener('click', () => {
            counter2.value--

            if (counter2.value < 1) {
                counter2.value = 1
            }

            if (radio22.checked) {
                total(counter1.value, counter2.value, true)
            }
            else {
                total(counter1.value, counter2.value, false)
            }   
        })

        plusBtn3.addEventListener('click', () => {
            counter3.value++
        })

        minusBtn3.addEventListener('click', () => {
            counter3.value--

            if (counter3.value < 1) {
                counter3.value = 1
            }
        })

        plusBtn4.addEventListener('click', () => {
            counter4.value++
        })

        minusBtn4.addEventListener('click', () => {
            counter4.value--

            if (counter4.value < 1) {
                counter4.value = 1
            }
        })

        plusBtn5.addEventListener('click', () => {
            counter5.value++
        })

        minusBtn5.addEventListener('click', () => {
            counter5.value--

            if (counter5.value < 1) {
                counter5.value = 1
            }
        })

        //btn hide/open feedback
        let btnForm = document.getElementById('btn-form')
        let form = document.getElementById('form')

        btnForm.addEventListener('click', () => {
            btnForm.classList.toggle('active')
            form.classList.toggle('active')
            form.scrollIntoView()
        })

        new SimpleBar(select);
    }

    //modal
    let overlay = document.getElementById('overlay')
    let close = document.getElementById('close')
    let modal = document.getElementById('modal')

    close.addEventListener('click', () => {
        modal.classList.remove('show')
        overlay.classList.remove('show')
        modal.classList.add('hide')
        overlay.classList.add('hide')
    })

    const select = document.getElementById('modal-select-menu-wrapper')
    const selectInput = document.getElementById('modal-select-input')
    const selectImage = document.getElementById('modal-select-image')
    let selectItems = document.getElementsByClassName('select-menu__item')

    new SimpleBar(select);

    selectInput.addEventListener('click', () => {
        selectInput.classList.toggle('active')
        select.classList.toggle('active')
    })

    selectImage.addEventListener('click', () => {
        selectInput.classList.toggle('active')
        select.classList.toggle('active')
    })
    
    selectItems = Array.from(selectItems)

    selectItems.map((item) => {
        item.addEventListener('click', () => {
            selectInput.classList.toggle('active')
            select.classList.toggle('active')
            selectInput.value = item.innerText 
        })
    })

    if ($('#btn-form').length) {
        let btnForm = document.getElementById('btn-form')

        btnForm.addEventListener('click', () => {
            overlay.classList.remove('hide')
            modal.classList.remove('hide')
            overlay.classList.add('show')
            modal.classList.add('show')
        })
    }

    if ($('.btn-phone').length) {
        let btn = document.getElementsByClassName('btn-phone')
        
        btn = Array.from(btn)

        btn.map(item => {
            item.addEventListener('click', () => {
                overlay.classList.remove('hide')
                modal.classList.remove('hide')
                overlay.classList.add('show')
                modal.classList.add('show')
            })
        })
    }

    if ($('.modal-submit').length) {

        const region = document.getElementById('modal-select-input')

        //masks
        let inputPhone = document.getElementById('modal-input-phone')
        let maskPhoneOption = {
            mask: '+{7} (000) 000 00 00'
        }

        let inputEmail = document.getElementById('modal-input-mail')

        let inputFirstname = document.getElementById('modal-input-firstname')
        let maskFirstnameOption = {
            mask: /[А-Яа-яЁёA-Za-z]/
        }

        let maskPhone = IMask(inputPhone, maskPhoneOption)
        let maskName = IMask(inputFirstname, maskFirstnameOption)

        const btnSubmit = document.getElementById('btn-modal-submit')
        const modalSubmit = document.getElementById('modal-submit')
        btnSubmit.addEventListener('click', () => {
            modalSubmit.addEventListener('submit', (event) => {
                postData(event)
            })
        })

        const postData = (event) => {
            event.preventDefault()

            let data = {
                region: region.value,
                firstName: maskName._value,
                email: inputEmail.value,
                phone: maskPhone._value
            }

            let url = '127.0.0.1/mail.php'
            
            let formData = new FormData()
            formData.append('data', JSON.stringify(data))

            fetch(url, {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then((data) => console.log(data))
        }
    }
});

