// jQuery
if (typeof $ !== 'undefined') {
    $(document).ready(function () {
        if ($(".banner--welcome").length >= 1) {
            var contents = document.querySelectorAll('.banner-bottom .banner-bottom__item');
            function showItemContent (index) {
                for (let i = 0; i < contents.length; i++) {
                    var content = contents[i];
                    content.classList.remove('active');
                }
                contents[index].classList.add('active');
            } 
            $(".banner--welcome").owlCarousel({
                items: 1,
                loop: true,
                autoplay: true,
                nav: true,
                navText: ['<svg width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"></path><path d="M8.59,16.59L13.17,12L8.59,7.41L10,6l6,6l-6,6L8.59,16.59z"></path></svg>', '<svg width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"></path><path d="M8.59,16.59L13.17,12L8.59,7.41L10,6l6,6l-6,6L8.59,16.59z"></path></svg>']
            });
            $(".banner--welcome").on('changed.owl.carousel', function(event) {
                showItemContent(event.page.index)
            });
            for (let i = 0; i < contents.length; i++) {
                var button = contents[i];
                button.addEventListener('click', function () {
                    var buttons = document.querySelectorAll('.banner--welcome .owl-dots button');
                    console.log(buttons);
                    showItemContent(i);
                    if(window.innerWidth > 767) {
                        buttons[i].click();
                    }
                })
            }
        }
        if ($(".ip__slider__items").length >= 1) {
            $(".ip__slider__items").owlCarousel({
                loop: true,
                nav: true,
                navText: ['', '<img src="assets/images/icons/play.svg" />'],
                dots: false,
                margin: 15,
                responsive: {
                    0: {
                        items: 1,
                        stagePadding: 20
                    },
                    350: {
                        items: 1,
                        stagePadding: 35
                    },
                    500: {
                        items: 2,
                        stagePadding: 35
                    },
                    992: {
                        items: 3,
                        stagePadding: 35
                    },
                    1200: {
                        items: 4,
                        stagePadding: 40
                    },
                    // 768: {
                    //     items: 3.3,
                    // },
                    // 1200: {
                    //     items: 4.3
                    // }
                }
            });
        }
        if ($(".discover-trades .slider__items").length >= 1) {
            $(".discover-trades .slider__items").owlCarousel({
                loop: true,
                nav: false,
                responsive: {
                    0: {
                        items: 1,
                        margin: 30
                    },
                    576: {
                        items: 1,
                        stagePadding: 50,
                        margin: 20
                    },
                    1200: {
                        items: 1,
                        stagePadding: 200,
                        margin: 35
                    },
                    1400: {
                        items: 1,
                        stagePadding: 240,
                        margin: 35
                    },
                }
            });
            $('.discover-trades .owl-dot').each(function (i) {
                $(this).html('0' + (i + 1));
            })
        }
        if ($(".discover-news .news__items.one").length >= 1) {
            $(".discover-news .news__items.one").owlCarousel({
                loop: true,
                items: 1,
                dots: false,
                nav: true,
                navText: ['', '<img src="assets/images/icons/next-icon.svg" />'],
                responsive: {
                    0: {
                        items: 1,
                    },
                    768: {
                        items: 2,
                        margin: 20,
                        nav: false,
                    },
                    992: {
                        items: 3,
                        loop: false,
                        margin: 30,
                        mouseDrag: false
                    },
                    1200: {
                        items: 3,
                        margin: 40,
                        mouseDrag: false
                    }
                }
            });
        }
        if ($(".discover-news .news__items.two").length >= 1) {
            $(".discover-news .news__items.two").owlCarousel({
                loop: true,
                items: 1,
                dots: false,
                nav: true,
                navText: ['', '<img src="assets/images/icons/next-icon.svg" />'],
                responsive: {
                    0: {
                        items: 1,
                    },
                    768: {
                        items: 2,
                        margin: 20,
                    },
                    992: {
                        items: 3,
                        loop: false,
                        margin: 30,
                        mouseDrag: false
                    },
                    1200: {
                        items: 4,
                        margin: 30,
                        nav: false,
                        mouseDrag: false
                    }
                }
            });
        }


        $('.play-button').magnificPopup({
            type: 'iframe'
            // other options
        });

    })
}

// Javascript 
!function () {
    // Utilities
    var $ = function (selector, areAll) {
        var all = document.querySelectorAll(selector)
        var single = document.querySelector(selector)
        return areAll ? all : single
    }
    var getData = function (url, callback) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.send();

        xhr.onload = function () {
            if (xhr.status === 200) {
                callback(xhr.responseText);
            } else {
                alert(`Error ${xhr.status}: ${xhr.statusText}`);
            }
        };
    }

    // global selectors
    var body = document.body;

    // var
    function App() {

        function WelcomeSlider() {
            var buttons = $('.banner--welcome .owl-dot', 1);
            if(!buttons.length) return
            var arrows = $('.banner--welcome .owl-nav button', 1);
            var contents = $('.banner-bottom .banner-bottom__item', true);
            var currentIndex = 0;

            this.showItemContent = function (index) {
                for (let i = 0; i < contents.length; i++) {
                    var content = contents[i];
                    content.classList.remove('active');
                }
                contents[currentIndex].classList.add('active');
            }

            this.eventListeners = function () {
                for (let i = 0; i < buttons.length; i++) {
                    var button = buttons[i];
                    button.addEventListener('click', function () {
                        currentIndex = i;
                        this.showItemContent();
                    }.bind(this))
                }
                for (let i = 0; i < arrows.length; i++) {
                    let arrow = arrows[i];
                    arrow.addEventListener('click', function () {
                        if (arrow.classList.contains('owl-next')) {
                            if (1 >= currentIndex) {
                                currentIndex++;
                            }
                        } else {
                            if (0 < currentIndex) {
                                currentIndex--;
                            }
                        }
                        this.showItemContent();

                    }.bind(this));
                }
            }

            this.reset = function () {
                this.showItemContent();
            }
            this.init = function () {
                this.reset();
                this.eventListeners();
            }
            this.init();
        }

        function CustomHeader(header = document.querySelector('header'), maxWidth = 991) {
            this.eventListeners = function () {
                var menuIcon = header.querySelector('.header__menu__icon');
                var nav = header.querySelector('.header__nav');
                menuIcon.addEventListener('click', function () {
                    nav.classList.toggle('header__nav--active');
                    this.classList.toggle('header__menu__icon--active');
                });
            }

            this.init = function () {
                this.eventListeners();
            }
            this.init();
        }


        // Header
        new CustomHeader($('header'));

        // Modal
        if(document.getElementById('modal-1')) {
            var myModal = new bootstrap.Modal(document.getElementById('modal-1'), {
                keyboard: false,
                backdrop: 'static'
            });
        }

        // Welcome slider show active slider content
        setTimeout(function () {
            // new WelcomeSlider();
        }, 1500)

    }




    document.addEventListener('DOMContentLoaded', function () {
        new App();

    })
}()
