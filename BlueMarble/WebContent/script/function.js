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

