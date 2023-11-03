import { FieldData, FlattenedData, FieldObject } from "../types";
/*
    TO DO : Unit test 1
*/

const flattenData = (FIELD_DATA: FieldData): FlattenedData => {
	const flattenedData: FlattenedData = {};
	for (let i = 0; i < FIELD_DATA.length; i++) {
		const element = FIELD_DATA[i];
		const level = i;
		if (Array.isArray(element)) {
			element.forEach((object, index) => {
				const id: string = object.id;
				const copiedElement = { ...object };
				copiedElement["level"] = `${level}_${index}`;
				copiedElement["value"] = "";
				flattenedData[id] = copiedElement;
			});
		} else {
			const id: string = element.id;
			const copiedElement = { ...element };
			copiedElement["level"] = `${level}`;
			copiedElement["value"] = "";
			flattenedData[id] = copiedElement;
		}
	}
	return flattenedData;
};

export const sortFormDataByLevels = (
	formData: FlattenedData
): FieldObject[] => {
	const dataObjectsArray: FieldObject[] = Object.values(formData);
	const sortedDataObjectsArray: FieldObject[] = dataObjectsArray.sort(
		(a, b) => {
			const levelStr1 = String(a.level);
			const levelStr2 = String(b.level);
			return levelStr1.localeCompare(levelStr2);
		}
	);
	return sortedDataObjectsArray;
};

/*
 * This method accepts the id string(written in camelCase) and converts it to title case
 */
export const camelCaseToTitleCase = (input: string): string => {
	const words: string[] = input.split(/(?=[A-Z])/);
	const titleCase: string = words
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(" ");
	return titleCase;
};

export default flattenData;
