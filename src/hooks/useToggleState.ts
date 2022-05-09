import { useState, useCallback } from 'react';

// export type useToggleState = (initialState: boolean) => [boolean, () => void];

const useToggleState = (initialState: boolean) => {
  const [state, setState] = useState(initialState);

  const toggle = useCallback(() => setState((prevState) => !prevState), []);

  return [state, toggle];
};

export default useToggleState;
