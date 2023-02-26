import { Flex, Spinner, Text } from "@chakra-ui/react";
import { useCallback, useEffect, useRef } from "react";
import CardCharacters from "../../components/Cards/CardCharacters";
import Header from "../../components/Header";
import Loader from "../../components/Loader";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import useRickAndMortyAPI from "../../hooks/useRickAndMortyAPI";
import { type Character } from "../../utils/interfaces";

function Characters() {
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useRickAndMortyAPI("character");

  const { observerElem } = useIntersectionObserver(hasNextPage, fetchNextPage);

  if (isLoading) {
    return <Loader />
  }

  return (
    <>
      <Header />
      <Flex maxW="100vw" padding="2rem 1.5rem">
        <Flex wrap="wrap" gap={15} alignItems="center" justifyContent="center">
          {data.map((elem: Character) => {
            return (
              <CardCharacters
                imageSrc={elem.image}
                location={elem.location.name}
                name={elem.name}
                origin={elem.origin.name}
                species={elem.species}
                status={elem.status}
                key={elem.id}
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

export default Characters;
