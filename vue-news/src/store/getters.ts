import { RootState } from "./state";

// computed 속성과 1:1 매핑
// components의 computed 속성으로 사용할 store 데이터를 getters로 받아 사용
export const getters = {
  fetchedNews(state: RootState) {
    return state.news;
  },
};

export type Getters = typeof getters;

// export default {
//   fetchedItem(state) {
//     return state.item;
//   },
//   fetchedUser(state) {
//     return state.user;
//   },
//   fetchedList(state) {
//     return state.list;
//   },
//   // ItemView
//   userName(state) {
//     return state.item.user;
//   },
//   userContent(state) {
//     return state.item.content;
//   },
//   userQuestion(state) {
//     return state.item.title;
//   },
//   userTimeAgo(state) {
//     return state.item.time_ago;
//   },
//   contentPoints(state) {
//     return state.item.points;
//   },
// };
