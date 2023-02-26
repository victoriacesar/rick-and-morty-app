import { Flex, Text } from "@chakra-ui/react";
import { useCallback, useEffect, useRef } from "react";
import CardEpisode from "../../components/Cards/CardEpisode";
import Header from "../../components/Header";
import Loader from "../../components/Loader";
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

  const observerElem = useRef<HTMLDivElement>(null);

  const handleObserver = useCallback(
    (entries: any) => {
      const [target] = entries;
      if (target.isIntersecting && hasNextPage) {
        fetchNextPage();
      }
    },
    [fetchNextPage, hasNextPage],
  );

  useEffect(() => {
    if (observerElem.current == null) return;

    const element = observerElem?.current;
    const option = { threshold: 0 };

    const observer = new IntersectionObserver(handleObserver, option);
    observer.observe(element);
    return () => {
      observer.unobserve(element);
    };
  }, [fetchNextPage, hasNextPage, handleObserver]);

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
