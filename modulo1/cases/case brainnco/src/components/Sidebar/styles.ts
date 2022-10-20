import styled, { css } from "styled-components";

type WrapperProps = {
	bgColor: string;
};

export const Wrapper = styled.section<WrapperProps>`
	${({ theme, bgColor }) => css`
		display: grid;
		grid-template-columns: 1fr;
		align-items: center;
		justify-content: center;
		padding: ${theme.spacings.xxlarge};
		background-color: ${bgColor};
	`}
`;

export const SelectWrapper = styled.div`
	display: flex;
	justify-content: center;
`;

export const LogoContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const ImageWrapper = styled.div`
	width: 5rem;
	height: 5rem;

	> img {
		width: 100%;
	}
`;
export const Info = styled.p`
	${({ theme }) => css`
		align-self: end;
		color: ${theme.colors.white};
		font-size: ${theme.font.size.xsmall};
		text-align: center;
	`}
`;
