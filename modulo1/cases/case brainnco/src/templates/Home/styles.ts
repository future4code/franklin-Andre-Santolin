import styled, { css } from "styled-components";
import media from "styled-media-query";

import * as HeadingStyles from "components/Heading/styles";

export const Wrapper = styled.section`
	${() => css`
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	`}
`;

export const Title = styled.h1`
	${({ theme }) => css`
		font-size: calc(${theme.font.size.large} * 2);
		margin-bottom: ${theme.spacings.xlarge};

		${media.greaterThan("medium")`
			margin-bottom: calc(${theme.spacings.xlarge} * 3);
		`}
	`}
`;

export const Content = styled.div`
	${({ theme }) => css`
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: ${theme.spacings.xlarge} ${theme.spacings.medium};

		${media.greaterThan("medium")`
			grid-template-columns: repeat(4, 1fr);
			gap: calc(${theme.spacings.xlarge} * 2) ${theme.spacings.medium};
		`}

		${media.greaterThan("large")`
			grid-template-columns: repeat(6, 1fr);
		`}
	`}
`;

export const CircleWrapper = styled.a`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
		top: 0;
		transition: top 0.2s ease-in-out;
		cursor: pointer;

		${HeadingStyles.Wrapper} {
			margin-top: ${theme.spacings.medium};
		}

		&:hover {
			top: -2rem;
		}
	`}
`;
