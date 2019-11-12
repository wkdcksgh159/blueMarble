/**
 * 
 */
/**
 *  부루마블 함수 모음
 */
//주사위 더블 체크
function doubleDice(ran1, ran2, player, gamer){
	console.log("doubleDice 함수 실행 확인!");
	console.log("gamer.length : ", gamer.length);
	console.log("player : ", player);
	//배열 인덱스에 맞춤
	index = gamer.length-1;
	// 플레이어 변경
    if(ran1 != ran2){
   	 	player++;
   	 if(player>index){
   		 console.log("gamer.length : ", gamer.length);
       	 player = player-gamer.length;
     }
    } else {
	   	 console.log("더블!");
	   	 if(currentGamer.afterPoint == 11){
	   		player++;
	   		if(player>index){
	      		 console.log("index : ", index);
	          	 player = player-gamer.length;
	        }
	   	 }
	   	 if(currentGamer.afterPoint == 31 || currentGamer.beforePoint == 31){
	   		player++;
	   		if(player>index){
	      		 console.log("index : ", index);
	          	 player = player-gamer.length;
	        }
	   	 }
    }
    console.log("doubleDice player : ", player);
    return player;
}

//도착한 도시 이름 찾기
function cityNameReturn(cityName){
	switch(cityName){
	case "타이페이":
		city = 타이페이;
		break;
	case "베이징":
		city = 베이징;
		break;
	case "마닐라":
		city = 마닐라;
		break;
	case "제주도":
		city = 제주도;
		break;
	case "싱가포르":
		city = 싱가포르;
		break;
	case "카이로":
		city = 카이로;
		break;
	case "이스탄불":
		city = 이스탄불;
		break;
	case "아테네":
		city = 아테네;
		break;
	case "코펜하겐":
		city = 코펜하겐;
		break;
	case "스톡홀름":
		city = 스톡홀름;
		break;
	case "콩코드여객기":
		city = 콩코드여객기;
		break;
	case "베른":
		city = 베른;
		break;
	case "베를린":
		city = 베를린;
		break;
	case "오타와":
		city = 오타와;
		break;
	case "부에노스아이레스":
		city = 부에노스아이레스;
		break;
	case "상파울로":
		city = 상파울로;
		break;
	case "시드니":
		city = 시드니;
		break;
	case "부산":
		city = 부산;
		break;
	case "하와이":
		city = 하와이;
		break;
	case "리스본":
		city = 리스본;
		break;
	case "퀸엘리자베스호":
		city = 퀸엘리자베스호;
		break;
	case "마드리드":
		city = 마드리드;
		break;		
	case "도쿄":
		city = 도쿄;
		break;
	case "콜럼비아호":
		city = 콜럼비아호;
		break;
	case "파리":
		city = 파리;
		break;
	case "로마":
		city = 로마;
		break;	
	case "런던":
		city = 런던;
		break;		
	case "뉴욕":
		city = 뉴욕;
		break;		
	case "서울":
		city = 서울;
		break;
	default:
		city = null;
		break;
	}
	return city;
}

//사회복지기금(내는곳)
function donateGive(currentGamer, player){
	//디버깅
	console.log("기부 성공!");
	//사회 복지 기금 15만원 지출 
    currentGamer.money -= 150000;
    console.log("donateGive : ", currentGamer.money);
    
    donate = parseInt($("#p21").find(".gold").text());
    donate += 150000;
    console.log("donate : ", donate);
    $("#p21").find(".gold").empty();
    $("#p21").find(".gold").text(donate);
    
    return currentGamer.money;
}

//사회복지기금(받는곳)
function donateReceive(currentGamer){
	//사회 복지 단체 기부금 다 받음
	donate = parseInt($("#p21").find(".gold").text());
	currentGamer.money += donate;
    console.log(currentGamer.money);

    $("#p21").find(".gold").text(0);
    
    return currentGamer.money;
}

//무인도
function island(currentGamer, ran1, ran2){
	//무인도 도착
    console.log("무인도 함수 실행 확인!");
    console.log("무인도에 빠짐");
	if(currentGamer.round>3 || ran1 == ran2){//3번 차례가 지나거나 ,주사위가 더블일때
		console.log("무인도 탈출!");
    	currentGamer.round = 0;
	}else{
		console.log("무인도 잔류..");
		currentGamer.round+=1;
	}
    
    return currentGamer.round;
}

