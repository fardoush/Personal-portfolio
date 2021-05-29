var windw = $(window);
/*
|--------------------------------------------------------------------------
	Side Bar Menu
|--------------------------------------------------------------------------
*/

$(document).on('click', '.mobile-nav-toggle', function(e) {
    $('body').toggleClass('mobile-nav-active');
    $('.mobile-nav-toggle span').toggleClass('.menu-icon');
});

$(document).click(function(e) {
    var container = $(".mobile-nav-toggle");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
            $('body').removeClass('mobile-nav-active');
            $('.mobile-nav-toggle span').toggleClass('.menu-icon');
        }
    }
});






/*
|--------------------------------------------------------------------------
    Navigation active state on scroll
|--------------------------------------------------------------------------
*/


var nav_sections = $('section');
var main_nav = $('.nav-menu, .mobile-nav');

$(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop() + 200;

    nav_sections.each(function() {
        var top = $(this).offset().top,
            bottom = top + $(this).outerHeight();

        if (cur_pos >= top && cur_pos <= bottom) {
            if (cur_pos <= bottom) {
                main_nav.find('li').removeClass('active');
            }
            main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
        }
        if (cur_pos < 300) {
            $(".nav-menu ul:first li:first").addClass('active');
        }
    });
});

/*
|--------------------------------------------------------------------------
	Text typing text
|--------------------------------------------------------------------------
*/
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function() {
        that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff;}";
    document.body.appendChild(css);
};



/*
|--------------------------------------------------------------------------
	COLOR SCHEME
|--------------------------------------------------------------------------
*/

const styleToggler = document.querySelector(".style-toggler");
styleToggler.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
});

// hide style-switcher on scroll

window.addEventListener("scroll", () => {
    if (document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open")
    }
});



// text-color 
$('ul.text-colors li').click(function() {
    $('.icon-bg-color,.skills,.style-toggler,#myBtn').css('background-color', $(this).css('color'));


    $('.typewrite,.color,.owl-dots').css('color', $(this).css('color'));

});

/*
|--------------------------------------------------------------------------
	Navbar Scroll
|--------------------------------------------------------------------------
*/

$(function() {
    var navbar = $('.header-inner');
    $(window).scroll(function() {
        if ($(window).scrollTop() <= 40) {
            navbar.removeClass('navbar-scroll');
        } else {
            navbar.addClass('navbar-scroll');
        }
    });

    //toggle menu/navbar script
    $('.navbar-toggler').click(function() {
        $('.navbar-nav').toggleClass("active");
        $('.navbar-toggler i').toggleClass("active");

    });
});

/*
|--------------------------------------------------------------------------
	SMOOTH SCROLL
|--------------------------------------------------------------------------
*/


// Select all links with hashes
$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function() {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });


/*
|--------------------------------------------------------------------------
	Text typing text
|--------------------------------------------------------------------------
*/
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function() {
        that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff;}";
    document.body.appendChild(css);
};


/*
|--------------------------------------------------------------------------
	 Skill / Progress Bar
|--------------------------------------------------------------------------
*/


/// progress bar
$(window).scroll(function() {
    var hT = $('#skill-bar-wrapper').offset().top,
        hH = $('#skill-bar-wrapper').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    if (wS > (hT + hH - 1.4 * wH)) {
        jQuery(document).ready(function() {
            jQuery('.skillbar-container').each(function() {
                jQuery(this).find('.skills').animate({
                    width: jQuery(this).attr('data-percent')
                }, 5000); // 5 seconds
            });
        });
    }
});




/*
|--------------------------------------------------------------------------
	Counter
|--------------------------------------------------------------------------
*/

$(".counter").counterUp({
    delay: 10,
    time: 1000,

});


/*
|--------------------------------------------------------------------------
	isotope Filter Start
|--------------------------------------------------------------------------
*/

var myTheme = window.myTheme || {},
    $win = $(window);

myTheme.Isotope = function() {
    //4 column layout
    var isotopeContainer = $('.isotopeContainer');
    if (!isotopeContainer.length || !jQuery().isotope) return;
    $win.on('load', function() {
        isotopeContainer.isotope({
            itemSelector: '.isotopeSelector'
        });
        $('.isotopeFilters').on('click', 'a', function(e) {
            $('.isotopeFilters').find('.active').removeClass('active');
            $(this).parent().addClass('active');
            var filterValue = $(this).attr('data-filter');
            isotopeContainer.isotope({ filter: filterValue });
            e.preventDefault();
        });
    });
};
myTheme.Isotope();

/*
|--------------------------------------------------------------------------
    Lighbox
|--------------------------------------------------------------------------
*/
lightbox.option({
    'albumLabel': "Item %1 of %2",
    'positionFromTop': 40,
    'resizeDuration': 500,
    'disableScrolling': false
});

if ($(document.body).width() > 1200) {
    lightbox.option({
        'disableScrolling': true
    });
}

windw.resize(function() {

    if ($(document.body).width() < 1200) {
        $(".lb-dataContainer").css("width", "80%");
        $(".lb-dataContainer").css("height", "80%");
        $(".lb-outerContainer").css("width", "80%");
        $(".lb-outerContainer").css("height", "80%");
        $(".lb-image").css("width", "100%");
        $(".lb-image").css("height", "100%");
    }

});
/*
|--------------------------------------------------------------------------
	owl carousel
|--------------------------------------------------------------------------
*/

var owl = $('#testimonial-carousel');
owl.owlCarousel({
    autoplay: true,
    loop: true,
    nav: false,
    dots: true,
    margin: 10,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        960: {
            items: 2
        },

        1200: {
            items: 2
        }
    }
});

var owl2 = $('#blog-carousel');
owl2.owlCarousel({
    autoplay: false,
    loop: true,
    nav: false,
    dots: true,
    margin: 10,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        960: {
            items: 3
        },

        1200: {
            items: 3
        }
    }
});



/*
|--------------------------------------------------------------------------
	Window scroll button
|--------------------------------------------------------------------------
*/
// <!-- get the btn -->

mybutton = document.getElementById("myBtn");
window.scroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        myButton.style.display = "block";

    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}