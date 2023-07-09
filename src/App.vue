<template>
  <the-header title="Remember Me"></the-header>
  <StoredResource :storedResources="storedResources"></StoredResource>
</template>

<script>
import TheHeader from "./components/layouts/TheHeader.vue";
import StoredResource from "./components/learning-resources/StoredResource.vue";
export default {
  components: {
    TheHeader,
    StoredResource,
  },
  data() {
    return {
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue.js documentation',
          link: 'vue.js.org'
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to google...',
          link: 'google.com '
        },
      ]
    }
  }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}

</style>