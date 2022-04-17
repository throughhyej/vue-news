import { fetchNews } from "@/api";
import { ActionContext } from "vuex";
import { Mutations, MutationsType } from "./mutations";
import { RootState } from "./state";

export enum ActionTypes {
  FETCH_NEWS = "FETCH_NEWS",
  FETCH_ASK = "FETCH_ASK",
  FETCH_JOBS = "FETCH_JOBS",
  FETCH_USER = "FETCH_USER",
  FETCH_ITEM = "FETCH_ITEM",
  FETCH_LIST = "FETCH_LIST",
}

type MyActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload?: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<RootState, RootState>, "commit">;

export const actions = {
  async [ActionTypes.FETCH_NEWS](context: MyActionContext, payload?: number) {
    const { data } = await fetchNews();
    context.commit(MutationsType.SET_NEWS, data);
  },
};

type Actions = typeof actions;

export { MyActionContext, Actions };

// export default {
//   FETCH_NEWS({ commit }) {
//     return fetchNews().then((response) => commit("SET_NEWS", response.data));
//   },
//   FETCH_ASK({ commit }) {
//     return fetchAsk().then((response) => commit("SET_ASK", response.data));
//   },
//   FETCH_JOBS({ commit }) {
//     return fetchJobs().then((response) => commit("SET_JOBS", response.data));
//   },
//   FETCH_USER({ commit }, userId) {
//     return fetchUser(userId).then((res) => commit("SET_USER", res.data));
//   },
//   FETCH_ITEM({ commit }, itemId) {
//     return fetchItem(itemId).then((res) => commit("SET_ITEM", res.data));
//   },
//   // hoc
//   FETCH_LIST({ commit }, listType) {
//     return fetchList(listType).then((res) => commit("SET_LIST", res.data));
//   },
// };
