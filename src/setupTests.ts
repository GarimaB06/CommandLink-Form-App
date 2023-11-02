// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import flattenData from "./utils/utilityFunction";

describe("flattenData", () => {
	it("should flatten an array of objects into a FlattenedData object", () => {
		const FIELD_DATA = [
			{ id: "1", name: "Item 1" },
			[
				{ id: "2", name: "Item 2.1" },
				{ id: "3", name: "Item 2.2" },
			],
			{ id: "4", name: "Item 3" },
		];

		const expectedFlattenedData = {
			"1": { id: "1", name: "Item 1", level: "0" },
			"2": { id: "2", name: "Item 2.1", level: "1_0" },
			"3": { id: "3", name: "Item 2.2", level: "1_1" },
			"4": { id: "4", name: "Item 3", level: "2" },
		};

		const result = flattenData(FIELD_DATA);

		expect(result).toEqual(expectedFlattenedData);
	});

	// Add more test cases as needed
});
