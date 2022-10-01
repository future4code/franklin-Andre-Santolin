import styled, { css } from "styled-components";

export const Select = styled.select`
	${({ theme }) => css`
		width: 23rem;
		padding: ${theme.spacings.medium} ${theme.spacings.large};
		font-size: ${theme.font.size.small};
		color: ${theme.colors.black};
		border: none;
		border-radius: 1rem;
		outline: none;
		cursor: pointer;
	`}
`;
