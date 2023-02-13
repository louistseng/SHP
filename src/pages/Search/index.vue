<template>
  <div>
    <h2>params---{{ $route.params.keyword }}</h2>
    <h2>query---{{ $route.query.k }}</h2>
  </div>
</template>

<script>
export default {
  name: "Search",
  //路由組件可傳props
  props: ["keyword", "k"],
};
</script>

<style>
</style>