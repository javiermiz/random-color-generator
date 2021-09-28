import { useEffect } from "react"
import { useState } from "react"
import styled from "styled-components"
import { ReactComponent as Icon } from "../images/copy-icon.svg"

const CopyToClipboardButton = ({ colors, text }) => {
	const [showNotification, setShowNotification] = useState(false)

	const copyToClipBoard = (text) => {
		navigator.clipboard.writeText(text)
		setShowNotification(true)
	}

	useEffect(() => {
		showNotification &&
			setTimeout(function () {
				setShowNotification(false)
			}, 2000)
	}, [showNotification])

	return (
		<>
			<StyledIcon fill={colors.inverted} onClick={() => copyToClipBoard(text)} />
			<Notification show={showNotification} backgroundColor={colors.inverted} color={colors.hex}>
				{text} Copied to Clipboard
			</Notification>
		</>
	)
}

const StyledIcon = styled(Icon)`
	height: 1em;
	margin-left: 15px;
	margin-bottom: 3px;
	vertical-align: middle;
	width: 1em;
`

const Notification = styled.div`
	padding: 1rem 0;
	color: ${(props) => props.color};
	background-color: ${(props) => props.backgroundColor};
	position: fixed;
	bottom: ${(props) => (props.show ? "0" : "-50%")};
	left: 0;
	right: 0;
	transition: all 0.3s;
`

export { CopyToClipboardButton }
