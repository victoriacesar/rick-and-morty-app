import { ChakraProvider, ColorModeScript } from "@chakra-ui/react"
import Routes from "./Routes"
import { globalTheme } from "./styles/globalTheme"

function App() {
  return (
    <ChakraProvider theme={globalTheme}>
      <ColorModeScript initialColorMode={globalTheme.config.initialColorMode} />
      <Routes />
    </ChakraProvider>
  )
}

export default App
