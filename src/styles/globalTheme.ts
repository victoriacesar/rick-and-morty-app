import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { type GlobalStyleProps } from "@chakra-ui/theme-tools";

export const scrollStyle = {
  "&::-webkit-scrollbar": {
    width: "5px",
    borderRadius: "8px",
    backgroundColor: `rgba(13, 8, 8, 0.05)`,
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: `rgba(0, 0, 0, 0.05)`,
  },
};

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

export const globalTheme = extendTheme({
  config,
  styles: {
    global: ({ colorMode }: GlobalStyleProps) => ({
      "html, body": {
        fontFamily: "Roboto",
        backgroundColor: colorMode === "dark" ? "gray.900" : "gray.50",
      },
    }),
  },
});
