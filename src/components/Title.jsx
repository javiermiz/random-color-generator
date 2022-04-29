import styled from "styled-components"
import { CopyToClipboardButton } from "./CopyToClipboardButton"

const Title = ({ children, colors, textToCopy }) => {
	return (
		<StyledTitle color={colors.inverted}>
			{children} <CopyToClipboardButton colors={colors} text={textToCopy} />
		</StyledTitle>
	)
}

const StyledTitle = styled.h2`
	color: ${(props) => props.color};
	letter-spacing: 2px;
	margin-bottom: 1em;
	font-size: clamp(15px, 3vw, 30px);
`

export { Title }
