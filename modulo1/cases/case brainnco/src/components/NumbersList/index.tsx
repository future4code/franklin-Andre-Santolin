import { Circle } from "components/Circle";

import * as S from "./styles";

type NumbersListProps = {
	numbers: string[];
};

export const NumbersList = ({ numbers }: NumbersListProps) => {
	return (
		<S.Wrapper>
			<S.NumbersWrapper>
				{numbers?.map(number => (
					<Circle key={number}>{number}</Circle>
				))}
			</S.NumbersWrapper>
			<S.Text>
				Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.
			</S.Text>
		</S.Wrapper>
	);
};
