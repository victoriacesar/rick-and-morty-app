import { ChakraProvider } from "@chakra-ui/react"
import Routes from "./Routes"
import { globalTheme } from "./styles/globalTheme"

function App() {
  return (
    <ChakraProvider theme={globalTheme}>
      <Routes />
    </ChakraProvider>
  )
}

export default App
