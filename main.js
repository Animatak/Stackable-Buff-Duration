
/* 
* Author: Animatak_
* Released: 31/01/2025
* Updated: ??
*/

import { using } from './ModClasses.js';

using('Terraria');

Player.AddBuff_TryUpdatingExistingBuffTime.hook((original, self, buffType, buffTime) => {
	
	if (buffType === 94) {
		return original(self, buffType, buffTime);
	}

	if (buffType > 0) {
		let buffIndex = -1;

		for (let i = 0; i < self.buffType.length; i++) {
			if (self.buffType[i] === buffType) {
				buffIndex = i;
				break;
			}
		}

		if (buffIndex !== -1) {
			self.buffTime[buffIndex] += buffTime;
		}
	}

	return original(self, buffType, buffTime);
});