import styled from "styled-components"

const GenerateButton = ({ colors, setColor, getRandomColor }) => {
	return (
		<StyledButton
			backgroundColor={colors.inverted}
			color={colors.hex}
			onClick={() => {
				setColor(getRandomColor())
			}}
		>
			Generate
		</StyledButton>
	)
}

const StyledButton = styled.button`
	background-color: ${(props) => props.backgroundColor};
	border: 2px solid ${(props) => props.backgroundColor};
	border-radius: 2em;
	color: ${(props) => props.color};
	cursor: pointer;
	font-weight: bold;
	font-size: clamp(15px, 3vw, 30px);
	padding: 0.5em 0.75em;
	letter-spacing: 2px;
	transition: all 0.3s;

	:hover {
		background-color: ${(props) => props.color};
		color: ${(props) => props.backgroundColor};
	}
`

export { GenerateButton }
