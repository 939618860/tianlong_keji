
		$(function () {
			$("#ind-ul>li").hover(function () {
				console.log($(this));
				$(this).addClass('sit');
				$(this).siblings().removeClass('sit');
			})
		}); 
		$(function () {
			$("#ad>li").hover(function () {
				console.log($(this));
				$(this).addClass('hx');
				$(this).siblings().removeClass('hx');
			})
		}); 
