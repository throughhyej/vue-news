/**
 * Extends interfaces in Vue.js
 */

import { RootState } from "../store/state";
import { MyStore } from "../store/types";
import Vue, { ComponentOptions } from "vue";

/* NOTE: /node-modules/vuex/types/vue.d.ts 파일 삭제 필요 */

declare module "vue/types/options" {
  interface ComponentOptions<V extends Vue> {
    // store?: Store<RootState>;
    store?: MyStore;
  }
}

declare module "vue/types/vue" {
  interface Vue {
    // $store: Store<RootState>;
    $store: MyStore;
  }
}
