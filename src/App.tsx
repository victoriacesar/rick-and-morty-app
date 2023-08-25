import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import useAmplitude from "./hooks/useAmplitude";
import Routes from "./Routes";
import { globalTheme } from "./styles/globalTheme";

function App() {
  const { init } = useAmplitude();

  init();

  return (
    <ChakraProvider theme={globalTheme}>
      <ColorModeScript initialColorMode={globalTheme.config.initialColorMode} />
      <Routes />
    </ChakraProvider>
  );
}

export default App;
