import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
	${() => css`
		min-height: 100vh;
		display: grid;
		grid-template-rows: 35rem 1fr;

		${media.greaterThan("medium")`
			grid-template-rows: auto;
			grid-template-columns: 1.5fr 2fr;
		`}

		${media.greaterThan("large")`
			grid-template-rows: auto;
			grid-template-columns: 1fr 2fr;
		`}
	`}
`;
