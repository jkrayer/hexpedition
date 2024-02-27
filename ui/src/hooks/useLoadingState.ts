import { useCallback, useState } from "react";

export type State<T> = {
  loading: boolean;
  error: null | Error;
  data: null | T;
};

type Return<T> = State<T> & {
  failure: (arg0: Error) => void;
  setLoading: () => void;
  success: (arg0: T) => void;
};

export function useLoadingState<T>(): Return<T> {
  const [state, setState] = useState<State<T>>({
    loading: false,
    error: null,
    data: null,
  });

  const failure = useCallback<(error: Error) => void>(
    (error) => setState(() => ({ data: null, error, loading: false })),
    [setState]
  );

  const setLoading = useCallback<() => void>(
    () => setState((old) => ({ ...old, loading: true, error: null })),
    [setState]
  );

  const success = useCallback<(data: T) => void>(
    (data) => setState((old) => ({ ...old, loading: false, data })),
    [setState]
  );

  return { ...state, failure, setLoading, success };
}
