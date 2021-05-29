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