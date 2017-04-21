window.onload = function (){
	var slidewidth = document.getElementById("slideshow").offsetWidth;
	var objs = document.getElementsByClassName ("slide") ;
	var t = objs.length;	
	for(var i = 0; i < t; i++){
   	objs[i].style.width = slidewidth+"px";
}

}