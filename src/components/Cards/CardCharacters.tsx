import { Card, Flex, Heading, Image, Stack, Text, useColorModeValue } from "@chakra-ui/react"

type CardCharacters = {
  name: string;
  imageSrc: string;
  status: string;
  species: string;
  location: string;
  origin: string;
}

function CardCharacters({
  name,
  imageSrc,
  status,
  species,
  location,
  origin,
}: CardCharacters){
  const textColor = useColorModeValue('blackAlpha.800', 'whiteAlpha.800');

  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      width="500px"
      minWidth="450px"
      bgColor={useColorModeValue('white', 'gray.800')}
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px"}}
        src={imageSrc}
        alt={name}
      />
      <Stack padding=".75rem">
        <Flex flexDirection="column" gap="15px">
          <Flex flexDirection="column">
            <Heading 
              fontSize="2xl"
              color={textColor}
            >
              {name}
            </Heading>
            <Text
              fontSize="14px"
              color={textColor}
            >
              {status} - {species}
            </Text>
          </Flex>
          <Flex flexDirection="column">
            <Text fontSize="14px" color="gray.500">
              Last known location:
            </Text>
            <Text
              color={textColor}
            >
              {location}
            </Text>
          </Flex>
          <Flex flexDirection="column">
            <Text fontSize="14px" color="gray.500">
              First seen in:
            </Text>
            <Text
              color={textColor}
            >
              {origin}
            </Text>
          </Flex>
        </Flex>
      </Stack>
    </Card>
  )
}

export default CardCharacters