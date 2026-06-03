$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});
$('document').ready(function(){
		function positionBalloons() {
			var vw = $(window).width() / 2;
			var w = $(window).width();
			var balloonWidth = 100;
			var topVal = 240;
			
			// Get banner bottom dynamically
			var bannerBottom = 0;
			if ($('.bannar').length > 0 && $('.bannar').is(':visible')) {
				bannerBottom = $('.bannar').offset().top + $('.bannar').outerHeight();
			}
			
			if (w < 360) {
				balloonWidth = 38;
				topVal = bannerBottom > 0 ? (bannerBottom + 10) : 120;
			} else if (w < 400) {
				balloonWidth = 42;
				topVal = bannerBottom > 0 ? (bannerBottom + 10) : 120;
			} else if (w < 480) {
				balloonWidth = 48;
				topVal = bannerBottom > 0 ? (bannerBottom + 10) : 120;
			} else if (w < 768) {
				balloonWidth = 55;
				topVal = bannerBottom > 0 ? (bannerBottom + 15) : 150;
			} else if (w < 1025) {
				balloonWidth = 75;
				topVal = bannerBottom > 0 ? (bannerBottom + 20) : 180;
			} else {
				balloonWidth = 100;
				topVal = bannerBottom > 0 ? (bannerBottom + 25) : 240;
			}
			
			var balloonIds = [];
			for (var i = 1; i <= 8; i++) {
				if ($('#b' + i + i).length > 0) {
					balloonIds.push('#b' + i + i);
				}
			}
			
			var numBalloons = balloonIds.length;
			var totalWidth = numBalloons * balloonWidth;
			var startLeft = vw - (totalWidth / 2);
			$.each(balloonIds, function(index, id) {
				$(id).stop().animate({
					top: topVal,
					left: startLeft + (index * balloonWidth)
				}, 500);
			});
		}

		$(window).resize(function(){
			positionBalloons();
		});

	$('#turn_on').click(function(){
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('peach');
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#play').fadeIn('slow');
		});
	});
	$('#play').click(function(){
		var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').css('backgroud-color','#FFF');
		$('body').addClass('peach-after');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#bannar_coming').fadeIn('slow');
		});
	});

	$('#bannar_coming').click(function(){
		$('.bannar').addClass('bannar-come');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#balloons_flying').fadeIn('slow');
		});
	});

	function loopBalloon(balloonId) {
		var w = $(window).width();
		var h = $(window).height();
		var randleft = (w - 80) * Math.random();
		if (randleft < 0) randleft = 0;
		var randtop = (h - 150) * Math.random();
		if (randtop < 0) randtop = 0;
		$(balloonId).animate({left:randleft,bottom:randtop},10000,function(){
			loopBalloon(balloonId);
		});
	}

	$('#balloons_flying').click(function(){
		$('.balloon-border').animate({top:-500},8000);
		$('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b3,#b6,#b8').addClass('balloons-rotate-behaviour-two');
		
		for (var i = 1; i <= 8; i++) {
			loopBalloon('#b' + i);
		}
		
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#cake_fadein').fadeIn('slow');
		});
	});	

	$('#cake_fadein').click(function(){
		$('.cake').fadeIn('slow');
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#light_candle').fadeIn('slow');
		});
	});

	$('#light_candle').click(function(){
		$('.fuego').fadeIn('slow');
		$(this).fadeOut('slow').promise().done(function(){
			$('#wish_message').fadeIn('slow');
		});
	});

		
	$('#wish_message').click(function(){
		var ids = ['#b1','#b2','#b3','#b4','#b5','#b6','#b7','#b8'];
		$.each(ids, function(index, id) {
			$(id).stop();
			var num = index + 1;
			$(id).attr('id', 'b' + num + num);
		});
		
		$('.balloons').css('opacity','0.9');
		$('.balloons h2').fadeIn(3000);
		
		positionBalloons();
		
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#story').fadeIn('slow');
		});
	});
	
	$('#story').click(function(){
		$(this).fadeOut('slow');
		$('.cake-cover').fadeOut('fast').promise().done(function(){
			$('.message').fadeIn('slow');
		});
		
		var i;

		function msgLoop (i) {
			$("p:nth-child("+i+")").fadeOut('slow').delay(800).promise().done(function(){
			i=i+1;
			$("p:nth-child("+i+")").fadeIn('slow').delay(1000);
			if(i==50){
				$("p:nth-child(49)").fadeOut('slow').promise().done(function () {
					$('.cake-cover').fadeIn('fast');
				});
				
			}
			else{
				msgLoop(i);
			}			

		});
			// body...
		}
		
		msgLoop(0);
		
	});
});




//alert('hello');