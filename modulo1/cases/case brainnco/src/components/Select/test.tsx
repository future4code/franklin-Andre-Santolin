import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { renderWithTheme } from "utils/tests/helpers";

import { Select } from ".";

describe("<Select />", () => {
	it("Should render Select with correct options", async () => {
		renderWithTheme(<Select />);

		expect(screen.getByRole("combobox")).toBeInTheDocument();
		expect(screen.getByRole("option", { name: /Escolha uma loteria/i })).toBeInTheDocument();
		expect(await screen.findByRole("option", { name: /mega-sena/i })).toBeInTheDocument();
	});

	it("Should change select options", async () => {
		renderWithTheme(<Select />);

		const defaultOption = screen.getByRole("option", {
			name: "Escolha uma loteria",
		}) as HTMLOptionElement;
		const megaSenaOption = (await screen.findByRole("option", {
			name: /mega-sena/i,
		})) as HTMLOptionElement;

		const select = screen.getByRole("combobox");

		expect(defaultOption.selected).toBe(true);

		userEvent.selectOptions(select, megaSenaOption);

		expect(megaSenaOption.selected).toBe(true);
	});

	it("Should render default value correctly", async () => {
		renderWithTheme(<Select defaultValue={0} />);

		const megaSenaOption = (await screen.findByRole("option", {
			name: /mega-sena/i,
		})) as HTMLOptionElement;

		expect(megaSenaOption.selected).toBe(true);
	});

	it("Should dispatch onChange function when option changes", async () => {
		const mockOnChange = jest.fn();

		renderWithTheme(<Select onChange={mockOnChange} />);

		const diaDeSorteOption = (await screen.findByRole("option", {
			name: /dia de sorte/i,
		})) as HTMLOptionElement;

		const select = screen.getByRole("combobox");

		expect(mockOnChange).not.toBeCalled();

		userEvent.selectOptions(select, diaDeSorteOption);

		expect(mockOnChange).toBeCalledTimes(1);
		expect(mockOnChange).toHaveBeenCalledWith({ id: "5", nome: "dia-de-sorte" });
	});
});
