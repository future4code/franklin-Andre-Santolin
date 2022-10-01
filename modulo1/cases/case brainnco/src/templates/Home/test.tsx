import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";

import { HomeTemplate } from ".";

jest.mock("components/Circle", () => {
	return {
		__esModule: true,
		Circle: function mock() {
			return <div data-testid="Mock circle"></div>;
		},
	};
});

jest.mock("components/Heading", () => {
	return {
		__esModule: true,
		Heading: function mock() {
			return <div data-testid="Mock heading"></div>;
		},
	};
});

describe("<HomeTemplate />", () => {
	it("Should render HomeTemplate elements correctly", () => {
		renderWithTheme(<HomeTemplate />);

		expect(screen.getByRole("heading", { name: /loterias/i })).toBeInTheDocument();
		expect(screen.getAllByTestId(/mock circle/i)).toHaveLength(6);
		expect(screen.getAllByTestId(/mock heading/i)).toHaveLength(6);
	});
});