//땅 매매 함수
function pay(currentGamer){
	//밟은 땅 주인 체크
    if($(currentGamer.afterId).find(".player").text() == 0 || $(currentGamer.afterId).find(".player").text() == currentGamer.player){
   		//도시 이름 받아오기
   		let cityName = $(currentGamer.afterId).find(".city").text();
    	console.log("cityName : ", cityName);
   		//도시 객체를 저장할 변수 선언
    	let city = "";
    	city = cityNameReturn(cityName);
    	//디버깅
    	console.log("city : ", city);
    	
    	if(city != null){
    		//dialog 팝업 세팅
    		//let dialogHtml = "<div id='dialog' title='"+cityName+"'><div id='landDiv'>대지 <input type='radio' name='build' id='land' checked='checked'><span id='landToll'></span></div><div id='villaDiv'>별장 <input type='radio' name='build' id='villa'><span id='villaToll'></span></div><div id='buildingDiv'>빌딩 <input type='radio' name='build' id='building'><span id='buildingToll'></span></div><div id='hotelDiv'>호텔 <input type='radio' name='build' id='hotel'><span id='hotelToll'></span></div><button type='button' id='buy'>구매</button><button type='button' id='cancel'>취소</button></div>";
        	let dialogHtml = "<div id='dialog' title='"+cityName+"'>";
    		if(city.대지구매여부 == 0){
    			console.log("대지구매여부 0");
    			dialogHtml += "<div id='landDiv'>대지 <input type='checkbox' name='landBuild' id='land' checked='checked' disabled='disabled'><span id='landToll'></span></div>";
    	    }
    	    if(city.별장구매여부 == 0){
    	    	dialogHtml += "<div id='villaDiv'>별장 <input type='checkbox' name='build' id='villa'><span id='villaToll'></span></div>";
    	    }
    	    if(city.빌딩구매여부 == 0){
    	    	dialogHtml += "<div id='buildingDiv'>빌딩 <input type='checkbox' name='build' id='building'><span id='buildingToll'></span></div>";
    	    }
    	    if(city.호텔구매여부 == 0){
    	    	dialogHtml += "<div id='hotelDiv'>호텔 <input type='checkbox' name='build' id='hotel'><span id='hotelToll'></span></div>";
    	    }
    		dialogHtml += "<button type='button' id='buy'>구매</button><button type='button' id='cancel'>취소</button></div>";
    		$("#dialogTag").append(dialogHtml);
    		console.log("city player : ",currentGamer.player);
    		//땅 구매여부를 선택할때까지 주사위 비활성화
        	$("#diceBtn").attr("disabled", true);
        	$("#dialog").dialog({
        		closeOnEscape: false,
        	    open: function(event, ui) {
        	            $(".ui-dialog-titlebar-close", $(this).parent()).hide();
        	    }
        	});
        	if(city == 제주도 || city == 콩코드여객기 || city == 부산 || city == 퀸엘리자베스호 || city == 콜럼비아호 || city == 서울){
        		$("#villaDiv").hide();
        		$("#buildingDiv").hide();
        		$("#hotelDiv").hide();
        	} else {
        		$("#villaDiv").show();
        		$("#buildingDiv").show();
        		$("#hotelDiv").show();
        	}
        	$("#landToll").text(" 구매료 "+ city.대지료구매+"원"+"\n"+"     통행료"+city.대지료통행시+"원");
        	$("#villaToll").text(" 구매료 "+ city.별장구매+"원"+"\n"+"     통행료"+city.별장통행시+"원");
        	$("#buildingToll").text(" 구매료 "+ city.빌딩구매+"원"+"\n"+"     통행료"+city.빌딩통행시+"원");
        	$("#hotelToll").text(" 구매료 "+ city.호텔구매+"원"+"\n"+"    통행료"+city.호텔통행시+"원");
        	
        	$("input[name='build']").click(function(){
        		if($(this).prop("checked")){
        			$("input[name='build']").prop("checked", false);
        			$(this).prop("checked", true);
        		}
        	});
        	//구매버튼 클릭시 함수 실행
        	$("#buy").click(function(){
        		console.log("buy 클릭 실행!");
        		console.log("buy player : ", currentGamer.player);
        		//땅 주인 세팅 (플레이어1 이면 1 이 들어감)
                $(currentGamer.afterId).find(".player").text(currentGamer.player);
        		//radio타입 클릭한 내용 찾기 (땅, 별장, 빌딩, 호텔)
        		if($('input[name="landBuild"]:checked').is("#land")){
                  	//주인이없으면 땅 가격 세팅
                  	$(currentGamer.afterId).find(".gold").text(city.대지료통행시);
                  	console.log("대지료구매 전 머니", currentGamer.money);
                  	console.log("구매료 : ", city.대지료구매);
                  	currentGamer.money = currentGamer.money-city.대지료구매;
                  	console.log("대지료구매 후 머니", currentGamer.money);
                  	city.대지구매여부 = 1;
        		}
        		if($('input[name="build"]:checked').is("#villa")){
                    //주인이없으면 별장 가격 세팅
        			goldSet = parseInt($(currentGamer.afterId).find(".gold").text()) + city.별장통행시;
                    $(currentGamer.afterId).find(".gold").text(goldSet);
                    console.log("별장구매 전 머니", currentGamer.money);
                    console.log("구매료 : ", city.대지료구매+city.별장구매);
                  	currentGamer.money = currentGamer.money-city.대지료구매-city.별장구매;
                  	console.log("별장구매 후 머니", currentGamer.money);
                  	city.대지구매여부 = 1;
                  	city.별장구매여부 = 1;
        		}
        		if($('input[name="build"]:checked').is("#building")){
                    //주인이없으면 빌딩 가격 세팅
        			goldSet = parseInt($(currentGamer.afterId).find(".gold").text()) + city.빌딩통행시;
                    $(currentGamer.afterId).find(".gold").text(goldSet);
                    console.log("빌딩구매 전 머니", currentGamer.money);
                    console.log("구매료 : ", city.대지료구매+city.빌딩구매);
                  	currentGamer.money = currentGamer.money-city.대지료구매-city.빌딩구매;
                  	console.log("빌딩구매 후 머니", currentGamer.money);
                  	city.대지구매여부 = 1;
                  	city.빌딩구매여부 = 1;
        		}
        		if($('input[name="build"]:checked').is("#hotel")){
                    //호텔 가격 세팅
        			goldSet = parseInt($(currentGamer.afterId).find(".gold").text()) + city.호텔통행시;
                    $(currentGamer.afterId).find(".gold").text(goldSet);
                    console.log("호텔구매 전 머니", currentGamer.money);
                    console.log("구매료 : ", city.대지료구매+city.호텔구매);
                  	currentGamer.money = currentGamer.money-city.대지료구매-city.호텔구매;
                  	console.log("호텔구매 후 머니", currentGamer.money);
                  	city.대지구매여부 = 1;
                  	city.호텔구매여부 = 1;
        		}
        		$("#player"+currentGamer.player+"money").val(currentGamer.money);
                //주사위 활성화
        		$("#diceBtn").attr("disabled", false);
                //dialog 닫기
        		$("#dialog").dialog("close");
        		//dialog 팝업 삭제
        		$("#dialog").remove();
        	});
        	$("#cancel").click(function(){
        		//dialog 닫기
        		$("#diceBtn").attr("disabled", false);
        		$("#dialog").dialog("close");
        		//dialog 팝업 삭제
        		$("#dialog").remove();
        	});
        	
    	} else {
    		event = $(currentGamer.afterId).find(".event").text();
    		switch(event){
        		case "황금열쇠":
        			console.log("황금열쇠 도착!");
        			break;
        		case "사회복지기금(내는곳)":
        			console.log("사회복지기금(내는곳) 도착!");
        			currentGamer.money = donateGive(currentGamer, player);
        			console.log("donatecurrentGamer : ",currentGamer.money);
        			console.log("donatePlayer : ", player);
        			$("#player"+currentGamer.player+"money").val(currentGamer.money);
        			break;
        		case "사회복지기금(받는곳)":
        			console.log("사회복지기금(받는곳) 도착!");
        			currentGamer.money = donateReceive(currentGamer);
        			console.log("donateRecurrentGamer : ",currentGamer.money);
        			$("#player"+currentGamer.player+"money").val(currentGamer.money);
        			break;
        		case "무인도":
        			console.log("무인도 도착!");
        			setTimeout(function(){alert("무인도 도착하셨습니다 세턴동안 쉽니다 주사위가 더블이 나오면 즉시 탈출합니다.")}, 0);
        			currentGamer.round+=1;
        			break;
        		case "우주여행":
        			console.log("우주여행 도착!");
        			if(currentGamer.round == 0){
        				setTimeout(function(){alert("우주여행에 도착하셨습니다!\n다음턴에 주사위버튼을 누른 후 이동하고싶은 위치를 클릭한뒤 \n주사위버튼을 다시 누르면 턴을 넘깁니다.")}, 0);
        			}
        			currentGamer.round+=1;
        			break;
    		}
    		//dialog 팝업 삭제
    		$("#dialog").remove();
    	}
    	
    } else {
       //밟은땅의 통행료보다 현재 돈이 적을경우
       if(currentGamer.money < 1){
    	   //땅 구매여부를 선택할때까지 주사위 비활성화
		   $("#diceBtn").attr("disabled", true);
		   for(i=1;i<41;i++){
    		   id = "#p"+i;
    		   if($(id).find(".player").text() != currentGamer.player){
    			   $(id).css({opacity:0.2});
    		   }
		   }
		   //지불해야하는 금액, 지불, 파산 버튼 출력
		   center = "<span id='centerToll'>"+
						"<div>통행료 : "+$(currentGamer.afterId).find(".gold").text()+"</div>"+
						"<br>"+
						"<button type='button' id='centerPay'>지불</button>"+
						"<button type='button' id='centerEnd'>파산</button>"+
					"</span>";
		   $("#center").append(center);
		   $("#centerPay").on("click", function(){
			   if($(currentGamer.afterId).find(".gold").text() < currentGamer.money){
				   currentGamer.money = currentGamer.money-$(currentGamer.afterId).find(".gold").text();
				   $(".place").css({opacity:1});
				   $("#diceBtn").attr("disabled", false);
				   $("#centerToll").remove();
			   }
		   });
		   $("#centerEnd").on("click", function(){
			   console.log("player ", currentGamer.player, " 파산");
			   $(currentGamer.afterId).find(".btn-danger"+currentGamer.player).remove();
			   for(i=1;i<41;i++){
	    		   id = "#p"+i;
	    		   if($(id).find(".player").text() == currentGamer.player){
	    			   currentGamerCityName = $(id).find(".city").text();
	    			   currentGamerCity = cityNameReturn(currentGamerCityName);
	    			   $(id).find(".gold").text(currentGamerCity.대지료구매);
	    		   }
			   }
			   gamer.splice((currentGamer.player-1),1);
			   $(".place").css({opacity:1});
			   $("#diceBtn").attr("disabled", false);
			   $("#centerToll").remove();
			   console.log(gamer);
			   
		   });
    	   $(".place").on("click", function(){
    		   if($(this).find(".player").text() == currentGamer.player){
    			   sellId = $(this);
    			   $("#sellSpan").remove();
        		   sellCityName = $(this).find(".city").text();
            	   sellCity = cityNameReturn(sellCityName);
            	   console.log("sellCity : ", sellCity);
    			   //판매 팝업 생성
    			   sellBuild = "<span id='sellSpan'>"+sellCityName+"<br>";
    			   if(sellCity.대지구매여부 == 1){
    				   sellBuild += "<span>대지<input type='checkbox' id='sellLand' class='landCheck' disabled='disabled'><span id='sellLandGold'>"+sellCity.대지료구매+"</span>원</span><br>";
    			   }
    			   if(sellCity.별장구매여부 == 1){
    				   sellBuild += "<span>별장<input type='checkbox' id='sellVilla' class='check'><span id='sellVillaGold'>"+sellCity.빌라구매+"</span>원</span><br>";
    			   }
    			   if(sellCity.빌딩구매여부 == 1){
    				   sellBuild += "<span>빌딩<input type='checkbox' id='sellBuilding' class='check'><span id='sellBuildingGold'>"+sellCity.빌딩구매+"</span>원</span><br>";
    			   }
    			   if(sellCity.호텔구매여부 == 1){
    				   sellBuild += "<span>호텔<input type='checkbox' id='sellHotel' class='check'><span id='sellHotelGold'>"+sellCity.호텔구매+"</span>원</span><br>";
    			   }
    			   //판매, 취소버튼 생성
    			   sellBuild += "<button type='button' id='sell'>판매</button>";
    			   sellBuild += "<button type='button' id='sellCancel'>취소</button><br>";
    			   sellBuild += "</span>";
    			   $("#sellBuild").append(sellBuild);
    			   //dialog 출력
    			   $("#sellBuild").dialog({
    				   closeOnEscape : false,
    				   open : function(event, ui) {
    					   $(".ui-dialog-titlebar-close", $(this).parent()).hide();
    				   }
    			   });
    			   if($(".check").length==0){
    	    			$("#sellLand").attr("disabled", false);
    	    	   }

    	    	   $(".check").change(function(){
    	    			if($(".check:checked").length == $(".check").length){
    	    				$(".landCheck").attr("disabled", false);
    	    			} else {
    	    				$(".landCheck").attr("disabled", true);
    	    				$(".landCheck").prop("checked", false);
    	    			}
    	    	   });
    	    	   //판매 버튼 클릭시 체크박스 체크여부 판단 후 구매료만큼 돈 반환
    			   $("#sell").on("click", function() {
    				   console.log("판매 버튼 클릭!");
    				   if($("input:checkbox[id='sellLand']").is(":checked") == true){
    					   console.log("대지 판매");
    					   //건물 구매료만큼 내 돈 추가
    					   currentGamer.money += parseInt($(this).closest("#sellSpan").find("#sellLandGold").text());
    					   //구매여부 초기화
    					   sellCity.대지구매여부 = 0;
    					   //땅이 팔리면 주인이없으니 다시 구매료 출력
    					   sellId.find(".gold").text(sellCity.대지료구매);
    					   //땅 주인 초기화
    					   sellId.find(".player").text(0);
    					   //땅 투명하게
    					   sellId.css({opacity:0.2});
    				   }
    				   if($("input:checkbox[id='sellVilla']").is(":checked") == true){
    					   console.log("별장 판매");
    					   currentGamer.money += parseInt($(this).closest("#sellSpan").find("#sellVillaGold").text());
    					   sellCity.별장구매여부 = 0;
    					   //통행료 다시 세팅
    					   sellGold = sellId.find(".gold").text()-sellCity.별장통행시;
    					   sellId.find(".gold").text(sellGold);
    				   }
    				   if($("input:checkbox[id='sellBuilding']").is(":checked") == true){
    					   console.log("빌딩 판매");
    					   currentGamer.money += parseInt($(this).closest("#sellSpan").find("#sellBuildingGold").text());
    					   sellCity.빌딩구매여부 = 0;
    					   //통행료 다시 세팅
    					   sellGold = sellId.find(".gold").text()-sellCity.빌딩통행시;
    					   sellId.find(".gold").text(sellGold);
    				   }
    				   if($("input:checkbox[id='sellHotel']").is(":checked") == true){
    					   console.log("호텔 판매");
    					   currentGamer.money += parseInt($(this).closest("#sellSpan").find("#sellHotelGold").text());
    					   sellCity.호텔구매여부 = 0;
    					   //통행료 다시 세팅
    					   sellGold = sellId.find(".gold").text()-sellCity.호텔통행시;
    					   sellId.find(".gold").text(sellGold);
    				   }
    				   $("#player"+currentGamer.player+"money").val(currentGamer.money);
    				   $("#sellBuild").dialog("close");
    			   });
    			   //취소버튼
    			   $("#sellCancel").on("click", function(){
    				   	//dialog 닫기
    	        		$("#sellSpan").dialog("close");
    	        		//dialog 팝업 삭제
    	        		$("#sellSpan").remove();
    			   });
    		   }
    	   });
       }
       
       //주인이 있으면 땅 가격만큼 가진 돈에서 차감
       console.log("결제 전 머니: ", currentGamer.money);
       currentGamer.money = currentGamer.money-($(currentGamer.afterId).find(".gold").text());
       console.log("결제 후 머니: ", currentGamer.money);
       $("#player"+currentGamer.player+"money").val(currentGamer.money);
       //밟은 땅 주인에게 돈 추가
       let payPlayer = "";
       //땅 주인체크
       landPlayer = parseInt($(currentGamer.afterId).find(".player").text());
       switch(landPlayer){
       case 1:
 		    payPlayer = Player1;
 		    console.log("땅 주인 Player",landPlayer);
 		    break;
       case 2:
 			payPlayer = Player2;
		    	console.log("땅 주인 Player",landPlayer);
		    	break;
       case 3:
 			payPlayer = Player3;
		    	console.log("땅 주인 Player",landPlayer);
		    	break;
       case 4:
 			payPlayer = Player4;
		    	console.log("땅 주인 Player",landPlayer);
		    	break;
       }
       console.log("통행료 받기 전 머니 : ", payPlayer.money);
       payPlayer.money = payPlayer.money + parseInt($(currentGamer.afterId).find(".gold").text());
       console.log("통행료 받기 후 머니 : ", payPlayer.money);
       $("#player"+landPlayer+"money").val(payPlayer.money);
       //dialog 팝업 삭제
       $("#dialog").remove();
    }
    return gamer;
}
