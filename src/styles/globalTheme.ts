import { extendTheme } from "@chakra-ui/react";

export const globalTheme = extendTheme({
  styles: {
    global: {
      'html, body': {
        fontFamily: 'Roboto',
      }
    }
  },
  colors: {
    bgColor: "#DE3163",
  }
});
