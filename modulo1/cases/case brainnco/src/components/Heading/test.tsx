import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";

import { Heading } from ".";

describe("<Heading />", () => {
	it("Should render Heading with correct children", () => {
		renderWithTheme(<Heading>My text</Heading>);

		expect(screen.getByRole("heading", { name: /my text/i })).toBeInTheDocument();
	});

	it("Should render Heading with medium size by default", () => {
		renderWithTheme(<Heading>My text</Heading>);

		expect(screen.getByRole("heading", { name: /my text/i })).toHaveStyle({ fontSize: "2.8rem" });
	});

	it("Should render Heading with small size when prop is passed", () => {
		renderWithTheme(<Heading size="small">My text</Heading>);

		expect(screen.getByRole("heading", { name: /my text/i })).toHaveStyle({ fontSize: "2.0rem" });
	});

	it("Should render Heading with black color by default", () => {
		renderWithTheme(<Heading>My text</Heading>);

		expect(screen.getByRole("heading", { name: /my text/i })).toHaveStyle({ color: "#333333" });
	});

	it("Should render Heading with white color when prop is passed", () => {
		renderWithTheme(<Heading color="white">My text</Heading>);

		expect(screen.getByRole("heading", { name: /my text/i })).toHaveStyle({ color: "#FFFFFF" });
	});
});
