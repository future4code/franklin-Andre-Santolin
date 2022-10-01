import Link from "next/link";

import { Circle } from "components/Circle";
import { Heading } from "components/Heading";

import * as S from "./styles";

export const HomeTemplate = () => {
	return (
		<S.Wrapper>
			<S.Title>Loterias</S.Title>

			<S.Content>
				<Link href="/loterias/mega-sena/2359">
					<S.CircleWrapper>
						<Circle bgColor="lightGreen" />
						<Heading size="small">Mega-sena</Heading>
					</S.CircleWrapper>
				</Link>
				<Link href="/loterias/quina/5534">
					<S.CircleWrapper>
						<Circle bgColor="purple" />
						<Heading size="small">Quina</Heading>
					</S.CircleWrapper>
				</Link>
				<Link href="/loterias/lotofacil/2200">
					<S.CircleWrapper>
						<Circle bgColor="pink" />
						<Heading size="small">Lotofacil</Heading>
					</S.CircleWrapper>
				</Link>
				<Link href="/loterias/lotomania/2167">
					<S.CircleWrapper>
						<Circle bgColor="orange" />
						<Heading size="small">Lotomania</Heading>
					</S.CircleWrapper>
				</Link>
				<Link href="/loterias/timemania/1622">
					<S.CircleWrapper>
						<Circle bgColor="darkGreen" />
						<Heading size="small">Timemania</Heading>
					</S.CircleWrapper>
				</Link>
				<Link href="/loterias/dia-de-sorte/440">
					<S.CircleWrapper>
						<Circle bgColor="lightBrown" />
						<Heading size="small">Dia de sorte</Heading>
					</S.CircleWrapper>
				</Link>
			</S.Content>
		</S.Wrapper>
	);
};
