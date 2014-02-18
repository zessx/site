/*
@author: 	Samuel Marchal [SamsamX]
@Date:		21-07-2011
@Subject:	
	This script looks for your userAgent var,
	and return you browser real name and version.
	It tries more than 120 web browsers, and
	some thousands of versions.
@Variables:
	display_browser 	: Name of the browser to display
	browser				: Real name of the browser
	version				: Version of the browser
	isHTML5compatible	: true if you can use HTML5 / CSS3, false otherwise
@Warning:
	Don't change browsers Array's order, most
	common ones are at the end, cause of relations 
	between browsers (f.e you can found "Safari/" 
	in the Chrome userAgent var, then you must 
	look for Chrome BEFORE Safari).
@contact:	marchal.pro@gmail.com
*/

var ua = navigator.userAgent;

var browser;
var display_browser;
var version;
var isHTML5compatible;

var unknownBrowser = "[Unknown browser]";
var unknownVersion = "";

var browsers = new Array(
	"ABrowse",
	"Acoo Browser",
	"America Online Browser",
	"AmigaVoyager",
	"AOL",
	"Arora",
	"Avant Browser",
	"Beonex",
	"BonEcho",
	"Browzar",
	"Charon",
	"Camino",
	"Cheshire",
	"Chimera",
	"ChromePlus",
	"CometBird",
	"Comodo_Dragon",
	"Conkeror",
	"Crazy Browser",
	"Cyberdog",
	"Deepnet Explorer",
	"DeskBrowse",
	"Dillo",
	"Dooble",
	"Element Browser",
	"ELinks",
	"Enigma Browser",
	"Epiphany",
	"epiphany-browser",
	"epiphany-webkit",
	"Escape",
	"Firebird",
	"Fireweb Navigator",
	"Flock",
	"Fluid",
	"Galaxy",
	"Galeon",
	"GranParadiso",
	"GreenBrowser",
	"Hana",
	"HotJava",
	"IBM WebExplorer",
	"IBrowse",
	"iCab",
	"Iceape",
	"IceCat",
	"Iceweasel",
	"iNet Browser",
	"iRider",
	"Iron",
	"K-Meleon",
	"K-Ninja",
	"Kapiko",
	"Kazehakase",
	"KMLite",
	"Konqueror",
	"LeechCraft",
	"Lobo",
	"lolifox",
	"Lorentz",
	"Lunascape",
	"Lynx",
	"Madfox",
	"Maxthon",
	"Midori",
	"Minefield",
	"myibrow",
	"MyIE2",
	"Namoroka",
	"Navscape",
	"NavscapeNavigator",
	"NCSA_Mosaic",
	"NCSA Mosaic",
	"NetNewsWire",
	"NetPositive",
	"Netscape",
	"NetSurf",
	"Orca",
	"Oregano",
	"osb-browser",
	"Palemoon",
	"Phoenix",
	"Pogo",
	"Prism",
	"QtWeb Internet Browser",
	"Rekonq",
	"retawq",
	"RockMelt",
	"SeaMonkey",
	"Shiira",
	"Shiretoko",
	"Sleipnir",
	"SlimBrowser",
	"Stainless",
	"SunriseBrowser",	
	"Sylera",
	"TencentTraveler",
	"TheWorld",
	"uzbl",
	"Vimprobable",
	"Vonkeror",
	"w3m",
	"WeltweitimnetzBrowser",
	"WorldWideWeb",
	"Wyzo",
	"KKman",
	"Links",
	"OmniWeb",
	"Sunrise",
	"Opera",
	"Navigator",
	"surf",
	"MSIE",
	"Chrome",
	"Safari",
	"Firefox",
	"Mozilla");
	
