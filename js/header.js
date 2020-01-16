/*顶部导航js*/
var windowTop = 0; //初始话可视区域距离页面顶端的距离
$(window).scroll(function() {
	var scrolls = $(this).scrollTop(); //获取当前可视区域距离页面顶端的距离
	// console.log(scrolls);
	if (scrolls >= windowTop) { //当scrolls>windowTop时，表示页面在向下滑动
		//需要执行隐藏导航的操作
		$('header').removeClass('headerUp');
		$('header .span').removeClass('xz');
		windowTop = scrolls;
	} else {
		//需要执行显示导航动画操作
		$('header').addClass('headerUp');
		windowTop = scrolls;
	}
})

$(function() {

	var id = sessionStorage.getItem('header_id');
	var a1 = [];
	if (id) {
		a1 = [];
		a1[id] = "xz";
	}
	var header = $('<header>' +
		'<nav>' +
		'<div class="span">' +
		'<span></span>' +
		'<span></span>' +
		'<span></span>' +
		'</div>' +
		'<ul>' +
		'<li class="' + a1[0] + '"><a href="ht1.html">概览</a></li>' +
		'<li class="' + a1[1] + '"><a href="ht2.html">关于我</a></li>' +
		'<li class="' + a1[2] + '"><a href="ht3.html">作品</a></li>' +
		'<li class="' + a1[3] + '"><a href="ht4.html">我的娱乐</a></li>' +
		'<li class="' + a1[4] + '"><a href="ht5.html">联系我</a></li>' +
		'</ul>' +
		'</nav>' +
		'</header>');

	$(".conten").before(header);

	var footer = $('<footer>已经到底啦!  (>▽<) </footer>')

	$(".conten").after(footer);

	setTimeout(function() {
		$("header").addClass('headerUp');
	}, 100);

	$("header nav ul li").click(function() {
		var headerid = $(this).index();
		sessionStorage.setItem('header_id', headerid);
	})


	$("header .span").click(function() {
		$(this).toggleClass("xz");
	})

	$(".banner p").click(function() {
		var i = $(window).height();
		// var t = $(window).scrollTop();
		$('body,html').animate({
			'scrollTop': i
		}, 500)
	})

	$(".banner p").animate({
		"top": "65%",
		"opacity": "0"
	}, 0).animate({
		"top": "60%",
		"opacity": "1"
	}, 1000)

	$(".banner h1").animate({
		"top": "40%",
		"opacity": "0"
	}, 0).animate({
		"top": "45%",
		"opacity": "1"
	}, 1000)


	var a, b, c;
	a = $(window).height(); //浏览器窗口的高度
	var b = $(this).scrollTop(); //监控窗口已滚动的距离;
	var cc = [];
	cc[0] = $(".center h1,.con2 h1");
	cc[1] = $(".con1_c");
	cc[2] = $(".zuop_s");
	cc[3] = $(".xingq");
	cc[4] = $(".wdjl");
	cc[5] = $(".my_zp1");
	cc[6] = $(".lxw");
	cc[7] = $(".xq_LOLs,.xq_dongman1");

	for (var i = 0; i < cc.length; i++) {
		cc[i].each(function() {
			c = $(this).offset().top; //元素相对于窗口的距离
			if (a + b - 300 > c) {
				$(this).addClass("xz");
			} else {
				$(this).removeClass("xz");
			}
		})
	}

	$(window).scroll(function() {
		var b = $(this).scrollTop(); //监控窗口已滚动的距离;
		var cc = [];
		cc[0] = $(".center h1");
		cc[1] = $(".con1_c");
		cc[2] = $(".zuop_s");
		cc[3] = $(".xingq");
		cc[4] = $(".wdjl");
		cc[5] = $(".my_zp1");
		cc[6] = $(".lxw");
		cc[7] = $(".xq_LOLs,.xq_dongman1,.con_P3");
		for (var i = 0; i < cc.length; i++) {
			cc[i].each(function() {
				c = $(this).offset().top; //元素相对于窗口的距离
				if (a + b - 300 > c) {
					$(this).addClass("xz");
				} else {
					// cc[i].removeClass("xz");
				}
			})
		}
	});

}) /*$(function() {})*/
