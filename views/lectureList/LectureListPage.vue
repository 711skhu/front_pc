<template>
  <div>
    <header-menu></header-menu>
    <h1 class="title">강의 목록</h1>
    <a href="#" class="addLectureLink">강의 추가 +</a>
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
  h1 {
    margin: 0;
  }
  .title {
    padding: 2% 15% 2% 16%;
    font-size: 25px;
    font-weight: 800;
  }

  .addLectureLink {
    float: right;
    margin-right: 16%;
    margin-top: -1%;
    font-weight: 800;
  }
</style>
