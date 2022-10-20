import { createGlobalStyle, css } from "styled-components";

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html {
		font-size: 62.5%;
	}

	body {
		${({ theme }) => css`
			background-color: ${theme.colors.background};
			font-family: ${theme.font.family};
			font-size: ${theme.font.size.medium};
		`}

	}
`;
