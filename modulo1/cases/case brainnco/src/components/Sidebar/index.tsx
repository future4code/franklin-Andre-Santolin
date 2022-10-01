/* eslint-disable prettier/prettier */
import { useRouter } from "next/dist/client/router";

import { Heading } from "components/Heading";
import { Select, OptionsTypes } from "components/Select";

import { QUERY } from "services/queries";

import { formatDate } from "utils/parsers/formatDate";
import { parseStringToNumber } from "utils/parsers/parseStringToNumber";

import * as S from "./styles";
import theme from "styles/theme";

type SidebarProps = {
	loteriaId: number;
	loteria: string;
	concurso: string;
	data: string;
};

type LotteryApiTypes = {
	loteriaId: number;
	concursoId: string;
};

export const Sidebar = ({ loteriaId, loteria, concurso, data }: SidebarProps) => {
	const { push } = useRouter();

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const backgroundColors: any = {
		"mega-sena": theme.colors.lightGreen,
		"quina": theme.colors.purple,
		"lotofácil": theme.colors.pink,
		"lotomania": theme.colors.orange,
		"timemania": theme.colors.darkGreen,
		"dia de sorte": theme.colors.lightBrown,
	};

	const changeLottery = async (values: OptionsTypes) => {
		const { id, nome } = values;

		const { data } = await QUERY.getLotteriesContests();

		const lotteryInfo = data.find((lottery: LotteryApiTypes) => lottery.loteriaId === parseStringToNumber(id));

		push({ pathname: `/loterias/${nome}/${lotteryInfo?.concursoId}` });
	};

	return (
		<S.Wrapper bgColor={backgroundColors[loteria]}>
			<S.SelectWrapper>
				<Select defaultValue={loteriaId} onChange={changeLottery} />
			</S.SelectWrapper>

			<S.LogoContent>
				<S.ImageWrapper>
					<img src="/logo-sena.png" alt="Logo sena" />
				</S.ImageWrapper>
				<Heading color="white">{loteria}</Heading>
			</S.LogoContent>

			<S.Info>
				Concurso Nº <strong>{concurso}</strong> - <strong>{formatDate(data)}</strong>
			</S.Info>
		</S.Wrapper>
	);
};
