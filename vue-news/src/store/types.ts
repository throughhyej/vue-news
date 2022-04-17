import { CommitOptions, DispatchOptions, Store } from "vuex";
import { Actions } from "./actions";
import { Getters } from "./getters";
import { Mutations } from "./mutations";
import { RootState } from "./state";

// commit: custom type
type MyMutations = {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload?: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>;
};

// dispatch: custom type
type MyActions = {
  dispatch<K extends keyof Actions>(
    key: K,
    payload?: Parameters<Actions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<Actions[K]>;
};

// getters: custom type
type MyGetters = {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>;
  };
};

// Omit: RootState의 "getters, commit, dispatch" 제외하고는 사용
// &: Omit 데이터와 MyGetters, MyMutations, MyActions (custom)의 합집합
export type MyStore = Omit<
  Store<RootState>,
  "getters" | "commit" | "dispatch"
> &
  MyMutations &
  MyActions &
  MyGetters;
