import { FieldData, FlattenedData } from "../types";
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

export default flattenData;
