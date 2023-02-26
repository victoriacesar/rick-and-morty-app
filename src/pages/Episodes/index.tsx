import { Flex } from "@chakra-ui/react";
import {
  Header,
  Loader,
  CardEpisode
} from '../../components';
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import useRickAndMortyAPI from "../../hooks/useRickAndMortyAPI";
import { Episode } from "../../utils/interfaces";

function Locations() {
  const {
    data,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useRickAndMortyAPI("episode");
  const { observerElem } = useIntersectionObserver(hasNextPage, fetchNextPage);

  if (isLoading) {
    return <Loader />
  }

  return (
    <>
      <Header />
      <Flex maxW="100vw" padding="2rem 1.5rem">
        <Flex wrap="wrap" gap={15} alignItems="center" justifyContent="center">
          {data.map((elem: Episode) => {
            return (
              <CardEpisode
                key={elem.id}
                airDate={elem.air_date}
                characters={elem.characters}
                episode={elem.episode}
                name={elem.name}
              />
            );
          })}
        </Flex>
      </Flex>
      <Flex
        ref={observerElem}
        alignItems="center"
        justifyContent="center"
        paddingBottom="1rem"
      >
        {isFetchingNextPage && hasNextPage ? "Loading..." : "No search left"}
      </Flex>
    </>
  );
}

export default Locations;
