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
import { useQueries } from "@tanstack/react-query";
import { scrollStyle } from "../../styles/globalTheme";
import { fetchResident } from "../../utils/functions";
import { Character } from "../../utils/interfaces";

interface ICardLocation {
  name: string;
  type: string;
  dimension: string;
  residents: string[];
}

function CardLocation({ name, type, dimension, residents }: ICardLocation) {
  const textColor = useColorModeValue("blackAlpha.800", "whiteAlpha.800");
  const results = useQueries({
    queries: residents.map((resident) => {
      return {
        queryKey: ["resident", resident],
        queryFn: () => fetchResident(resident),
      };
    }),
  });
  const residentsInfo = results.map((resident) => resident.data);

  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      width="500px"
      minWidth="450px"
      height="285px"
      bgColor={useColorModeValue("white", "gray.800")}
    >
      <Stack padding=".75rem">
        <Flex flexDirection="column" gap="15px">
          <Flex flexDirection="column">
            <Heading fontSize="2xl" color={textColor}>
              {name}
            </Heading>
          </Flex>
          <Flex flexDirection="column">
            <Text fontSize="14px" color="gray.500">
              Type:
            </Text>
            <Text color={textColor}>{type}</Text>
          </Flex>
          <Flex flexDirection="column">
            <Text fontSize="14px" color="gray.500">
              Dimension:
            </Text>
            <Text color={textColor}>{dimension}</Text>
          </Flex>
          <Flex flexDirection="column">
            <Text fontSize="14px" color="gray.500">
              Residents:
            </Text>
            <Flex
              wrap="wrap"
              gap="8px"
              overflowY="auto"
              maxHeight="80px"
              sx={scrollStyle}
            >
              {residentsInfo.length &&
                residentsInfo?.map((elem: Character) => {
                  return (
                    <Box key={elem?.id} width="80px" height="80px">
                      <Image
                        objectFit="cover"
                        borderRadius={10}
                        src={elem?.image}
                        alt={elem?.name}
                        title={elem?.name}
                        loading="lazy"
                      />
                    </Box>
                  );
                })}
            </Flex>
          </Flex>
        </Flex>
      </Stack>
    </Card>
  );
}

export default CardLocation;
