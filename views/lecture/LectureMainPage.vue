<template>
  <div>
    <div class="information-panel">
      <lecture-info-view/>
    </div>
    <div class="category-panel container">
      <lecture-category
        v-for="category in categories"
        class="category-panel__item"
        :key="category.title"
        :title="category.title"
        :items="category.items"
      />
    </div>
  </div>
</template>

<script>
  import LectureInfoView from "@/pc/components/lecture/LectureInfoView";
  import LectureCategory from "@/components/lecture/LectureCategory";
  import LectureCategoryItem from "@/models/lecture/LectureCategoryItem";

  let items = [
    new LectureCategoryItem('맞은 문제', 4),
    new LectureCategoryItem('덜 푼 문제', 3),
    new LectureCategoryItem('총 문제', 7),
  ];

  export default {
    components: {
      LectureCategory,
      LectureInfoView
    },
    data() {
      return {
        categories: [
          {
            title: "연습 문제",
            items: items
          },
          {
            title: "과제",
            items: items
          },
          {
            title: "시험",
            items: items
          },
        ]
      }
    }
  }
</script>

<style scoped>
  .information-panel {
    height: 30vh;
  }

  .category-panel {
    display: flex;
    padding-right: 0;
    padding-left: 0;
  }

  .category-panel__item {
    flex: 1 1 auto;
    margin-right: 1rem;
  }

  .category-panel__item:last-child {
    margin-right: 0;
  }
</style>
