import { useCallback } from "react";
import type { Location, Character, Episode } from "../utils/interfaces";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

interface Endpoints {
  location: Location;
  character: Character;
  episode: Episode;
}

const useRickAndMortyAPI = <T extends keyof Endpoints>(endpoint: T) => {
  const APILink = "https://rickandmortyapi.com/api/";
  const getAPI = useCallback(
    async ({ pageParam = 1 }) => {
      const { data } = await axios.get(`${APILink}/${endpoint}`, {
        params: {
          page: pageParam,
        },
      });

      return {
        data: data.results,
        nextCursor: pageParam + 1,
        pages: pageParam,
        totalPages: data.info.pages,
      };
    },
    [endpoint],
  );

  const { isLoading, data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: [`apiCall-${endpoint}`],
      queryFn: getAPI,
      keepPreviousData: true,
      getNextPageParam: (lastPage) => {
        if (lastPage.pages >= lastPage.totalPages) return undefined;
        return lastPage.nextCursor;
      },
    });

  return {
    isLoading,
    data:
      data == null
        ? []
        : data.pages.reduce<Array<Endpoints[T]>>((acc, curr) => {
            return [...acc, ...curr.data];
          }, []),
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  };
};

export default useRickAndMortyAPI;
