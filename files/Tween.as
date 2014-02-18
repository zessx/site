package {
	
	import gs.OverwriteManager;
	import gs.TweenLite;
	import gs.easing.*;
	
	public class Tween {
		
		public static const LINEAR:Function = Linear.easeNone;
		public static const EASEINSINE:Function = Sine.easeIn;
		public static const EASEOUTSINE:Function = Sine.easeOut;
		public static const EASEINOUTSINE:Function = Sine.easeInOut;
		
		public static const EASEINCUBIC:Function = Cubic.easeIn;
		public static const EASEOUTCUBIC:Function = Cubic.easeOut;
		public static const EASEINOUTCUBIC:Function = Cubic.easeInOut;
		
		public static const EASEINCIRC:Function = Circ.easeIn;
		public static const EASEOUTCIRC:Function = Circ.easeOut;
		public static const EASEINOUTCIRC:Function = Circ.easeInOut;
		
		public static const EASEINQUINT:Function = Quint.easeIn;
		public static const EASEOUTQUINT:Function = Quint.easeOut;
		public static const EASEINOUTQUINT:Function = Quint.easeInOut;
		
		public static const EASEINBACK:Function = Back.easeIn;
		public static const EASEOUTBACK:Function = Back.easeOut;
		public static const EASEINOUTBACK:Function = Back.easeInOut;
		
		public static const EASEINQUAD:Function = Quad.easeIn;
		public static const EASEOUTQUAD:Function = Quad.easeOut;
		public static const EASEINOUTQUAD:Function = Quad.easeInOut;
		
		public static const EASEINQUART:Function = Quart.easeIn;
		public static const EASEOUTQUART:Function = Quart.easeOut;
		public static const EASEINOUTQUART:Function = Quart.easeInOut;
		
		public static const EASEINEXPO:Function = Expo.easeIn;
		public static const EASEOUTEXPO:Function = Expo.easeOut;
		public static const EASEINOUTEXPO:Function = Expo.easeInOut;
		
		public static const EASEINELASTIC:Function = Elastic.easeIn;
		public static const EASEOUTELASTIC:Function = Elastic.easeOut;
		public static const EASEINOUTELASTIC:Function = Elastic.easeInOut;
		
		public static const EASEINBOUNCE:Function = Bounce.easeIn;
		public static const EASEOUTBOUNCE:Function = Bounce.easeOut;
		public static const EASEINOUTBOUNCE:Function = Bounce.easeInOut;
		
		public static const EASEINSTRONG:Function = Strong.easeIn;
		public static const EASEOUTSTRONG:Function = Strong.easeOut;
		public static const EASEINOUTSTRONG:Function = Strong.easeInOut;
		
		public static const START:String 	= 'start';
		public static const UPDATE:String 	= 'update';
		public static const COMPLETE:String = 'complete';
		
		/**
		 * Les tweens ne sont pas écrasés par d'autres appel à TweenA
		 */
		public static const NONE:int = OverwriteManager.NONE;
		
		/**
		 * Seules les propriétés similaires sont écrasées (exemple :  tween1 x:300 y:200, tween2 x:150 z:200. Seul la propriété x de tween1 est écrasée)
		 */
		public static const AUTO:int = OverwriteManager.AUTO;
		
		/**
		 * Les tweens sont écrasés à chaque appel à TweenA
		 */
		public static const ALL:int = OverwriteManager.ALL;
		
		/**
		 * N'écrase que les propriétés des tweens qui sont dans le meme interval de temps
		 */
		public static const CONCURRENT:int = OverwriteManager.CONCURRENT;
		
		private var objRappel:Object;
		private var nomFctRappel:String;
		private var tl:TweenLite;
		
		/**
		 * Fait varier une propriété d'un objet pendant un certain temps
		 * @param	obj L'objet dont on veut faire varier les propriétés
		 * @param	property1 la  propriété de l'objet à fair varier
		 * @param	value la valeur de la propriété
		 * @param	temps en secondes
		 * @param	_objRappel l'objet à rappeller
		 * @param	_nomFctRappel le nom de la fonction à rappeller
		 * @param	tween le nom de la fonction de variation (utiliser les constantes de la classe TweenA)
		 * @param	delai delai en secondes avant de commencer la variation
		 */
		
		public function Tween(obj:*, property:String, value:*, temps:Number, _objRappel:Object = null, _nomFctRappel:String = null, _tween:Function = null, delai:Number = 0) {
			objRappel = _objRappel;
			nomFctRappel = _nomFctRappel;
			var tween:Function = _tween == null ? Cubic.easeOut : _tween;
			var values:Object = new Object();
			values[property] = value;
			values['ease'] = tween;
			values['delay'] = delai;
			values['onStart'] = tweenStart;
			values['onUpdate'] = tweenUpdate;
			values['onComplete'] = tweenComplete;	
			
			tl = TweenLite.to(obj, temps, values) as TweenLite;
		}
		
		/**
		 * @private
		 */
		public function tweenStart() {
			if(objRappel != null) objRappel[nomFctRappel](START);
		}
		
		/**
		 * @private
		 */
		public function tweenUpdate() {
			if(objRappel != null) objRappel[nomFctRappel](UPDATE);
		}
		
		/**
		 * @private
		 */
		public function tweenComplete() {
			if(objRappel != null) objRappel[nomFctRappel](COMPLETE);
		}
		
		/**
		 * 
		 * @return 
		 * 
		 */		
		public function getTween():TweenLite {
			return tl;
		}
		
		public static function setMode(mode:int) {
			OverwriteManager.init(mode);
		}
		/**
		 * Supprime tous les tweens en cours d'un objet
		 * @return 
		 */
		public static function removeTweens(obj:Object, complete:Boolean = false):void {
			TweenLite.killTweensOf(obj, complete);
		}
		
		public static function removeTween(tween:Tween, clear:Boolean = true):void {
			TweenLite.removeTween(tween.getTween(), clear);
		}
	}
	
}