import { useColors } from "./useColors"
import styled from "styled-components"
import { Title } from "./Title"
import { GenerateButton } from "./GenerateButton"

const Background = () => {
	const { colors, setColor, getRandomColor } = useColors()

	return (
		<Container backgroundColor={colors.hex}>
			<Title colors={colors} textToCopy={colors.hex}>
				{colors.hex}
			</Title>
			<Title colors={colors} textToCopy={`rgb(${colors.rgb})`}>
				rgb({colors.rgb})
			</Title>
			<Title colors={colors} textToCopy={colors.inverted}>
				Text color: {colors.inverted}
			</Title>

			<GenerateButton colors={colors} setColor={setColor} getRandomColor={getRandomColor} />
		</Container>
	)
}

const Container = styled.div`
	align-items: center;
	background-color: ${(props) => props.backgroundColor};
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	justify-content: center;
	min-width: 100vw;
	transition: all 0.3s;
	padding-top: clamp(50px, 15vw, 100px);
	padding-bottom: clamp(50px, 15vw, 100px);
`

export { Background }
