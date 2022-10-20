import * as S from "./styles";

export type HeadingProps = {
	children: React.ReactNode;
	size?: "small" | "medium";
	color?: "black" | "white";
};

export const Heading = ({ children, size = "medium", color = "black" }: HeadingProps) => {
	return (
		<S.Wrapper size={size} color={color}>
			{children}
		</S.Wrapper>
	);
};
