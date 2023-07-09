<template>
  <ul>
    <learning-resource
        v-for="res in storedResources"
        :key="res.id"
        :title="res.title"
        :description="res.description"
        :link="res.link"
    > :resource="resource">
    </learning-resource>
  </ul>
</template>

<script>
import LearningResource from "./LearningResource.vue";

export default {
  components: {LearningResource},
  props: ['storedResources']
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}

</style>