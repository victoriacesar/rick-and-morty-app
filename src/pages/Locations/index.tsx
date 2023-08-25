import { Flex } from "@chakra-ui/react";
import { Header, Loader, CardLocation } from "../../components";
import useIntersectionObserver from "@hooks/useIntersectionObserver";
import useRickAndMortyAPI from "@hooks/useRickAndMortyAPI";
import { type Location } from "@utils/interfaces";

function Locations() {
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useRickAndMortyAPI("location");

  const { observerElem } = useIntersectionObserver(hasNextPage, fetchNextPage);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Header />
      <Flex maxW="100vw" padding="2rem 1.5rem">
        <Flex wrap="wrap" gap={15} alignItems="center" justifyContent="center">
          {data?.map((elem: Location) => {
            return (
              <CardLocation
                key={elem.id}
                dimension={elem.dimension}
                name={elem.name}
                residents={elem.residents}
                type={elem.type}
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
