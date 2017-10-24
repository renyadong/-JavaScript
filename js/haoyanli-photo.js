var count = 1;
function fun2() {
	count++;
	document.getElementById("button2").style.color = "#008000";
	document.getElementById("button2").style.fontSize = "x-large";
	document.getElementById("img").src = "img/background" + (count = count == 9 ? 1 : count) + ".jpg"
	/*if(count == 8){
	document.getElementById("button2").disabled = "disabled";
	}*/
}

function fun1() {
	count--;
	if(count == 0) {
		count = 8;
	}
	document.getElementById("button1").style.color = "#008000";
	document.getElementById("button1").style.fontSize = "x-large";
	document.getElementById("img").src = "img/background" + (count = count == 0 ? 8 : count) + ".jpg";
	/*if(count == 8){
	document.getElementById("button2").disabled = "disabled";
	}*/
}
//js函数自调用写法
(function() {
	var button2 = document.getElementById("button2").style;
	var button1 = document.getElementById("button1").style;
	button2.color = "red";
	button2.fontSize = "x-large";
	button1.color = "orange";
	button1.fontSize = "x-large";
})();
(function() {
	var p = document.getElementById("p1").style;
	p.color = "orangered";
	p.fontSize = "x-large";
	p.fontWeight = "bolder";
})();