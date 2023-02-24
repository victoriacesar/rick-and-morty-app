import { Flex, Text } from "@chakra-ui/react"
import { ElementRef, RefObject, useCallback, useEffect, useRef } from "react";
import CardCharacters from "../../components/Cards/CardCharacters"
import Header from "../../components/Header"
import useRickAndMortyAPI from "../../hooks/useRickAndMortyAPI"
import { Character } from "../../utils/interfaces";

function Characters() {
  const {
    data,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage
  } = useRickAndMortyAPI("character");

  const observerElem = useRef<HTMLDivElement>(null);

  const handleObserver = useCallback((entries: any) => {
    const [target] = entries;
    if(target.isIntersecting && hasNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage]);
  
  useEffect(() => {
    if(!observerElem.current) return;

    const element = observerElem?.current;
    const option = { threshold: 0 };
  
    const observer = new IntersectionObserver(handleObserver, option);
    observer.observe(element);
    return () =>  observer.unobserve(element);
  }, [fetchNextPage, hasNextPage, handleObserver])

  if (isLoading) {
    return (
      <Flex
        alignItems="center"
        justifyContent="center"
        margin="0px auto"
      >
        <Text>Carregando...</Text>
      </Flex>
    )
  }

  return (
    <>
      <Header />
      <Flex
        maxW="100vw"
        padding="2rem 1.5rem"
      >
        <Flex 
          wrap="wrap" 
          gap={15}
          alignItems="center"
          justifyContent="center"
        >
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
            )
          })}
        </Flex>
      </Flex>
      <Flex 
        ref={observerElem}
        alignItems="center"
        justifyContent="center"
        paddingBottom="1rem"
      >
        {isFetchingNextPage && hasNextPage ? 'Loading...' : 'No search left'}
      </Flex>
    </>
  )
}

export default Characters
