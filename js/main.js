$(function(){
    $('.main-content-box').css("left", "50%");
    $(".burger").hover(function () {
            $(".burger").css("background-color", "#292929");
            $('burger-line').css('backgroud-color', "fff");
        }, function () {
            $(".burger").css("background-color", "#333");
            $('burger-line').css('backgroud-color', "a7a7a7");
        }
    );
    $(".burger").click(function(){ 
        $('.nav').slideDown(200);
    });
    $(document).mouseup( function(e){ // событие клика по веб-документу
		var div = $( ".burger" ); // тут указываем ID элемента
		if ( !div.is(e.target) && div.has(e.target).length === 0 ){ // и не по его дочерним элементам
			$('.nav').slideUp(200); // скрываем его
		}
	});
});