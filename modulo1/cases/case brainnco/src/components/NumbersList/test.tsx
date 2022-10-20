import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";

import { NumbersList } from ".";

const props = {
	numbers: ["01", "02", "04"],
};

describe("<NumbersList />", () => {
	it("Should render correct elements", () => {
		renderWithTheme(<NumbersList {...props} />);

		expect(screen.getByText("01")).toBeInTheDocument();
		expect(screen.getByText("02")).toBeInTheDocument();
		expect(screen.getByText("04")).toBeInTheDocument();
		expect(
			screen.getByText(
				/Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA/i,
			),
		).toBeInTheDocument();
	});
});
