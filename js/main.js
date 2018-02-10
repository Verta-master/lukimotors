/*
 * jQuery SelectBox Styler v1.0.1
 * http://dimox.name/styling-select-boxes-using-jquery-css/
 *
 * Copyright 2012 Dimox (http://dimox.name/)
 * Released under the MIT license.
 *
 * Date: 2012.10.07
 *
 */
!function(e){e.fn.selectbox=function(){e(this).each(function(){function t(){var t=s.find("option"),o=t.filter(":selected"),l=t.filter(":first").text();o.length&&(l=o.text());var d="";for(i=0;i<t.length;i++){var c="",n=' class="disabled"';t.eq(i).is(":selected")&&(c=' class="selected sel"'),t.eq(i).is(":disabled")&&(c=n),d+="<li"+c+">"+t.eq(i).text()+"</li>"}var a=e('<div class="selectbox" style="display:inline-block;position:relative"><div class="select" style="float:left;position:relative;"><div class="text">'+l+'</div><b class="trigger"><i class="arrow"></i></b></div><div class="dropdown" style="position:absolute;overflow:auto;overflow-x:hidden;list-style:none"><ul>'+d+"</ul></div></div>");s.after(a).css({position:"absolute",top:-9999});var r=a.find("div.select"),f=a.find("div.text"),h=a.find("div.dropdown"),u=h.find("li"),v=a.outerHeight();"auto"==h.css("left")&&h.css({left:0}),"auto"==h.css("top")&&h.css({top:v});var p=u.outerHeight(),b=v;r.width(h.outerWidth()),h.outerWidth(r.outerWidth()),h.hide(),r.click(function(){var t=a.offset().top,s=e(window).height()-v-(t-e(window).scrollTop());return 0>s||6*p>s?(h.height("auto").css({top:"auto",bottom:b+5}),h.outerHeight()>t-e(window).scrollTop()-20&&h.height(Math.floor((t-e(window).scrollTop()-20)/p)*p)):s>6*p&&(h.height("auto").css({bottom:"auto",top:b+5}),h.outerHeight()>s-20&&h.height(Math.floor((s-20)/p)*p)),h.is(":hidden")?(e("div.dropdown:visible").hide(),h.show()):h.hide(),!1}),u.hover(function(){e(this).siblings().removeClass("selected")});var g=u.filter(".selected").text();u.filter(":not(.disabled)").click(function(){var i=e(this).text();g!=i&&(e(this).addClass("selected sel").siblings().removeClass("selected sel"),t.prop("selected",false).eq(e(this).index()).prop("selected",!0),g=i,f.text(i),s.change()),h.hide()}),h.mouseout(function(){h.find("li.sel").addClass("selected")}),s.focus(function(){e("span.selectbox").removeClass("focused"),a.addClass("focused")}).keyup(function(){f.text(t.filter(":selected").text()),u.removeClass("selected sel").eq(t.filter(":selected").index()).addClass("selected sel")}),e(document).on("click",function(t){e(t.target).parents().hasClass("selectbox")||(h.hide().find("li.sel").addClass("selected"),a.removeClass("focused"))})}var s=e(this);s.prev("span.selectbox").length<1&&(t(),s.on("refresh",function(){s.prev().remove(),t()}))})}}(jQuery);

