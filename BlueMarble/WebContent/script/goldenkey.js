/**
 * 
 */
let cardAfterPoint = 0;
let cardMoney = 0;
let cardAfterId = 0;
let player;

function minusMoney(currentGamer,cardMoney){
	console.log(currentGamer);
	currentGamer.money = currentGamer.money - cardMoney;
 	console.log(currentGamer.money);
    $("#player"+currentGamer.player+"money").val(currentGamer.money);
}

function plusMoney(currentGamer,cardMoney){
	console.log(currentGamer);
	currentGamer.money = currentGamer.money + cardMoney;
 	console.log(currentGamer.money);
	$("#player"+currentGamer.player+"money").val(currentGamer.money);
}

function cardMove(currentGamer,cardAfterPoint, cardAfterId){
	console.log(currentGamer);
	currentGamer.afterPoint = cardAfterPoint;
    $("#point").val(currentGamer.afterPoint);
 	html = "<img class='btn-danger"+currentGamer.player+"' src='/BlueMarvel/images/p"+currentGamer.player+".png'>";
 	currentGamer.beforeId = "#p"+currentGamer.beforePoint;
 	currentGamer.afterId = "#p"+cardAfterId;
    $(currentGamer.afterId).append(html);
    $(currentGamer.beforeId).find(".btn-danger"+currentGamer.player).remove();
    currentGamer.beforePoint = currentGamer.afterPoint;
    console.log("이동후 위치: "+currentGamer.afterId);
}