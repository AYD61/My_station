$(function() {
	var i = 0;
	var li = $("#index ul li");
	li.hide();
	li.eq(i).fadeIn(1000).addClass("lixz");

	setInterval(function() {
		if (i < li.length - 1) {
			i++;
			// console.log(i);
			li.eq(i).fadeIn(1000).addClass("lixz").siblings().fadeOut(2000);
		} else {
			i = 0;
			// console.log(i);
			li.eq(i).fadeIn(1000).addClass("lixz").siblings().fadeOut(2000);
		}
	}, 5000);


	$("#conten h1.h1").css({
		"opacity": "1",
		"margin-top": "0rem"
	})
	setTimeout(function() {
		$("#conten h1.h2").css({
			"opacity": "1",
			"margin-top": "0rem"
		})
	}, 1000);
	setTimeout(function() {
		$("#conten h1.h3").css({
			"opacity": "1",
			"margin-top": "0rem"
		})
	}, 2000);
	
	setTimeout(function() {
		$(".bun a").css({
			"opacity": "1",
			"margin-bottom": "0rem"
		})
	}, 3000);
	
	sessionStorage.setItem('header_id', 0);
})
