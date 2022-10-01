import { parseStringToNumber } from ".";

describe("parseStringToNumber()", () => {
	it("Should return correct number when parsed", () => {
		const response = parseStringToNumber(1);
		const response2 = parseStringToNumber("1");

		expect(response).toBe(1);
		expect(response2).toBe(1);
	});
});
