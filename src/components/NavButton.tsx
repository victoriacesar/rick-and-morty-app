import { LightMode, Link, useColorModeValue } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

interface NavButtonProps {
  path: string;
  text: string;
}

function NavButton({ path, text }: NavButtonProps) {
  return (
    <LightMode>
      <Link
        as={NavLink}
        to={path}
        borderWidth={1}
        borderStyle="solid"
        borderColor="yellow.500"
        borderRadius={10}
        padding=".5rem"
        textTransform="uppercase"
        color={useColorModeValue("gray.900", "white")}
        _activeLink={{
          bgColor: "yellow.500",
          color: "white",
        }}
        _hover={{
          filter: "brightness(0.9)",
          textDecoration: "none",
        }}
      >
        {text}
      </Link>
    </LightMode>
  );
}

export default NavButton;