$(function() {  
    $(".menu_punkts li ul").parents("li").addClass("parent").append("<i class='fa fa-arrow-right'></i>");
	$(".menu_punkts li ul").parents("li").hover(function(){
	$(this).find("ul").show();
	},  function(){
	$(this).find("ul").hide();
	});
	
	$('select').not(".js_shop_depend_param").selectbox();
    
    $('.pics__mini').click(function(e) {
        e.preventDefault();
        
        $(".pics__big").hide();
        $(".pics__big[data-id='"+$(this).attr('data-id')+"']").show();
    });
    
    toggleTabs('.tabs__nav__item');
    


	
    
    
	/* |===============| popups start |===============| */
    $('.popup').click(function(e) {
        e.stopPropagation();
    })
	$('.popup__close, .close_modal').click(function() {
		$(this).closest('.popup').fadeOut('fast');
	});

	
	$(".kupivkredit-button-content").click(function() {
		$(this).parents('form').find('input[name=action]').val('buy');
		$(this).parents('form').submit();
		return false;
	});
	
	
	$("#wrapper").append($('.popup'));

	$('[data-popup]').click(function(e) {
		var myname = $(this).parents('.catalog__item').find(".catalog__item__title").text();
		if (myname){$('.feedback_form_param7 input[name="p7"]').val(myname);}

		e.stopPropagation();
		$('.popup').hide();
		centralize($($(this).attr('data-popup')));
	});
	
	$('.product-id-bth').click(function(e) {
		var mynameprod = $(this).parents('.col-left').find("h1").text();
		if (mynameprod){$('.feedback_form_param7 input[name="p7"]').val(mynameprod);}
		e.stopPropagation();
		$('.popup').hide();
		centralize($($(this).attr('data-popup')));
	});
	$('.zapros-torg.product-id-bth').click(function(e) {
		var mynameprod = $(this).parents('.col-left').find("h1").text();
		if (mynameprod){$('.feedback_form_param56 input[name="p56"]').val(mynameprod);}
		e.stopPropagation();
		$('.popup').hide();
		centralize($($(this).attr('data-popup')));
	});
	$('.wishlist-btn').click(function(e) {
		var mynameprod = $(this).parents('.wishlist_item').find(".wishlist_name a").text();
		if (mynameprod){$('.feedback_form_param7 input[name="p7"]').val(mynameprod);}
		e.stopPropagation();
		$('.popup').hide();
		centralize($($(this).attr('data-popup')));
	});
	$('.predzakaz-btn').click(function(e) {
		var mynameprod = $(this).parents('.wishlist_item').find(".wishlist_name a").text();
		if (mynameprod){$('.feedback_form_param15 input[name="p15"]').val(mynameprod);}
		e.stopPropagation();
		$('.popup').hide();
		centralize($($(this).attr('data-popup')));
	});
	$('.predzakaz').click(function(e) {
		var myname = $(this).parents('.catalog__item').find(".catalog__item__title").text();
		if (myname){$('.feedback_form_param15 input[name="p15"]').val(myname);}
		e.stopPropagation();
		$('.popup').hide();
		centralize($($(this).attr('data-popup')));
	});	
	
	$('.predzakaz-id').click(function(e) {
		var mynameprod = $(this).parents('.col-left').find("h1").text();
		if (mynameprod){$('.feedback_form_param15 input[name="p15"]').val(mynameprod);}
		e.stopPropagation();
		$('.popup').hide();
		centralize($($(this).attr('data-popup')));
	});
	
	$(document).click(function() {
		var $popup = $('.popup');
		
		if( $popup.is(':visible') )
			$popup.fadeOut('fast');
	});
	/* |===============| popups end |===============| */
        
        
        $(".js_compare_form").click(function() {
            $("form",this).submit();
        });
		
	$(".slider_menu a").click(function(){
	n_tab = $(this).attr("rel");
	$(".slider_tab").addClass("none");
	$("#"+n_tab).removeClass("none");
	$(".slider_menu a").removeClass("button");
	$(this).addClass("button");
	return false;
	});   

   
});
// перемещение по табам
function toggleTabs(elem) {
	$(elem).click(function(e) {
        e.preventDefault();
        
        $(elem).removeClass(elem.slice(1)+'_active')
        .each(function() {
            $('.'+$(this).attr('href')).hide();
        });
        
		$('.'+$(this).addClass(elem.slice(1)+'_active').attr('href')).show();
	});
};

// функция центрирует по высоте передоваемый ей элемент а так же вызывает попапы.
function centralize(elem) {
	elem.add('.popups').fadeIn('fast');
	var diff = ($(window).height() - elem.outerHeight());
	
	if(diff < 0 ) diff = 20;
	
	var elem_top = $(document).scrollTop() + ( diff /2);
	elem.css('top', elem_top).click(function(e){ e.stopPropagation(); });
};