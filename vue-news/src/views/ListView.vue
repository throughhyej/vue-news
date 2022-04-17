<template>
  <div>
    <ListItem :items="newsItems" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import { fetchNews, INewsItem } from "@/api";
import ListItem from "../components/ListItem.vue";

export default Vue.extend({
  components: {
    ListItem,
  },
  data() {
    return {
      newsItems: [] as INewsItem[],
    };
  },
  methods: {
    async fetchNewsItem() {
      let response = await fetchNews();
      this.newsItems = response.data;
    },
  },
  created() {
    this.fetchNewsItem();
  },
});
</script>

<style></style>
