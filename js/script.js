
var ww = document.body.clientWidth;

$(document).ready(function() {
	$(".nav li a").each(function() {
		if ($(this).next().length > 0) {
			$(this).addClass("parent");
		};
	})
	
	$(".toggleMenu").click(function(e) {
		e.preventDefault();
		$(this).toggleClass("active");
		$(".nav").toggle();
	});
	adjustMenu();
})

$(window).bind('resize orientationchange', function() {
	ww = document.body.clientWidth;
	adjustMenu();
});

var adjustMenu = function() {
	if (ww < 1040) {
		$(".toggleMenu").css("display", "inline-block");
		if (!$(".toggleMenu").hasClass("active")) {
			$(".nav").hide();
		} else {
			$(".nav").show();
		}
		$(".nav li").unbind('mouseenter mouseleave');
		$(".nav li a.parent").unbind('click').bind('click', function(e) {
			e.preventDefault();
			$(this).parent("li").toggleClass("hover");
		});
	} 
	else if (ww >= 1040) {
		$(".toggleMenu").css("display", "none");
		$(".nav").show();
		$(".nav li").removeClass("hover");
		$(".nav li a").unbind('click');
		$(".nav li").unbind('mouseenter mouseleave').bind('mouseenter mouseleave', function() {
		 	$(this).toggleClass('hover');
		});
	}
}

if (ww < 1040) {
  $('#menu_punkts li:nth-child(n+4)').hide();
} else {
  $('#menu_punkts li:nth-child(n+10)').hide();
}

$('.name-header-leftmenu--open').click(function() {
  $('.name-header-leftmenu--open').toggleClass('open-list');
  if (ww < 1040) {
    $('#menu_punkts li:nth-child(n+4)').slideToggle();
  } else {
    $('#menu_punkts li:nth-child(n+10)').slideToggle();
  }
})

$('.input-title').next().hide();
$('.input-title').click(function() {
  $(this).next().slideToggle();
  $(this).toggleClass('input-title--open');
})
