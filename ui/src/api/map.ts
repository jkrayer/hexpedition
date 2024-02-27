import { get } from "./api";
import { useLoadingState, type State } from "../hooks/useLoadingState";

type Return<MAP> = State<MAP> & {
  getMap: (arg0: number) => void;
};

export const useGetMap = (): Return<MAP> => {
  const { failure, setLoading, success, ...rest } = useLoadingState<MAP>();

  const getMap = (id: number) => {
    setLoading();
    get(`maps/${id}`).then(success).catch(failure);
  };

  return { ...rest, getMap };
};
