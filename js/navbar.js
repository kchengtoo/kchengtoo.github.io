$(document).ready(function () {
	setTimeout (function() {
		navbarScroll();
		navbarPage();
	}, 800);
});

function navbarPage() {
	// console.log(window.location.href);
	$(function() {
		$('.nav-a').each(function() {
			if ($(this).prop('href') == window.location.href) {
				$(this).addClass('current-page');
				$(this).removeClass('text-muted').addClass('text-dark');
			}
		});
	});
}


function navbarScroll() {
	'use strict';
    
    var c, currentScrollTop = 0, 
    navbar = $('.nav-header');
  	
    $(window).scroll(function() {
        var a = $(window).scrollTop();
        var b = navbar.height();
       
        currentScrollTop = a;

        if (window.innerWidth > 767) {
	    	if (c < currentScrollTop && a > b + b) {
	          	navbar.addClass("scroll-up");
	        } 
	        else if (c > currentScrollTop && !(a <= b)) {
	          	navbar.removeClass("scroll-up");            
	        }
	        if(currentScrollTop > 86) {
	            navbar.addClass("scrolling");
	        } 
	        else {
	        	navbar.removeClass("scrolling");
	        }
	        c = currentScrollTop;
	    }

    });

    $(window).resize(function() {
    	if (window.innerWidth > 767) {
	    	navbar.removeClass("scroll-up");  
	    	navbar.addClass("scrolling");
	    	// console.log("YES");
	    	// console.log(window.innerWidth);
	    }
    });
}