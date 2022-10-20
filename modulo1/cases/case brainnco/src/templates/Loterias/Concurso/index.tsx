import { Sidebar } from "components/Sidebar";
import { NumbersList } from "components/NumbersList";

import * as S from "./styles";

export type ConcursoTypes = {
	concurso: string;
	loteria: string;
	loteriaId: number;
	numeros: string[];
	data: string;
};

export const ConcursoTemplate = ({
	concurso,
	data,
	loteria,
	loteriaId,
	numeros,
}: ConcursoTypes) => {
	return (
		<S.Wrapper>
			<Sidebar concurso={concurso} data={data} loteria={loteria} loteriaId={loteriaId} />

			<NumbersList numbers={numeros} />
		</S.Wrapper>
	);
};
