import { useCallback, useEffect, useRef } from "react";

const useIntersectionObserver = (
  hasNextPage: boolean | undefined,
  fetchNextPage: any
  ) => {
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

  return {
    observerElem,
  }
};

export default useIntersectionObserver;
