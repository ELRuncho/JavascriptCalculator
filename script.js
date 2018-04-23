var current=[],complete=[],numbers=[];
function getButton(value){
	var toShow='';
	current.push(value);
	var Screen=document.getElementById("currentScreen"), Resume=document.getElementById("resumeScreen");
	toShow+=current.join('');
	if (toShow.length>10){
		toShow="ERR";
	}
	Screen.innerHTML=toShow;
	if (complete.length<2) {
		Resume.innerHTML=toShow;
	}else{Resume.innerHTML=complete.join('');}	
}

function operand(value){
	var num=current.join('');
	complete.push(Number(num));
	numbers.push(Number(num));
	complete.push(value);
	var Screen=document.getElementById("currentScreen");
	Screen.innerHTML=value;
	current=[];
}

function clearAll(){
	current=[];
	complete=[];
	var Screen=document.getElementById("currentScreen"), Resume=document.getElementById("resumeScreen");
	Screen.innerHTML='0';
	Resume.innerHTML='0';
}

function clearCurrent(){
	current=[];
	var Screen=document.getElementById("currentScreen");
	Screen.innerHTML='0';
}

function equal(){
	var result=complete[0], Screen=document.getElementById("currentScreen"), Resume=document.getElementById("resumeScreen");
	var num=current.join('');
	complete.push(Number(num));
	numbers.push(Number(num));
	console.log(complete);
	console.log(result);
	for (var i=1;i<complete.length-1; i+=2) {
		if (typeof(complete[i])!='number') {
			switch(complete[i]){
				case '+':
					result+=complete[i+1];
					break;
				case '-':
					result-=complete[i+1];
					break;
				case '/':
					result=result/complete[i+1];
					break;
				case '*':
					result=result*complete[i+1];
					break;	
				default:
					reult='ERR';
					break;
			}
		}
	}

	
	Screen.innerHTML=result;
	Resume.innerHTML=complete.join('')+'='+result;
	current=[];
	complete=[];
}
