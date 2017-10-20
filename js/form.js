window.onload = function fun1() {
	var content = document.getElementById("title");
	content.style.color = "#008000";
	content.style.fontSize = "x-large";
	content.style.fontWeight = "bolder";
	var content1 = document.getElementById("submit");
	content1.style.color = "#008000";
	content1.style.fontSize = "large";
	content1.style.fontWeight = "bolder";
}
//验证form表单
function validateForm() {
	if(!validateName()) {
		return false;
	}
	if(!validatePassWord()) {
		return false;
	}
	return true;
}
//验证表单输入是否合法
function validateName() {
	var x = document.getElementById("fname").value;
	var xx = document.getElementById("fname1");
	if(x == null || x == "") {
		xx.innerHTML = "请输入姓名";
		xx.style.color = "red";
		xx.style.fontSize = "medium";
		return false;
	} else {
		var reg = /^[\u4E00-\u9FA5]{2,4}$/; /*定义验证表达式*/
		if(!reg.test(x)) {
			xx.innerHTML = "姓名必须为汉语";
			xx.style.color = "red";
			xx.style.fontSize = "medium";
			xx.style.fontWeight = "bold";
			return false;
		} else {
			xx.style.color = "green";
			xx.style.fontSize = "medium";
			xx.innerHTML = "";
			return true;
		}    
	}
}
//验证表单输入是否合法
function validatePassWord() {
	var y = document.getElementById("fpassword").value;
	var yy = document.getElementById("fpassword1");
	if(y == null || y == "") {
		yy.innerHTML = "请输入密码";
		yy.style.color = "red";
		yy.style.fontSize = "medium";
		return false;
	} else {
		if(isNaN(y)) {
			yy.innerHTML = "密码必须是数字";
			yy.style.color = "red";
			yy.style.fontSize = "medium";
			return false;
		} else {
			if(y.length != 6) {
				yy.innerHTML = "密码长度必须为6位";
				yy.style.color = "red";
				yy.style.fontSize = "medium";
				return false;
			} else {
				yy.style.color = "green";
				yy.style.fontSize = "medium";
				yy.style.fontWeight = "bold";
				yy.innerHTML = "";
				return true;
			}
		}
	}
}