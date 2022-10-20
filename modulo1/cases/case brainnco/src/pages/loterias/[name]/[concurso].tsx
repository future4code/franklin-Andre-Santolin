import { GetStaticProps } from "next";

import { QUERY } from "services/queries";

import { ConcursoTemplate, ConcursoTypes } from "templates/Loterias/Concurso";

const Concurso = (props: ConcursoTypes) => {
	return <ConcursoTemplate {...props} />;
};

export const getStaticPaths = async () => {
	return {
		paths: [
			{ params: { name: "mega-sena", concurso: "2359" } },
			{ params: { name: "quina", concurso: "5534" } },
			{ params: { name: "lotofacil", concurso: "2200" } },
			{ params: { name: "lotomania", concurso: "2167" } },
			{ params: { name: "timemania", concurso: "1622" } },
			{ params: { name: "dia-de-sorte", concurso: "440" } },
		],
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { data } = await QUERY.getContest(params?.concurso!);

	const loterias = ["mega-sena", "quina", "lotofácil", "lotomania", "timemania", "dia de sorte"];

	return {
		props: {
			concurso: data.id,
			loteria: loterias[data.loteria],
			loteriaId: data.loteria,
			numeros: data.numeros,
			data: data.data,
		},
	};
};

export default Concurso;
