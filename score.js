var p1b=document.querySelector("#p1");
var p2b=document.getElementById("p2");
var resetbut=document.getElementById("reset");
var p1disp=document.querySelector("#p1disp");
var p2disp=document.querySelector("#p2disp");
var numInput=document.querySelector("input");
var winningScoreDisplay=document.querySelector("p span ");
var p1score=0;
var p2score=0;
var gameover=false;
var winningScore=5;
p1b.addEventListener("click",function(){
	if(!gameover){
		p1score++;
		if(p1score === winningScore){
			p1disp.classList.add("winner");
			gameover=true;
		}
		p1disp.textContent=p1score;
	}
});
p2b.addEventListener("click",function(){
	if(!gameover){
		p2score++;
		if(p2score === winningScore){
			p2disp.classList.add("winner");
			gameover=true;
		}
		p2disp.textContent=p2score;
	}
});
resetbut.addEventListener("click",function(){
	reset();
});
function reset(){
	p1score=0;
    p2score=0;
    p1disp.textContent=0;
    p2disp.textContent=0;
    p1disp.classList.remove("winner");
    p2disp.classList.remove("winner");
    gameover=false;
}
numInput.addEventListener("change",function(){
	winningScoreDisplay.textContent=numInput.value;
	winningScore=Number(numInput.value);
	reset();
})