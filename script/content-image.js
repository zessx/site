var path = 'img/content/';
var none = 'none.png';

function init()
{
	img = document.getElementById("contentImg");
	
	img.src = path + none;
	
	var contents = getElementsByClass("content");
	for(var i = 0; i < contents.length; i++)
	{
		contents[i].addEventListener("mouseover", mouseOverHandler, false);
		contents[i].addEventListener("mouseout", mouseOutHandler, false);
	}
}

function mouseOverHandler(event) 
{ 
	/*if(this.getAttribute("img") != null)
		img.src = path + this.getAttribute("img");
	else*/
		img.src = path + none;
} 

function mouseOutHandler(event)
{
	img.src = path + none;
}

function getElementsByClass(classe)
{
	var divs = document.getElementsByTagName('*');
	var resultats = new Array();
	
	for(var i = 0; i < divs.length; i++)
	{
		if(divs[i].className == classe)
		{
			resultats.push(divs[i]);
		}
	}
	
	return resultats;
}

window.onload = init;