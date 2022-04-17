import { INewsItem } from "@/api";

export const state = {
  news: [] as INewsItem[],
};

export type RootState = typeof state;
