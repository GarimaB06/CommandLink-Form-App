	
    /*
	 * This function loops over the sorted data array
	 * checks if the level string includes an underscore
	 * adds the id string and level to a hashmap
	 * for easy lookup
	 * NOTE: import { Hashmap } from "../types"; to use this utility function in a tsx file
	 */

	const sortRowByLevels = () => {
		const levelsHashmap = {};
		sortedArr.forEach((object, index) => {
			const key = String(object.id);
			const level = String(object.level);
			if (level.includes("_")) {
				levelsHashmap[key] = level;
			}
		});
		return levelsHashmap;
	};
