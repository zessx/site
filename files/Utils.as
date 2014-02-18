package {
	
	public class Utils {
		
		import flash.net.URLRequest;
		
		public static const URL_FACEBOOK:URLRequest 		= new URLRequest("http://www.facebook.com/marchal.samuel");
		public static const URL_LINKEDIN:URLRequest 		= new URLRequest("http://www.linkedin.com/pub/samuel-marchal/26/a73/584");
		public static const URL_SKYPE:URLRequest			= new URLRequest("skype:the.samsamx");
		public static const URL_MAIL:URLRequest 			= new URLRequest("mailto:marchal.pro@gmail.com");
		
		public static const EVENT_CLICK_ALLOWED:String		= "click_allowed";
		public static const EVENT_CLICK_NOT_ALLOWED:String	= "click_not_allowed";
		
		public static const TYPE_TWEEN_MENU:Function 		= Tween.EASEINOUTSTRONG;
		
	}
	
}