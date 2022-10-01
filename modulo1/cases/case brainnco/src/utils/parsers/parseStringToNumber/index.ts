export const parseStringToNumber = (str: string | number) => {
	return typeof str === "string" ? parseInt(str) : str;
};
