import "@testing-library/jest-dom";
import flattenData, {
	camelCaseToTitleCase,
	sortFormDataByLevels,
} from "../utils/utilityFunction";
import { FieldData, FlattenedData } from "../types/types";

const expectedFlattenedData: FlattenedData = {
	fName: {
		id: "fName",
		type: "text",
		placeholder: "Item 1",
		level: "0",
		value: "",
	},
	jobTitle: {
		id: "jobTitle",
		type: "select",
		placeholder: "Item 2.1",
		level: "1_0",
		value: "",
		options: [
			"Engineer - lead",
			"Engineer - mid level",
			"Engineer - junior",
			"Engineer - front end focused",
			"Engineer - backend focused",
			"Engineer - full stack",
		],
	},
	animal: {
		id: "animal",
		type: "text",
		placeholder: "Item 2.2",
		level: "1_1",
		value: "",
	},
	maidenName: {
		id: "maidenName",
		type: "text",
		placeholder: "Item 3",
		level: "2",
		value: "",
	},
};

describe("Normalization of data for Redux store", () => {
	it("should flatten the raw data into a FlattenedData object", () => {
		const testRawFieldsData: FieldData = [
			{ id: "fName", type: "text", placeholder: "Item 1" },
			[
				{
					id: "jobTitle",
					type: "select",
					placeholder: "Item 2.1",
					options: [
						"Engineer - lead",
						"Engineer - mid level",
						"Engineer - junior",
						"Engineer - front end focused",
						"Engineer - backend focused",
						"Engineer - full stack",
					],
				},
				{ id: "animal", type: "text", placeholder: "Item 2.2" },
			],
			{ id: "maidenName", type: "text", placeholder: "Item 3" },
		];

		const result = flattenData(testRawFieldsData);
		expect(result).toEqual(expectedFlattenedData);
	});
	it("sortFormDataByLevels function should sort the flattened data based on the levels", () => {
		const expectedDataRows = [
			{
				id: "fName",
				type: "text",
				placeholder: "Item 1",
				level: "0",
				value: "",
			},
			{
				id: "jobTitle",
				type: "select",
				placeholder: "Item 2.1",
				level: "1_0",
				value: "",
				options: [
					"Engineer - lead",
					"Engineer - mid level",
					"Engineer - junior",
					"Engineer - front end focused",
					"Engineer - backend focused",
					"Engineer - full stack",
				],
			},
			{
				id: "animal",
				type: "text",
				placeholder: "Item 2.2",
				level: "1_1",
				value: "",
			},
			{
				id: "maidenName",
				type: "text",
				placeholder: "Item 3",
				level: "2",
				value: "",
			},
		];
		const result = sortFormDataByLevels(expectedFlattenedData);
		expect(result).toEqual(expectedDataRows);
	});
	it("Normalization of field label names for usage the form field labels", () => {
		const testLabelName = "motherMaidenName";
		const expectedLabelName = "Mother Maiden Name";
		const result = camelCaseToTitleCase(testLabelName);
		expect(result).toEqual(expectedLabelName);
	});
});
