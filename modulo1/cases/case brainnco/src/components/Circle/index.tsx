import * as S from "./styles";

export type CircleProps = {
	children?: React.ReactNode;
	bgColor?: "white" | "lightGreen" | "purple" | "pink" | "orange" | "darkGreen" | "lightBrown";
};

export const Circle = ({ children, bgColor = "white" }: CircleProps) => {
	return (
		<S.Wrapper aria-label="Ball" bgColor={bgColor}>
			{!!children && <div>{children}</div>}
		</S.Wrapper>
	);
};
