<template>
  <div>
    <header-menu></header-menu>
    <lecture-list></lecture-list>
  </div>
</template>

<script>
  import HeaderMenu from '@/components/header/HeaderManu'
  import LectureList from '@/components/lecture/LectureList'

  export default {
    components: {
      HeaderMenu,
      LectureList
    }
  }
</script>

<style scoped>
</style>
