import { Box, Button, Flex, Image, Link, Text, useColorMode, useColorModeValue } from "@chakra-ui/react"
import { NavLink } from "react-router-dom"
import NavButton from "./NavButton"

function Header(){
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      margin="0px auto"
      minHeight="60px"
      padding="0px 1.5rem"
      width="100%"
    >
      <Link 
        as={NavLink} 
        to="/"
        fontSize={20}
        _activeLink={{
          fontWeight: 700,
        }}
      >
        R&M/S
      </Link>
      <Flex
        alignItems="center"
        gap="10px"
      >
        <NavButton path="/characters" text="Characters" />
        <NavButton path="/locations" text="Location" />
        <NavButton path="/episodes" text="Episodes" />
        <Button
          width="15px"
          onClick={toggleColorMode}
          bgColor={useColorModeValue('gray.300', 'gray.800')}
        >
          {colorMode === 'light' ? '🌞' : '🌚'}
        </Button>
      </Flex>
    </Flex>
  )
}

export default Header