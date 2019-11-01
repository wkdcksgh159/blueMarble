/**
 * p.114
 */
/*
 * let a = function(x=1,y="jjdev"){
 *  } a();//x=1,y="jjdev" a(2);//x=2, y="jjdev" a(2,"test");//x=2,y="test"
 * a(y="goodee");//x=1, y="goodee"
 * 
 * a(x=10, y="")
 * 
 * a({ x:2, y:"aaa" })
 */
$(document).ready(function() {
	let getRandom = function(num){
		let my_num = Math.floor(Math.random()*num);
		return my_num;
	};
	
	let hideCode = function(){
		let numRand = getRandom(4); // 0, 1, 2, 3
		numRand = 0;
		$(".guess_box").each(function(index, item){
			if(numRand === index) {
				$(this).append("<span id='has_discount'></span>");
				return false;
			}
		});
	};
	
	hideCode();
	
	let checkForCode = function(){
		let discount = ""; //변수선언시 초기화 습관화(다른 언어도 사용하기 때문)
		if($.contains(this, document.getElementById("has_discount"))) {
			let my_num = getRandom(100); //이미 만들어진 변수 재활용
			discount = "<p>Your Code : CODE "+new Date().getTime()+" "+my_num+"%</p>";
		} else {
			discount = "<p>Sorry, no discount this time!</p>";
		}
		
		$(this).append(discount);
		
		$(".guess_box").each(function(){
			if($.contains(this, document.getElementById("has_discount"))) {
				$(this).addClass("discount");
			} else {
				$(this).addClass("no_discount");
			}
			$(this).unbind("click");
		});
	};
	
	$(".guess_box").click(checkForCode);
	
	/*
	$(".guess_box").click(function() { // 클래스중에 한개를 클릭하면
		$(".guess_box p").remove();
		// $(this).slideUp(); //this 배열이반복될때 현재의 것
		// 랜덤 숫자를 생성
		let discount = Math.floor((Math.random() * 6) + 5);
		console.log(discount);
		let discount_msg = "<p>Your Discount is " + discount + "%</p>";
		$(this).append(discount_msg); // this = click 뒤의 함수

		$(".guess_box").each(function() {
			$(this).unbind("click"); // this = each 뒤의 함수
		});
	});
	*/
	
	
});