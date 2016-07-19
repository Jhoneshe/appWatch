$(function(){
	$("#my-fullpage").fullpage({
		verticalCentered: false,
		navigation: true,
		navigationTooltips: ['page1','page2','page3','page4'],
		anchors: ['page1','page2','page3','page4'],
		afterLoad: function(link, index){
			switch(index){
				case 1:
					$(".section1 h1").css("transform","scale(1.5)");
					$(".section1 p").animate({marginTop:"5%"},500);
					break;
				case 2:
					$(".section2 h1").css("transform","scale(0.7)");
					break;
				case 3:
					$(".section3 h1").animate({marginLeft:"20%"},500);
					$(".section3 p").animate({marginLeft:"20%"},500);
					break;
				case 4:
					$(".section4 .pic-1").css("transform","rotate(360deg)");
					setTimeout(function(){
						$(".section4 .pic-2").css("transform","rotate(360deg)");
					},500);
					setTimeout(function(){
						$(".section4 .pic-3").css("transform","rotate(360deg)");
					},1000);
					break;
				default:
					break;
			}
		},
		onLeave: function(index,nextIndex,direction){
			switch(index){
				case 1:
					$(".section1 h1").css("transform","scale(1)");
					$(".section1 p").animate({marginTop:"800px"});
					break;
				case 2:
					$(".section2 h1").css("transform","scale(1)");
					break;
				case 3:
					$(".section3 h1").animate({marginLeft:"-1500px"},500);
					$(".section3 p").animate({marginLeft:"1500px"},500);
					break;
				case 4:
					$(".section4 .pic-1").css("transform","rotate(0)");
					setTimeout(function(){
						$(".section4 .pic-2").css("transform","rotate(0)");
					},500);
					setTimeout(function(){
						$(".section4 .pic-3").css("transform","rotate(0)");
					},1000);
					break;
				default:
					break;
			}
		}
	});
})
