$(function(){
	$("#submit").click(function(){
		var username=$("#username").val();
		var password=$("#password").val();
		//发送请求，判断用户名和密码是否正确
		$.post(
				"../java/2",
				{"username":username,"password":password},
				function(data){
					if(data=="登陆成功"){
						//登陆成功之后，跳转页面
						window.location.href="/day18/main.html";
					}else{
						//失败的时候，提供错误的信息
						$("#msg").css("color","red").html(data);
					}
				},
					"text"
				);
	})
})
