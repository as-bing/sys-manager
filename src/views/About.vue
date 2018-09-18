<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
import { getQQMusic, getTianQi } from "@/http/api";
export default {
  name: "about",
  methods: {
    getQQMusic() {
      getQQMusic().then(function(res) {
        console.log(res);
      });
    },
    getTianQi() {
      getTianQi().then(function(res) {
        console.log(res);
      });
    }
  },
  mounted() { 
  }
};
</script>