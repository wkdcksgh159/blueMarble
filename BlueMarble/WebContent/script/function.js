/**
 *  부루마블 함수 모음
 */
//주사위 더블 체크
function doubleDice(ran1, ran2, player, allPlayer){
	console.log("doubleDice 함수 실행 확인!");
	console.log("allPlayer : ", allPlayer);
	console.log("player : ", player);
	// 플레이어 변경
    if(ran1 != ran2){
   	 	player++;
   	 if(player>allPlayer){
   		 console.log("allPlayer : ", allPlayer);
       	 player = player-allPlayer;
     }
    } else {
	   	 console.log("더블!");
	   	 if(gamer.afterPoint == 11){
	   		player++;
	   		if(player>allPlayer){
	      		 console.log("allPlayer : ", allPlayer);
	          	 player = player-allPlayer;
	        }
	   	 }
	   	 if(gamer.afterPoint == 31 || gamer.beforePoint == 31){
	   		player++;
	   		if(player>allPlayer){
	      		 console.log("allPlayer : ", allPlayer);
	          	 player = player-allPlayer;
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
function donateGive(gamer, player){
	//디버깅
	console.log("기부 성공!");
	//사회 복지 기금 15만원 지출 
    gamer.money -= 150000;
    console.log("donateGive : ", gamer.money);
    
    donate = parseInt($("#p21").find(".gold").text());
    donate += 150000;
    console.log("donate : ", donate);
    $("#p21").find(".gold").empty();
    $("#p21").find(".gold").text(donate);
    
    return gamer.money;
}

//사회복지기금(받는곳)
function donateReceive(gamer){
	//사회 복지 단체 기부금 다 받음
	donate = parseInt($("#p21").find(".gold").text());
	gamer.money += donate;
    console.log(gamer.money);

    $("#p21").find(".gold").text(0);
    
    return gamer.money;
}

//무인도
function island(gamer, ran1, ran2){
	//무인도 도착
    console.log("무인도 함수 실행 확인!");
    console.log("무인도에 빠짐");
	if(gamer.round>3 || ran1 == ran2){//3번 차례가 지나거나 ,주사위가 더블일때
		console.log("무인도 탈출!");
    	gamer.round = 0;
	}else{
		console.log("무인도 잔류..");
		gamer.round+=1;
	}
    
    return gamer.round;
}

//땅 매매 함수
function pay(gamer){
	//밟은 땅 주인 체크
    if($(gamer.afterId).find(".player").text() == 0){
    	let cityName = $(gamer.afterId).find(".city").text();
    	console.log("cityName : ", cityName);
    	//dialog 팝업 세팅
		let dialogHtml = "<div id='dialog' title='"+cityName+"'><div id='landDiv'>대지 <input type='radio' name='build' id='land' checked='checked'><span id='landToll'></span></div><div id='villaDiv'>별장 <input type='radio' name='build' id='villa'><span id='villaToll'></span></div><div id='buildingDiv'>빌딩 <input type='radio' name='build' id='building'><span id='buildingToll'></span></div><div id='hotelDiv'>호텔 <input type='radio' name='build' id='hotel'><span id='hotelToll'></span></div><button type='button' id='buy'>구매</button><button type='button' id='cancel'>취소</button></div>";
   		$("#dialogTag").append(dialogHtml);
   		//도시 객체를 저장할 변수 선언
    	let city = "";
    	city = cityNameReturn(cityName);
    	//디버깅
    	console.log("city : ", city);
    	if(city != null){
    		console.log("city player : ",gamer.player);
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
        	$("#landToll").text(" 구매료 "+ city.대지료구매+"원");
        	$("#villaToll").text(" 구매료 "+ parseInt(city.대지료구매+city.별장구매)+"원");
        	$("#buildingToll").text(" 구매료 "+ parseInt(city.대지료구매+city.빌딩구매)+"원");
        	$("#hotelToll").text(" 구매료 "+ parseInt(city.대지료구매+city.호텔구매)+"원");
        	//구매버튼 클릭시 함수 실행
        	$("#buy").click(function(){
        		console.log("buy 클릭 실행!");
        		console.log("buy player : ", gamer.player);
        		//땅 주인 세팅 (플레이어1 이면 1 이 들어감)
                $(gamer.afterId).find(".player").text(gamer.player);
        		//radio타입 클릭한 내용 찾기 (땅, 별장, 빌딩, 호텔)
        		if($('input[name="build"]:checked').is("#land")){
                  	//주인이없으면 땅 가격 세팅
                  	$(gamer.afterId).find(".gold").text(city.대지료통행시);
                  	console.log("대지료구매 전 머니", gamer.money);
                  	console.log("구매료 : ", city.대지료구매);
                  	gamer.money = gamer.money-city.대지료구매;
                  	console.log("대지료구매 후 머니", gamer.money);
                  	city.대지구매여부 = city.대지구매여부 + 1;
        		}
        		if($('input[name="build"]:checked').is("#villa")){
                    //주인이없으면 별장 가격 세팅
                    $(gamer.afterId).find(".gold").text(city.별장통행시);
                    console.log("별장구매 전 머니", gamer.money);
                    console.log("구매료 : ", city.대지료구매+city.별장구매);
                  	gamer.money = gamer.money-city.대지료구매-city.별장구매;
                  	console.log("별장구매 후 머니", gamer.money);
                  	city.별장구매여부 = city.별장구매여부 + 1;
        		}
        		if($('input[name="build"]:checked').is("#building")){
                    //주인이없으면 빌딩 가격 세팅
                    $(gamer.afterId).find(".gold").text(city.빌딩통행시);
                    console.log("빌딩구매 전 머니", gamer.money);
                    console.log("구매료 : ", city.대지료구매+city.빌딩구매);
                  	gamer.money = gamer.money-city.대지료구매-city.빌딩구매;
                  	console.log("빌딩구매 후 머니", gamer.money);
                  	city.빌딩구매여부 = city.빌딩구매여부 + 1;
        		}
        		if($('input[name="build"]:checked').is("#hotel")){
                    //호텔 가격 세팅
                    $(gamer.afterId).find(".gold").text(city.호텔통행시);
                    console.log("호텔구매 전 머니", gamer.money);
                    console.log("구매료 : ", city.대지료구매+city.호텔구매);
                  	gamer.money = gamer.money-city.대지료구매-city.호텔구매;
                  	console.log("호텔구매 후 머니", gamer.money);
                  	city.호텔구매여부 = city.호텔구매여부 + 1;
        		}
        		$("#player"+gamer.player+"money").val(gamer.money);
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
    		event = $(gamer.afterId).find(".event").text();
    		switch(event){
        		case "황금열쇠":
        			console.log("황금열쇠 도착!");
        			break;
        		case "사회복지기금(내는곳)":
        			console.log("사회복지기금(내는곳) 도착!");
        			gamer.money = donateGive(gamer, player);
        			console.log("donateGamer : ",gamer.money);
        			console.log("donatePlayer : ", player);
        			$("#player"+gamer.player+"money").val(gamer.money);
        			break;
        		case "사회복지기금(받는곳)":
        			console.log("사회복지기금(받는곳) 도착!");
        			gamer.money = donateReceive(gamer);
        			console.log("donateReGamer : ",gamer.money);
        			$("#player"+gamer.player+"money").val(gamer.money);
        			break;
        		case "무인도":
        			console.log("무인도 도착!");
        			gamer.round+=1;
        			break;
        		case "우주여행":
        			console.log("우주여행 도착!");
        			if(gamer.round == 0){
        				setTimeout(function(){alert("우주여행에 도착하셨습니다!\n다음턴에 주사위버튼을 누른 후 이동하고싶은 위치를 클릭한뒤 \n주사위버튼을 다시 누르면 턴을 넘깁니다.")}, 0);
        			}
        			gamer.round+=1;
        			break;
    		}
    		//dialog 팝업 삭제
    		$("#dialog").remove();
    	}
    	
    } else {
       //현재 돈이 없을경우
       if(gamer.money < 1){
    	   console.log("player 클래스 불러옴");
    	   for(i=1;i<41;i++){
    		   id = "#p"+i;
    		   if($(id).find(".player").text() == gamer.player){
    			   console.log("해당 id 도시 이름 출력  : ", $(id).find(".city").text());
    			   sellCityName = $(id).find(".city").text();
    			   sellBuild = "<span id='sellSpan' title='현재 보유중인 도시'>"+
				    				"<div><br>"+sellCityName+"</div>"+
			    					"<span id='sellLandDiv'>대지<input type='checkbox' checked='checked' disabled='disabled'></span>"+
			    					"<span id='sellVillaDiv'>별장<input type='checkbox'></span><br>"+
			    					"<span id='sellBuildingDiv'>빌딩<input type='checkbox'></span>"+
			    					"<span id='sellHotelDiv'>호텔<input type='checkbox'></span>"+
			    					"<button type='button' id='sell'>판매</button>"+
			    					"<button type='button' id='sellCancel'>취소</button></div>"+
				    			"</span>"
    			   $("#sellBuild").append(sellBuild);
    			   sellCity = cityNameReturn(sellCityName);
    			   console.log("sellCity : ", sellCity);
    			   $("#sellLandDiv").hide();
    			   $("#sellVillaDiv").hide();
    			   $("#sellBuildingDiv").hide();
    			   $("#sellHotelDiv").hide();
    			   if(sellCity.대지구매여부 == 1){
    				   $("#sellLandDiv").show();
    			   }
    			   if(sellCity.별장구매여부 == 1){
    				   $("#sellVillaDiv").show();
    			   }
    			   if(sellCity.빌딩구매여부 == 1){
    				   $("#sellBuildingDiv").show();
    			   }
    			   if(sellCity.호텔구매여부 == 1){
    				   $("#sellHotelDiv").show();
    			   }
    			   //땅 구매여부를 선택할때까지 주사위 비활성화
		        	$("#diceBtn").attr("disabled", true);
		        	$("#sellSpan").dialog({
		        		closeOnEscape: false,
		        	    open: function(event, ui) {
		        	            $(".ui-dialog-titlebar-close", $(this).parent()).hide();
		        	    }
		        	});
		        	$("#sell").click(function(){
		        		if($("input[type=checkbox]").prop("disabled",false);)
	    			});
    		   }
    	   }
    	   /*
    	   testArray = [];
    	   citytestArray = [];
    	   test = $(".place").find(".player").text();
    	   ttest = test.split("");
    	   console.log("test : ", test);
    	   console.log("ttest : ", ttest);
    	   for(i=0;i<ttest.length;i++){
    		   if(gamer.player == ttest[i]){
    			   console.log(">>>>>if playerBuild ");
    			   testArray.push(ttest[i]);
        		   //citytestArray.push(cityttest[i]);
    			   console.log(">>>>>>>> i : ", i);
        	   } else {
        		   console.log("보유중인 건물 없음");
        	   }
    	   }
    	   console.log("testArray : ", testArray);
    	   console.log("citytestArray : ", citytestArray);
    	   //console.log("playerBuild : ", playerBuild);
    	   */
       } else {
    	   
       }
       //주인이 있으면 땅 가격만큼 가진 돈에서 차감
       console.log("결제 전 머니: ", gamer.money);
       gamer.money = gamer.money-($(gamer.afterId).find(".gold").text());
       console.log("결제 후 머니: ", gamer.money);
       $("#player"+gamer.player+"money").val(gamer.money);
       //밟은 땅 주인에게 돈 추가
       let payPlayer = "";
       //땅 주인체크
       landPlayer = parseInt($(gamer.afterId).find(".player").text());
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
       payPlayer.money = payPlayer.money + parseInt($(gamer.afterId).find(".gold").text());
       console.log("통행료 받기 후 머니 : ", payPlayer.money);
       $("#player"+landPlayer+"money").val(payPlayer.money);
       //dialog 팝업 삭제
       $("#dialog").remove();
    }
}
