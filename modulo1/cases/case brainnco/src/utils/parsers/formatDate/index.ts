export const formatDate = (date: string) =>
	new Intl.DateTimeFormat("pt-BR", {
		month: "numeric",
		day: "numeric",
		year: "numeric",
	}).format(new Date(date));
