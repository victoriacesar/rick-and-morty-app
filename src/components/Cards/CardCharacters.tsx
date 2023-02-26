import {
  Box,
  Card,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Status } from "../../utils/interfaces";

interface ICardCharacters {
  name: string;
  imageSrc: string;
  status: Status;
  species: string;
  location: string;
  origin: string;
}

function getTypeColor(type: string){
  switch(type){
    case 'Alive': return '#55CC44';
    case 'Dead': return '#D63D2E';
    default: return '#DDDDDD';
  }
}

function CardCharacters({
  name,
  imageSrc,
  status,
  species,
  location,
  origin,
}: ICardCharacters) {
  const textColor = useColorModeValue("blackAlpha.800", "whiteAlpha.800");

  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      width="500px"
      minWidth="450px"
      bgColor={useColorModeValue("white", "gray.800")}
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src={imageSrc}
        alt={name}
      />
      <Stack padding=".75rem">
        <Flex flexDirection="column" gap="15px">
          <Flex flexDirection="column">
            <Heading fontSize="2xl" color={textColor}>
              {name}
            </Heading>
            <Flex alignItems="center" gap="5px">
              <Box
                style={{
                  width: '8px',
                  height: '8px',
                  background: getTypeColor(status),
                  borderRadius: '50%',
                }}
              />
              <Text fontSize="14px" color={textColor}>{status} - {species}</Text>
            </Flex>
          </Flex>
          <Flex flexDirection="column">
            <Text fontSize="14px" color="gray.500">
              Last known location:
            </Text>
            <Text color={textColor}>{location}</Text>
          </Flex>
          <Flex flexDirection="column">
            <Text fontSize="14px" color="gray.500">
              First seen in:
            </Text>
            <Text color={textColor}>{origin}</Text>
          </Flex>
        </Flex>
      </Stack>
    </Card>
  );
}

export default CardCharacters;
