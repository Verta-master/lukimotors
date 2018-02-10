$(document).ready(function () {
    $('.menu_punkts li .fa').click(function () {
        $(this).closest('li').find('ul').toggleClass('active');
    });
	
	$(".forum-file input[type=file]").change(function(){
         var filename = $(this).val().replace(/.*\\/, "");
         $(this).parents('.inpattachment.forum-file').find(".filename").val(filename);
    });
});