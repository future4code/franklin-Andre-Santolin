import { api } from "./config";

export const QUERY = {
	getLotteries: () => api.get("/loterias"),
	getLotteriesContests: () => api.get("/loterias-concursos"),
	getContest: (param: string | string[]) => api.get(`/concursos/${param}`),
};
