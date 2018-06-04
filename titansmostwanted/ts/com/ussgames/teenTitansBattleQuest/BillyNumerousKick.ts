module com.ussgames.teenTitansBattleQuest {
	
	export class BillyNumerousKick extends Action {
		
		constructor() {
			super();
		}
		
		/*override*/ public init():void {
			this.minRange = 1;
			this.maxRange = 1;
			this.power = 3;
			this.level = 1;
			this.coolDown = 0;
			this.type = Action.ATTACK;
			
			this.label = "Karate Kick";
			this.description = "Short range";
			this.iconFrame = 1;
		}
		
	}

}

import BillyNumerousKick = com.ussgames.teenTitansBattleQuest.BillyNumerousKick;