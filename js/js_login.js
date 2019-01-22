

$(document).ready(function()
{
	
		//欢迎动画
		$("#welcome_title").animate({left:'70px'},850);
		$("#tologin").fadeIn(1600);
		$("#tohome").fadeIn(1600);
		$("#div_bgimg").fadeIn(1800);
        
        //显示登录DIV
        $("#tologin").click(function()
        {
        	
        	$("#div_welcome").hide();
        	$("#div_loginView").fadeIn(1000);
        	
        	
        });
        //点击注册 显示登录DIV
        $("#registe_button").click(function()
        {
        	
        	$("#div_loginView").hide();
        	$("#div_registeView").fadeIn(1000);
        	       	
        });
        //点击注册账户 提交信息 操作数据库 返回成功提示 跳转到主页
        $("#form_submit").click(function()
        {
        	 //       	
        	
        });
               
});
