var _targetdiv = null;

function playVideo(videoName){
	document.getElementById('pulse-'+videoName).className = 'hoveringonme';
	document.getElementById('hover-'+videoName).style.visibility = 'hidden';
	document.getElementById(videoName+'video').play();
}

function pauseVideo(videoName){
	document.getElementById('pulse-'+videoName).className = 'hoveronme';
	document.getElementById('hover-'+videoName).style.visibility = 'visible';
	document.getElementById(videoName+'video').pause();
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
