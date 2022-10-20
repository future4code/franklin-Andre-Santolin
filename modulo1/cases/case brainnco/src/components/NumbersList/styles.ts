import styled, { css } from "styled-components";
import media from "styled-media-query";

import * as CircleStyles from "components/Circle/styles";

export const Wrapper = styled.section`
	${({ theme }) => css`
		display: grid;
		grid-template-columns: 1fr;
		justify-content: space-between;
		align-items: center;
		padding: ${theme.spacings.xxlarge};
		position: relative;
	`}
`;

export const NumbersWrapper = styled.div`
	${({ theme }) => css`
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: ${theme.spacings.xlarge} ${theme.spacings.medium};

		${CircleStyles.Wrapper} {
			margin: auto;
		}

		${media.greaterThan("medium")`
			align-self: end;
		`}

		${media.greaterThan("large")`
			grid-template-columns: repeat(6, 1fr);
		`}
	`}
`;

export const Text = styled.p`
	${({ theme }) => css`
		align-self: end;
		margin-top: ${theme.spacings.xxlarge};
		font-size: ${theme.font.size.xsmall};
		text-align: center;
	`}
`;
