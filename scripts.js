var checkInput = document.getElementById("textBox");
var checkSubmit = document.getElementById("textButton");
var textMessage = document.getElementById("textAnswer");
	
checkSubmit.addEventListener("click",function(){
	var pureString = checkInput.value.toLowerCase().replace(/[^A-Za-z0-9]/gi, "");
	var reverse = pureString.split("").reverse().join("");
	if(reverse === pureString){
		textMessage.innerHTML = "yes";
	} else {
		textMessage.innerHTML = "no";
	}
});