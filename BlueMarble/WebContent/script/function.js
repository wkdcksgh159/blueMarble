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
        		$("#villaDiv").hide();//attr("disabled", true);
        		$("#buildingDiv").hide();
        		$("#hotelDiv").hide();
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
        		}
        		if($('input[name="build"]:checked').is("#villa")){
                    //주인이없으면 별장 가격 세팅
                    $(gamer.afterId).find(".gold").text(city.별장통행시);
                    console.log("별장구매 전 머니", gamer.money);
                    console.log("구매료 : ", city.대지료구매+city.별장구매);
                  	gamer.money = gamer.money-city.대지료구매-city.별장구매;
                  	console.log("별장구매 후 머니", gamer.money);
        		}
        		if($('input[name="build"]:checked').is("#building")){
                    //주인이없으면 빌딩 가격 세팅
                    $(gamer.afterId).find(".gold").text(city.빌딩통행시);
                    console.log("빌딩구매 전 머니", gamer.money);
                    console.log("구매료 : ", city.대지료구매+city.빌딩구매);
                  	gamer.money = gamer.money-city.대지료구매-city.빌딩구매;
                  	console.log("빌딩구매 후 머니", gamer.money);
        		}
        		if($('input[name="build"]:checked').is("#hotel")){
                    //호텔 가격 세팅
                    $(gamer.afterId).find(".gold").text(city.호텔통행시);
                    console.log("호텔구매 전 머니", gamer.money);
                    console.log("구매료 : ", city.대지료구매+city.호텔구매);
                  	gamer.money = gamer.money-city.대지료구매-city.호텔구매;
                  	console.log("호텔구매 후 머니", gamer.money);
        		}
        		$("#player"+gamer.player+"money").val(gamer.money);
                //주사위 활성화
        		$("#diceBtn").attr("disabled", false);
                //dialog 닫기
        		$("#dialog").dialog("close");
        	});
        	$("#cancel").click(function(){
        		//dialog 닫기
        		$("#diceBtn").attr("disabled", false);
        		$("#dialog").dialog("close");
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
        			$("#player"+player+"money").val(gamer.money);
        			break;
        		case "사회복지기금(받는곳)":
        			console.log("사회복지기금(받는곳) 도착!");
        			gamer.money = donateReceive(gamer);
        			console.log("donateReGamer : ",gamer.money);
        			$("#player"+player+"money").val(gamer.money);
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
    	}
    	
    } else {
       //현재 돈이 없을경우
       if(gamer.money == 0){
    	   
       } else {
    	   
       }
       //주인이 있으면 땅 가격만큼 가진 돈에서 차감
       console.log("결제 전 머니: ", gamer.money);
       gamer.money = gamer.money-($(gamer.afterId).find(".gold").text());
       console.log("결제 후 머니: ", gamer.money);
       $("#player"+gamer.player+"money").val(gamer.money);
       //밟은 땅 주인에게 돈 추가
       //땅 주인 객체 선언
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
    }
}
