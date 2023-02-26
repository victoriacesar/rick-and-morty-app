import { Flex, Spinner } from "@chakra-ui/react";

function Loader() {
  return (
    <Flex 
      alignItems="center" 
      justifyContent="center" 
      margin="0px auto"
      width="100vw"
      height="100vh"
    >
      <Spinner 
        size="xl"
        color="yellow.500"
      />
    </Flex>
  )
}

export default Loader;