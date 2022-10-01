/* eslint-disable @typescript-eslint/no-non-null-assertion */
import styled, { css } from "styled-components";
import media from "styled-media-query";

import { CircleProps } from ".";

type WrapperProps = Pick<CircleProps, "bgColor">;

export const Wrapper = styled.div<WrapperProps>`
	${({ theme, bgColor }) => css`
		width: 7.5rem;
		height: 7.5rem;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 50%;
		font-size: ${theme.font.size.medium};
		font-weight: ${theme.font.weight.bold};

		${media.greaterThan("medium")`
			width: 11rem;
			height: 11rem;
			font-size: ${theme.font.size.xlarge};
		`}

		background-color: ${theme.colors[bgColor!]};
	`}
`;
