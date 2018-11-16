<template>
  <section>
    <Button @click="start">start</Button>
  </section>
</template>

<script>
  import iView from 'iview'
  export default {
    methods: {
      start () {
        iView.LoadingBar.start()
      }
    }
  }
</script>
