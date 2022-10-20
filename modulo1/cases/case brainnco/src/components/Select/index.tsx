import { useEffect, useState, useRef } from "react";

import { QUERY } from "services/queries";

import { formatStringToSlug } from "utils/parsers/formatSlug";

import * as S from "./styles";

export type OptionsTypes = {
	id: number | string;
	nome: string;
};

type SelectProps = {
	defaultValue?: number;
	onChange?: (payload: OptionsTypes) => void;
};

export const Select = ({ defaultValue, onChange }: SelectProps) => {
	const [options, setOptions] = useState<OptionsTypes[] | []>([]);

	const selectRef = useRef<HTMLSelectElement>(null);

	useEffect(() => {
		(async () => {
			const { data } = await QUERY.getLotteries();

			setOptions(data);
		})();

		return () => {
			setOptions([]);
		};
	}, []);

	const changeSelect = () => {
		const { value, text } = selectRef.current!.options[selectRef.current!.selectedIndex];
		const payload = { id: value, nome: formatStringToSlug(text) };

		!!onChange && onChange(payload);
	};

	return (
		<S.Select ref={selectRef} value={defaultValue} onChange={changeSelect}>
			<option>Escolha uma loteria</option>
			{options.map(lottery => (
				<option key={lottery.id} value={lottery.id}>
					{lottery.nome}
				</option>
			))}
		</S.Select>
	);
};
