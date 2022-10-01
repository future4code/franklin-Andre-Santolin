import { screen } from "@testing-library/react";

import { renderWithTheme } from "utils/tests/helpers";

import { ConcursoTemplate } from ".";

jest.mock("components/Sidebar", () => {
	return {
		__esModule: true,
		Sidebar: function mock() {
			return <div data-testid="Mock sidebar"></div>;
		},
	};
});

jest.mock("components/NumbersList", () => {
	return {
		__esModule: true,
		NumbersList: function mock() {
			return <div data-testid="Mock numbers list"></div>;
		},
	};
});

describe("<ConcursoTemplate />", () => {
	it("Should render ConcursoTemplate with correct components", () => {
		renderWithTheme(<ConcursoTemplate />);

		expect(screen.getByTestId(/mock sidebar/i)).toBeInTheDocument();
		expect(screen.getByTestId(/mock numbers list/i)).toBeInTheDocument();
	});
});
