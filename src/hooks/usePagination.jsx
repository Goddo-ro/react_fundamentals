import { useMemo } from "react";

export const usePagination = (totalCount) => {
  return useMemo(() => {
    let result = [];
    for (let i = 0; i < totalCount; i++) {
      result.push(i + 1);
    }

    return result;
  }, [totalCount]);
}