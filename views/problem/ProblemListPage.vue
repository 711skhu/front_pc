<template>
  <div class="container">
    <div class="header">
      <h1>
        연습문제
      </h1>
    </div>
    <div class="problem-list">
      <problem-item
        v-for="problem in problems"
        :key="problem.id"
        :problem="problem"
      />
    </div>
  </div>
</template>

<script>
  import ProblemWithStudentScore from "@/pc/models/problem/ProblemWithStudentScore";
  import ProblemItem from "@/pc/components/problem/ProblemItem";

  let problems = [
    new ProblemWithStudentScore(1, "1번 문제", 30, 30),
    new ProblemWithStudentScore(2, "2번 문제", 8, 12),
    new ProblemWithStudentScore(3, "3번 문제", 5, 15),
    new ProblemWithStudentScore(4, "4번 문제", 1, 20)
  ];

  export default {
    components: {
      ProblemItem
    },
    data() {
      return {
        problems: []
      }
    },
    mounted() {
      this.problems = problems;
    }
  }
</script>

<style scoped>
  .header {
    margin-bottom: 6rem;
  }
</style>
