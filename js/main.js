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