function checkBrowser()
{
	browser = unknownBrowser;
	display_browser = unknownBrowser;
	var l = browsers.length;
	for(var i= 0; i < l; i++)
	{
		var c_browser = browsers[i];		
		if(ua.toLowerCase().indexOf(c_browser.toLowerCase()) != -1) 
		{
			browser = c_browser;
			switch(c_browser)
			{
				case "MSIE": 				display_browser = "Internet Explorer"; break;
				case "NavscapeNavigator": 	display_browser = "Navscape"; break;
				case "NCSA_Mosaic": 		display_browser = "NCSA Mosaic"; break;
				case "Navigator": 			display_browser = "Netscape"; break;
				case "TheWorld": 			display_browser = "theWorld Browser"; break;
				case "SunriseBrowser": 		display_browser = "Sunrise"; break;
				case "epiphany-browser": 	display_browser = "Epiphany"; break;
				case "epiphany-webkit":		display_browser = "Epiphany"; break;
				case "Mozilla":				display_browser = ua.toLowerCase().indexOf("rv:") == -1 ? (ua.substring(8, 9) == "5" ? "Mozilla" : "Netscape") : "Mozilla"; browser = display_browser; break;
				default:					display_browser = c_browser;
			}
		}
		if(browser != unknownBrowser) break;
	}
	checkVersion(); 
	checkHTML5Compatibility();
}

function checkVersion()
{
	version = unknownVersion;
	var strVersion = "";
	var index = ua.toLowerCase().indexOf(browser.toLowerCase());
	var browserLength =  browsers[browsers.indexOf(browser)].length;
	switch(browser)
	{
		case unknownBrowser: break;
		case "IBM WebExplorer": strVersion = ua.substring(index + browserLength + 3); break;
		case "KKman": 			strVersion = ua.substring(index + browserLength); break;
		case "ELinks": 			strVersion = ua.toLowerCase().indexOf("elinks (") != -1 ? ua.substring(ua.toLowerCase().indexOf("elinks (") + 8) : ua.substring(index + browserLength + 1); break;
		case "Links": 			strVersion = ua.substring(index + browserLength + 2); break;
		case "LeechCraft": 		strVersion = ua.toLowerCase().indexOf("poshuku") != -1 ? ua.substring(ua.toLowerCase().indexOf("poshuku") + 8) : ua.substring(ua.toLowerCase().indexOf("leechcraft/") + 11); break;
		case "Mozilla": 		strVersion = ua.substring(ua.toLowerCase().indexOf("rv:") + 3); break;
		case "Netscape": 		strVersion = ua.toLowerCase().indexOf("netscape6/") != -1 ? ua.substring(ua.toLowerCase().indexOf("netscape6/") + 10) : ua.substring(index + browserLength + 1); break;
		case "OmniWeb": 		strVersion = ua.substring(index + browserLength + 2); break;
		case "Opera": 			strVersion = ua.toLowerCase().indexOf("version/") != -1 ? ua.substring(ua.toLowerCase().indexOf("version/") + 8) : ua.substring(index + browserLength + 1); break;
		case "Safari": 			strVersion = ua.toLowerCase().indexOf("version/") != -1 ? ua.substring(ua.toLowerCase().indexOf("version/") + 8) : (ua.substring(ua.toLowerCase().indexOf("safari/") + 7, ua.toLowerCase().indexOf("safari/") + 9) == "41" ? "2" : "1"); break;
		default:				strVersion = ua.substring(index + browserLength + 1); break;
	}
	if(strVersion != "")
	{
		var l = strVersion.length;
		for(var i = 0; i < l; i++)
		{
			var c = strVersion.charAt(i);
			if(c == "0" || c == "1" || c == "2" || c == "3" || c == "4" || c == "5" || c == "6" || c == "7" || c == "8" || c == "9" || c == ".")
				version += c;
			else break;
		}
	}
}

function checkHTML5Compatibility()
{
	isHTML5compatible = false;
	var t_version = version.split(".");
	if(		(browser == "Chrome"		&& t_version[0] >= 8)
		|| 	(browser == "Firefox" 		&& t_version[0] >= 4)
		|| 	(browser == "Opera" 		&& t_version[0] >= 10)
		||	(browser == "Safari"		&& t_version[0] >= 4)
		||	(browser == "MSIE"			&& t_version[0] >= 10)
		)
		isHTML5compatible = true;
}

// Fix Array.indexOf() error with MSIE
Array.prototype.indexOf = function(obj, start) {
     for (var i = (start || 0), j = this.length; i < j; i++) {
         if (this[i] === obj) { return i; }
     }
     return -1;
}

window.onenterframe = checkBrowser();