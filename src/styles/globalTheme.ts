import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { GlobalStyleProps } from "@chakra-ui/theme-tools"

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: true,
}

export const globalTheme = extendTheme({
  config,
  styles: {
    global: ({ colorMode }: GlobalStyleProps) => ({
      'html, body': {
        fontFamily: 'Roboto',
        backgroundColor: colorMode === 'dark' ? 'gray.900' : 'gray.50',
      }
    })
  },
});
