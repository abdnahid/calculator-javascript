$(document).ready(function(){
		$('#set-icon').click(function(){
			$(this).toggleClass('set-icon-pos-2');
			$('#theme').toggleClass('theme-pos-2');
	});
		$('.theme1').click(function(){
			$('.btn-const').css({"background":"#7efff5","color":"#000"});
			$('.btn-operator').css("background","#508886");
			$('.btn-modify').css({"background":"#da57303b","color":"#000"});
		});
		$('.theme2').click(function(){
			$('.btn-const').css({"background":"#4b4b4b","color":"#fff"});
			$('.btn-operator').css("background","#393232");
			$('.btn-modify').css({"background":"#8d6262","color":"#fff"});
		});
		$('.theme3').click(function(){
			$('.btn-const').css({"background":"#b33939","color":"#fff"});
			$('.btn-operator').css("background","#4b4b4b");
			$('.btn-modify').css({"background":"#53354a","color":"#fff"});
		});
		$('.theme4').click(function(){
			$('.btn-const').css({"background":"#fff","color":"#000"});
			$('.btn-operator').css("background","#4b4b4b");
			$('.btn-modify').css({"background":"#c06b6b","color":"#000"});
		});
})



/*
.css({"right":"0px"});
		$(this).css({"right":"16%"});
	},function(){
		$(this).css({"transform":"rotate(-90deg)"});
		$('.theme').css({"right":"-15%"});
		$(this).css({"right":"1%"});*/