function myFunction1() {
	var y = document.getElementById("demo1");
	var x = y.value;
	if(x == "" || isNaN(x)) {
		y.value = "请输入纯数字";
		y.style.color = "orangered";
		y.style.fontWeight = "bold";
	}
}

function myFunction2() {
	x = document.getElementById("demo2"); // 找到元素
	x.innerHTML = "其实我想说你，你是不是傻。。。"; // 改变内容
	x.style.color = "green";
}

function myFunction3(a, b) {
	var c = "上午9：00整"
	return a + c + b;
}

function myFunction4() {
	x = document.getElementById("demo3"); // 找到元素
	x.innerHTML = myFunction3("2017-10-18", "在人民大会堂召开十九大会议"); // 改变内容
	x.style.color = "lightcoral";
}

function myFunction5() {
	var people = {
		id: "1",
		name: "张刘贤",
		age: "25",
		address: "河南周口",
		amount: function countAmount() {
			var a = 2000.00;
			var b = 3000.00;
			return a + b;
		}
	};
	return "员工编号为：" + people.id + "，姓名为：" + people.name + "，年龄为：" + people.age + "，住址为：" + people.address + "，基本额度为：" + people.amount();
}

function myFunction6() {
	x = document.getElementById("demo4"); // 找到元素
	x.innerHTML = myFunction5(); // 改变内容
	x.style.color = "black";
	x.style.fontWeight = "bolder";
	x.style.fontSize = "x-large";
}

function myFunction() {
	x = document.getElementById("demo"); // 找到元素
	alert(x.innerHTML);
	x.innerHTML = "其实我想说你，你是不是傻。。。"; // 改变内容
	x.style.color = "green";
}

function changeImage() {
	element = document.getElementById('myimage')
	if(element.src.match("bulbon")) {
		element.src = "img/pic_bulboff.jpg";
	} else {
		element.src = "img/pic_bulbon.jpg";
	}
}