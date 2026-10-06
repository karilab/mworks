(function ( $ ){

	'use strict';
	
	// Nice Scroll
	//*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*	
	$(window).load(function(){
		$('body').niceScroll({ autohidemode : false,cursorwidth: 9, cursorborder: "1px solid #fff", scrollspeed:100, cursorcolor: '#919191'});
	})
	
	
	// Animate Name on nav bar 
	//*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*		
	if ( $('#home').length > 0 ){
		var flag = false;
		$(window).scroll(function() {
			var $myName = $('#home .my-name'); 
			var myNamePos = $myName.offset().top;
			var topOfWindow = $(window).scrollTop();	
	
			if ( myNamePos > 245 ) {
				$myName.removeClass('fadeOutLeft').addClass('animated fadeInLeft show');
				flag = true; 
				
			} 
			if ( myNamePos < 245 && flag  ) {	
				$myName.removeClass('fadeInLeft').addClass('fadeOutLeft');
				
			}
		});
	}
	

	// Menu navigation scroll animation
	//*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*		
	var lastId,
		topMenu = $('.navbar-default'),
		topMenuHeight = topMenu.outerHeight() + 0,
		// All list items
		menuItems = topMenu.find("a"),
		// Anchors corresponding to menu items
		scrollItems = menuItems.map(function(){
		  var item = $($(this).attr("href"));
		  if (item.length) { return item; }
		});
	
	// Bind click handler to menu items
	// so we can get a fancy scroll animation
	menuItems.click(function(e){
	  var href = $(this).attr("href"),
		  offsetTop;
	  if (!href || href.charAt(0) !== "#") return;
	  offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
	  $('html, body').stop().animate({ 
		  scrollTop: offsetTop
	  }, 300);
	  //When screen is less than 767
	  if ($(window).width()<767){
	  	$('.navbar-toggle').click();
	  }
	  
	  e.preventDefault();
	});
	
	// Resize
	$(window).resize(function(){
		topMenu = $('.navbar-default');
		topMenuHeight = topMenu.outerHeight() + 0;
		
		// All list items
		menuItems = topMenu.find("a"),
		// Anchors corresponding to menu items
		scrollItems = menuItems.map(function(){
		  var item = $($(this).attr("href"));
		  if (item.length) { return item; }
		});
	})
	
	
	// Bind to scroll
	$(window).scroll(function(){
	   // Get container scroll position
	   var fromTop = $(this).scrollTop()+topMenuHeight;
	   
	   // Get id of current scroll item
	   var cur = scrollItems.map(function(){
		 if ($(this).offset().top < fromTop)
		   return this;
	   });
	   // Get the id of the current element
	   cur = cur[cur.length-1];
	   var id = cur && cur.length ? cur[0].id : "";
	   
	   if (lastId !== id) {
		   lastId = id;
		   // Set/remove active class
		   menuItems
			 .parent().removeClass("active")
			 .end().filter("[href=#"+id+"]").parent().addClass("active");
	   }                   
	});


	// Get internet explorer version
	//*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*	
	function getInternetExplorerVersion()
	// Returns the version of Internet Explorer or a -1
	// (indicating the use of another browser).
	{
	  var rv = -1; // Return value assumes failure.
	  if (navigator.appName == 'Microsoft Internet Explorer')
	  {
		var ua = navigator.userAgent;
		var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
		if (re.exec(ua) != null)
		  rv = parseFloat( RegExp.$1 );
	  }
	  return rv;
	}

	
	// On hover thumbnail
	//*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*	
	$('#container').on('mouseenter', '.item-content', function(){
		$(this).find('.img-hover').removeClass('bounceOut').addClass('animated bounceIn show');
	}).on('mouseleave', '.item-content', function(){
		if (getInternetExplorerVersion < 9 ){
			$(this).find('.img-hover').removeClass('bounceIn').addClass('bounceOut'); 
		} else {
			$(this).find('.img-hover').removeClass('animated bounceIn show'); 
		}
	});
	
	// Initialize isotope
	//*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*	
	 var $container = $('#container');

	 if ($container.length && $container.children().length) {
		 $container.isotope({
			itemSelector: '.col-md-4'
		 });

		 if ($.fn.imagesLoaded) {
			$container.imagesLoaded(function () {
				$container.isotope('layout');
			});
		 }
	 }

	 // filter items when filter link is clicked
	 $('#filters').on('click', 'li a', function(){
		$('#filters').find('.active').removeClass('active');	
		$(this).parent().addClass('active');
		
		var selector = $(this).attr('data-filter');
		$container.isotope({ filter: selector }, function(){
			$('body').scrollspy('refresh');
		});
		
		return false;
	  });
	   

	   
	// Lightbox
	//*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*	
	var screenWidth, marginLeft;
	
	var stateObj = {foo: "bar"};
    var pathname = window.location.pathname;
	
	function AnimateLightBox(poplink, postWidth, html) {
	var windowWidth = $(window).width();
	var contentWidth = postWidth ? 0.62 : 0.75;

	function insertPopup(data) {
		var $content = $(data).filter('.content-element');
		if (!$content.length) {
			$content = $(data).find('.content-element');
		}

		$('.popup').empty().css({
			marginLeft: -marginLeft + 'px',
			width: screenWidth + 'px'
		});

		if ($(window).width() > 940) {
			$('.popup').addClass('animated bounceInLeft');
		} else {
			$('.popup').animate({ top: '+=100', opacity: 1 }, 'fast', 'swing');
		}

		$('.popup-back').removeClass('load-lightbox');
		$('.popup').html($content).fadeIn();

		$('.popup-back, .close-btn').on('click touchend', function (e) {
			$('.popup').animate({ top: '-=140', opacity: 0 }, 'fast', 'linear', function () {
				$('.overlay-container, .overlay').fadeOut('fast', function () {
					$(this).remove();
					$('body').removeClass('noscroll');
				});

				history.pushState(stateObj, "page", pathname);
			});
		});
	}

	function finishPopup() {
		function scroller() {
			var popHeight = $('.popup').height();
			$('.popup-back').height(popHeight);

			if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
				$('.overlay-container').niceScroll({
					autohidemode: false,
					cursorwidth: 9,
					cursorborder: "1px solid #fff",
					scrollspeed: 100,
					cursorcolor: '#919191'
				});
			}
		}

		if ($('.popup iframe').length > 0) {
			$('.popup .media').fitVids();
		}
		setTimeout(scroller, 600);
	}

	if (windowWidth <= 767) {
		screenWidth = windowWidth;
		marginLeft = screenWidth / 2;
	} else {
		if (postWidth) {
			screenWidth = (windowWidth * contentWidth) > 770 ? 770 : windowWidth * contentWidth;
		} else {
			screenWidth = (windowWidth * contentWidth) > 1370 ? 1370 : windowWidth * contentWidth;
		}

		marginLeft = screenWidth / 2;
	}

	history.pushState(stateObj, 'page', poplink);

	$('body').append('<div class="overlay" /><div class="overlay-container" />').addClass('noscroll');

	$('.overlay').animate({ opacity: '1' }, 'fast', function () {

		$('.overlay-container').append('<div class="popup-back load-lightbox" /><div class="close-btn"><span class="left"></span><span class="right"></span></div><div class="popup" /> ');

		if (html) {
			insertPopup(html);
			finishPopup();
			return;
		}

		$.ajax({
			url: poplink,
			data: {},
			cache: false,
			success: function (data) {
				history.pushState(stateObj, 'page', poplink);
				insertPopup(data);
			},
			complete: function () {
				finishPopup();
			}
		});
	});
	}

	
	// When the user click on thumbnails
	//*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*	
	$(document).on('click touchend', '.open-popup', function(e){
		
		e.preventDefault();
		var href = $(this).attr('href');
		var postWidth = false;
		var html = null;
		var match;
		var project;
		
		if ( $(window).width() >= 360 && ( navigator.appName !== 'Microsoft Internet Explorer') ){
			
			e.preventDefault();	
			if ($(this).parents().hasClass('preview') || $(this).parents().hasClass('post_image')){
				postWidth = true;
			} else {
				postWidth = false;
			}
			match = /[?&]id=([^&]+)/.exec(href);
			if (match && window.findProject && window.projectElementHtml) {
				project = window.findProject(decodeURIComponent(match[1].replace(/\+/g, ' ')));
				if (project) html = window.projectElementHtml(project);
			}
			AnimateLightBox(href, postWidth, html);
		} else {
			window.location = href;
		}
	})
	
	// Fit videos not in a slider	
	//*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*	
	$('.media').fitVids();

})( jQuery );