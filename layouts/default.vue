<template>
  <div>
    <nuxt/>
    <personal-info class="main-right"></personal-info>
  </div>
</template>

<script>
import personalInfo from '~/components/public/personalInfo.vue'
export default {
  components: {
    personalInfo
  }
}
</script>

<style>
  .main-right {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    background: #333;
    width: 300px;
  }
</style>
