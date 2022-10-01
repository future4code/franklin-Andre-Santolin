import { formatStringToSlug } from ".";

describe("formatStringToSlug()", () => {
	it("Should return correct slug value", () => {
		const response = formatStringToSlug("lotofácil");
		const response2 = formatStringToSlug("Dia de sorte");
		const response3 = formatStringToSlug("Mega-sena");

		expect(response).toBe("lotofacil");
		expect(response2).toBe("dia-de-sorte");
		expect(response3).toBe("mega-sena");
	});
});
