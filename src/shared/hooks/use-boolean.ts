import type { Dispatch, SetStateAction } from 'react';
import { useCallback, useState } from 'react';

type UseBooleanReturn = {
  value: boolean;
  setValue: Dispatch<SetStateAction<boolean>>;
  setTrue: () => void;
  setFalse: () => void;
  toggle: () => void;
};

export const useBoolean = (defaultValue = false): UseBooleanReturn => {
  if (typeof defaultValue !== 'boolean') {
    throw new TypeError('defaultValue must be `true` or `false`');
  }

  const [value, setValue] = useState(defaultValue);

  const setTrue = useCallback(() => {
    setValue(true);
  }, []);

  const setFalse = useCallback(() => {
    setValue(false);
  }, []);

  const toggle = useCallback(() => {
    setValue(x => !x);
  }, []);

  return { value, setValue, setTrue, setFalse, toggle };
};
