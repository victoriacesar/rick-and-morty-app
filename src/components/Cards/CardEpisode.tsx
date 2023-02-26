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
import { scrollStyle } from "@styles/globalTheme";
import { fetchResident } from "@utils/functions";
import { type Character } from "@utils/interfaces";

interface ICardEpisode {
  name: string;
  airDate: string;
  episode: string;
  characters: string[];
}

function CardEpisode({ name, airDate, characters, episode }: ICardEpisode) {
  const results = useQueries({
    queries: characters.map((character) => {
      return {
        queryKey: ["character", character],
        queryFn: async () => fetchResident(character),
      };
    }),
  });

  const characterInfo = results.map((character) => character.data);

  const textColor = useColorModeValue("blackAlpha.800", "whiteAlpha.800");

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
              Air date:
            </Text>
            <Text color={textColor}>{airDate}</Text>
          </Flex>
          <Flex flexDirection="column">
            <Text fontSize="14px" color="gray.500">
              Episode:
            </Text>
            <Text color={textColor}>{episode}</Text>
          </Flex>
          <Flex flexDirection="column">
            <Text fontSize="14px" color="gray.500">
              Characters who participated in the episode:
            </Text>
            <Flex
              wrap="wrap"
              gap="8px"
              overflowY="auto"
              maxHeight="80px"
              sx={scrollStyle}
            >
              {characterInfo.length &&
                characterInfo?.map((elem: Character) => {
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

export default CardEpisode;
