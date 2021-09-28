import "./App.css"
import { Background } from "./components/Background"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
  }
`

function App() {
	return (
		<div className="App">
			<GlobalStyle />
			<Background />
		</div>
	)
}

export default App
