import { useEffect, useState } from "react";

export const useSplitArrayToTwoParts = <T>(arr: T[]) => {
  const [firstPart, setFirstPart] = useState<T[]>([]);
  const [secondPart, setSecondPart] = useState<T[]>([]);

  useEffect(() => {
    const length = arr.length;
    const middle = Math.ceil(length / 2);
    setFirstPart(arr.slice(0, middle));
    setSecondPart(arr.slice(middle));
  }, [arr]);
  
  return [firstPart, secondPart];
};
