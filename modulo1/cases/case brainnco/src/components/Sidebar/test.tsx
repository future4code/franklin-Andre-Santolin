import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { renderWithTheme } from "utils/tests/helpers";

import { Sidebar } from ".";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require("next/router"), "useRouter");
const push = jest.fn();

useRouter.mockImplementation(() => ({
	push,
}));

const props = {
	loteriaId: 0,
	loteria: "mega-sena",
	concurso: "2359",
	data: "2022-02-12T02:50:26.269Z",
};

describe("<Sidebar />", () => {
	it("Should render Sidebar with correct elements", () => {
		renderWithTheme(<Sidebar {...props} />);

		expect(screen.getByRole("img", { name: /Logo sena/i })).toBeInTheDocument();
		expect(screen.getByRole("heading", { name: props.loteria })).toBeInTheDocument();
		expect(screen.getByText(props.concurso)).toBeInTheDocument();
		expect(screen.getByText("11/02/2022")).toBeInTheDocument();
	});

	it("Should render Sidebar with correct background", () => {
		const { container } = renderWithTheme(<Sidebar {...props} />);

		expect(container.firstChild).toHaveStyle({ backgroundColor: "#6BEFA3" });
	});

	it("Should call push with correct URL params", async () => {
		renderWithTheme(<Sidebar {...props} />);

		const quinaOption = await screen.findByRole("option", {
			name: /quina/i,
		});
		const select = screen.getByRole("combobox");

		expect(quinaOption).toBeInTheDocument();

		userEvent.selectOptions(select, quinaOption);

		await waitFor(() =>
			expect(push).toHaveBeenCalledWith({
				pathname: "/loterias/quina/5534",
			}),
		);
	});
});
