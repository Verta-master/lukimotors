function catalog__item_height(){if(!$('.catalog__item').length)
return;var max_height_box=0;$('.catalog__item').each(function(){$(this).css('height','auto');$(this).css('padding-bottom',$(".catalog__item_box",this).outerHeight()+10+'px');});$('.catalog__item').each(function(){if($(this).outerHeight()>max_height_box)
max_height_box=$(this).outerHeight();});$('.catalog__item').outerHeight(max_height_box);}
if(window.diafan_ajax){diafan_ajax.success["shop_compare_goods"]=function(form,response){var ui=$(form).parents(".js_shop").find(".js_shop_add_compare");if(response&&response.result==='ok'){ui.toggleClass("active");}else{ui.removeClass("active");}
$("input[name=add]",form).val(ui.hasClass("active")?0:1);return true;};diafan_ajax.success['shop_wish']=function(form,response){var ui=$(form).parents(".js_shop").find(".js_shop_wishlist");ui.toggleClass("active");return true;}}
catalog__item_height();$(".js_shop_depend_param, .shop_form .depend_param").change(function(){select_param_price($(this).parents('form'));});$(".js_shop_form, .shop_form").each(function(){empty_param_price($(this));select_param_price($(this));});$("[action=buy]").click(function(){$(this).parents('form').find('input[name=action]').val('buy');$(this).parents('form').trigger('submit');return false;});$("[action=wish]").click(function(){$(this).parents('form').find('input[name=action]').val('wish');$(this).parents('form').trigger('submit');});$("[action=wait]").click(function(){$(this).parents('form').find('input[name=action]').val('wait');$(this).parents('form').trigger('submit');});$("[action=one_click]").click(function(){$('form[one_click=true]').removeAttr('one_click');$(this).parents('form').attr('one_click','true');$(this).parents('.js_shop').find('.js_cart_one_click, .cart_one_click').show();});$(".js_cart_one_click_form, .cart_one_click_form").on('click',":button",function(){$(this).attr('disabled','disabled');var self=$(this).parents(".js_cart_one_click_form, .cart_one_click_form");$('.js_shop_form_param input, .js_shop_form_param select, .shop_form_param input, .shop_form_param select, input[name=count], .js_shop_additional_cost input[type="checkbox"]:checked','form[one_click=true]').each(function(){$("input[name='"+$(this).attr('name')+"']",self).remove();self.prepend('<input type="hidden" name="'+$(this).attr('name')+'" value="'+$(this).val()+'">');});$("input[name='additional_cost[]']",self).remove();$('.js_shop_additional_cost input[type="checkbox"]:checked','form[one_click=true]').each(function(){self.prepend('<input type="hidden" name="'+$(this).attr('name')+'" value="'+$(this).val()+'">');});self.trigger('submit');});diafan_ajax.success['cart_one_click']=function(form,response){$('input:button',form).removeAttr('disabled');}
$('.js_shop_wishlist, .shop-like').click(function(){var form=$(this).parents('.js_shop, .shop').find('.js_shop_form, .shop_form').first();form.find('input[name=action]').val('wish');form.trigger('submit');});$('.js_shop_add_compare, .shop_compare_button').click(function(){$('form',this).trigger('submit');});$('.js_shop_additional_cost input[type="checkbox"]').change(function(){cacl_additional_pice($(this).parents('form'));});function cacl_additional_pice(th)
{var js_price;$('.js_shop_price',th).each(function(){if($(this).parents('.js_shop_param_price').css('display')!='none'){js_price=$(this);}});if(!js_price){return;}
var price=js_price.attr("summ");$('.js_shop_additional_cost input[type="checkbox"]:checked',th).each(function(){price=price*1+$(this).attr("summ")*1;});js_price.text(format_price(price,js_price.attr('format_price_1'),js_price.attr('format_price_2'),js_price.attr('format_price_3')));}
function format_price(str,s1,s2,s3)
{if(!s1)
{s1=0;}
if(!s2){s2=',';}
if(!s3){s3=' ';}
d=str.toString().match(/(\.(.*))/g);if(s1)
{if(d)
{d=d.toString().replace(/\./g,'').substr(0,s1);d=s2+d;}
else
{d=s2+'00';}}
else
{d='';str=Math.round(str);}
str=str.toString().replace(/(\.(.*))/g,'');str=str.replace(/\s+/g,'');var arr=str.split('');var str_temp='';if(str.length>3){for(var i=arr.length-1,j=1;i>=0;i--,j++){str_temp=arr[i]+str_temp;if(j%3==0&&i!=0){str_temp=s3+str_temp;}}
return str_temp+d;}else{return str+d;}}
function select_param_price(th)
{var param_code='';$(".js_shop_depend_param, .depend_param",th).each(function(){param_code=param_code+'['+$(this).attr('name')+'='+$(this).val()+']';});if($('.js_shop_param_price, .shop_param_price',th).length)
{$('.js_shop_param_price, .shop_param_price',th).hide();$('.js_shop_additional_cost_price',th).hide();if($('.js_shop_param_price'+param_code+', .shop_param_price'+param_code,th).length)
{$('.js_shop_param_price'+param_code+', .shop_param_price'+param_code,th).show();$('.js_shop_additional_cost_price'+param_code,th).show();$('#'+$('.js_shop_additional_cost_price'+param_code,th).closest('label').attr('for')).attr('summ',$('.js_shop_additional_cost_price'+param_code,th).attr('summ'));var image_id=$('.js_shop_param_price'+param_code+', .shop_param_price'+param_code,th).attr('image_id');if(image_id)
{th.closest('.js_shop, .shop').attr('shop_kits_closest','closest').find('.js_shop_img, .shop-item-big-images a').each(function(){if($(this).closest('.js_shop, .shop').attr('shop_kits_closest')=='closest')
{if($(this).attr('image_id')==image_id)
{$(this).show();}
else
{$(this).hide();}}}).end().removeAttr('shop_kits_closest');}
if($('.js_shop_param_price'+param_code+', .shop_param_price'+param_code,th).find('.js_shop_no_buy, .shop_no_buy').length)
{$('.js_show_waitlist, .shop_waitlist',th).show();$('.js_shop_buy, .to-cart',th).hide();$('.js_shop_one_click, .shop_one_click',th).hide();}
else
{if($('.js_shop_no_buy_good, .shop_no_buy_good',th).length)
{$('.js_shop_waitlist, .shop_waitlist',th).show();}
else
{$('.js_shop_waitlist, .shop_waitlist',th).hide();}
$('.js_shop_buy, .to-cart',th).show();$('.js_shop_one_click, .shop_one_click',th).show();}}
else
{th.closest('.js_shop, .shop').attr('shop_kits_closest','closest').find('.js_shop_img, .shop_img img, .shop_all_img img').each(function(){if($(this).closest('.js_shop, .shop').attr('shop_kits_closest')=='closest')
{if($('.js_shop_param_price[image_id='+$(this).attr('image_id')+'], .shop_param_price[image_id='+$(this).attr('image_id')+']',th).length)
{$(this).hide();}}}).end().removeAttr('shop_kits_closest');$('.js_shop_buy, .to-cart',th).hide();$('.js_shop_one_click, .shop_one_click',th).hide();$('.js_shop_waitlist, .shop_waitlist',th).hide();}}
var v_param_code='';var v_param_name='';$(".js_shop_depend_param",th).each(function(){v_param_name=$(this).attr('name');if(v_param_code)
{$('option',this).each(function(){if(!$('.js_shop_param_price'+v_param_code+'['+v_param_name+'='+$(this).attr('value')+']',th).length)
{$(this).hide();}
else
{$(this).show();}});}
v_param_code=v_param_code+'['+v_param_name+'='+$(this).val()+']';});cacl_additional_pice(th);th.trigger('onSelectParamPrice');}
function empty_param_price(th)
{if(!$('.js_shop_param_price',th).length||$('.js_form_option_selected',th).length)
return;$('.js_shop_param_price',th).each(function(){if(!$(".js_shop_no_buy",this).length){for(var i=0,atts=$(this).get(0).attributes,n=atts.length;i<n;i++){if(atts[i].nodeName.indexOf("param")>-1){$("select[name='"+atts[i].nodeName+"']",th).val(atts[i].nodeValue);}}
return false;}});}