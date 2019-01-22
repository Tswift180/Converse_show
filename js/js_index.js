
//************滚动触发的动画效果开始************

$(document).on("scroll",function(){
	
	if($(document).scrollTop()>200)
	{
		//第一个导航
		$("#frist_navigation_bar").stop().animate({
			height:'10%'
		},200);
		$(".span_radius,#top_span_a").fadeOut(400);
		$("#Top_Logo").stop().animate({
			width: '180px',
	        height: '45px'      
		},200);
		//第二个导航
		$("#second_navigation_bar").stop().animate({
		    height:'30px',
		    top:'50px',

		},200);
		$("#second_navigation_bar ul li").stop().animate({
			      
			padding:'0px 40px 0px 40px'
			
		});
		//扩展DIV
		$(".nav_expand_div").stop().animate({
				
			top:'80px'
								
			},200);
		
                      		
	}
	else
	{
		//第一个导航
		$("#frist_navigation_bar").stop().animate({
			height:'13%'
		},200);
		$(".span_radius,#top_span_a").fadeIn(400)
		$("#Top_Logo").stop().animate({
			width: '230px',
	        height: '60px'	        
		},200);
		//第二个导航
		$("#second_navigation_bar").stop().animate({
		    height:'45px',
		    top:'80px',

		},200);
		$("#second_navigation_bar ul li").stop().animate({
			          
			padding:'5px 40px 0px 40px'
			
		});
		//扩展DIV
		$(".nav_expand_div").stop().animate({
				
			top:'125px'
								
			},200);
		
		
	}		
});

//********导航栏的扩展DIV效果开始**************

$(document).ready(function()
{
	
    
    $("#man_li").mouseenter(function()
    {       
        $("#man_expand_div").stop().fadeIn(220);
        $("#woman_expand_div").hide();
        $("#child_expand_div").hide();
        
    });
	$("#man_expand_div").mouseleave(function()
	{
		$("#man_expand_div").stop().fadeOut(220);
	});
	
	$("#woman_li").mouseenter(function()
    {       
        $("#woman_expand_div").stop().fadeIn(220);
        $("#man_expand_div").hide();
        $("#child_expand_div").hide();
        
    });
	$("#woman_expand_div").mouseleave(function()
	{
		$("#woman_expand_div").stop().fadeOut(220);
	});
	
	$("#child_li").mouseenter(function()
    {       
        $("#child_expand_div").stop().fadeIn(220);
        $("#man_expand_div").hide();
        $("#woman_expand_div").hide();
        
    });
	$("#child_expand_div").mouseleave(function()
	{
		$("#child_expand_div").stop().fadeOut(220);
	});
	
	
	
});




