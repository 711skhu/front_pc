<template>
  <div>
    <header-menu></header-menu>
    <h1 class="title">강의 목록</h1>
    <lecture-list :lectures="lectures"></lecture-list>
  </div>
</template>

<script>
  import HeaderMenu from '@/components/header/HeaderMenu'
  import LectureList from '@/pc/components/lecture/LectureList'
  import axios from 'axios'

  export default {
    components: {
      HeaderMenu,
      LectureList
    },
    data() {
      return {
        lectures: []
      }
    },
    created() {
      axios.get('http://localhost:8080/server/lectures.json')
        .then((response) => {
          this.lectures = response.data;
          console.log(this.lectures);
        });
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

</style>
