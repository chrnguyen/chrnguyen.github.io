var _targetdiv = null;

function playVideo(videoName){
	console.log('play '+videoName);
	videoName.play();
}


function changeImg(imgId, imgName){
	document.getElementById(imgId).src = '/images/'+imgName+'.png';
}

function onHover(obj, imgId, imgName){
	if (!obj.className){
		changeImg(imgId, imgName);
	}
	else{
	}
}

function changeOver(obj,imgId,imgName){
	document.getElementById(imgId).className = 'hovering';
	onHover(obj,imgId,imgName)
}

function changeOut(obj,imgId, imgName){
	document.getElementById(imgId).className = '';
	onHover(obj,imgId,imgName)
}

function showDiv(id){
	if (_targetdiv){
		_targetdiv.className = 'hidden';
		changeImg('nav-'+_targetdiv.id, _targetdiv.id+'icon');
		document.getElementById('nav-'+_targetdiv.id).parentNode.className = "";
	}
	else{
		document.getElementById('zboard').className = 'hidden';
		changeImg('nav-zboard','zboardicon');
		document.getElementById('nav-zboard').parentNode.className = "";
	}
	
	_targetdiv = document.getElementById(id);
	_targetdiv.className = 'displayed';
	changeImg('nav-'+_targetdiv.id, id+'icon-selected');
	document.getElementById('nav-'+_targetdiv.id).parentNode.className = "selected";
}
