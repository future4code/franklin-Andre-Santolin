import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";

import { Circle } from ".";

describe("<Circle />", () => {
	it("Should render Circle with correct children", () => {
		renderWithTheme(<Circle>28</Circle>);

		expect(screen.getByText("28")).toBeInTheDocument();
	});

	it("Should render Circle with white background color by default", () => {
		renderWithTheme(<Circle />);

		expect(screen.getByLabelText(/ball/i)).toHaveStyle({ backgroundColor: "#FFFFFF" });
	});

	it("Should render Circle with correct background color when prop is passed", () => {
		renderWithTheme(<Circle bgColor="darkGreen" />);

		expect(screen.getByLabelText(/ball/i)).toHaveStyle({ backgroundColor: "#5AAD7D" });
	});
});
