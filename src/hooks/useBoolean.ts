import { useCallback, useState } from 'react';

export const useBoolean = (initialValue: boolean = false) => {
  const [value, setValue] = useState(initialValue);
  const toggle = useCallback(() => setValue((prev: boolean) => !prev), []);

  return [value, setValue, toggle];
};
