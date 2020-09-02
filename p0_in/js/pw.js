//password
function fn() {
	var flag=true;
	var myUserName = document.querySelectorAll("input")[0];
	var myPassWord = document.querySelectorAll("input")[1];
	if (myUserName.value == "admin" && myPassWord.value == "admin") {
		alert("验证成功，欢迎您管理员");
		return flag;
	}
	else if(myUserName.value == "testt" && myPassWord.value == "12345") {
		alert("验证成功，欢迎您老师");
		return flag;
	}
	else if(myUserName.value == "tests" && myPassWord.value == "12345") {
		alert("验证成功，欢迎您同学");
		return flag;
	}
	else {
		flag = false;
		alert("用户名或密码错误，请重新输入！");
		return flag;
	}
}