module com.ussgames.teenTitansBattleQuest {
	
	export class BankRobberLongRngeAttack extends Action {
		
		constructor() {
			super();
		}
		
		/*override*/ public init():void {
			this.minRange = 2;
			this.maxRange = 3;
			this.power = 1;
			this.level = 1;
			this.coolDown = 0;
			this.type = Action.ATTACK;
			
			this.longRangeAnimClipClass = Main.addGAFMovieClip("RockFly");
			this.label = "Slingshot";
			this.iconFrame = 2;
		}
		
	}

}

import BankRobberLongRngeAttack = com.ussgames.teenTitansBattleQuest.BankRobberLongRngeAttack;