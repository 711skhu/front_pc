<template>
  <div class="container">
    <div class="header">
      <h1>
        연습문제
      </h1>
    </div>
    <div class="problem-list">
      <problem-item-box
        class="problem-box"
        v-for="problem in problems"
        :key="problem.title"
      >
        <h3>{{problem.title}}</h3>
        <v-progress-circular
          :rotate="-90"
          :size="50"
          :width="3"
          :value="problem.score / problem.maxScore * 100"
        >
          {{`${problem.score}/${problem.maxScore}`}}
        </v-progress-circular>
      </problem-item-box>
    </div>
  </div>
</template>

<script>
  import ProblemItemBox from "@/components/problem/ProblemItemBox";
  import ProblemDetailWithStudentScore from "@/models/problem/ProblemDetailWithStudentScore";

  let problems = [
    new ProblemDetailWithStudentScore(1, "1번 문제", 2, 10),
    new ProblemDetailWithStudentScore(2, "2번 문제", 8, 12),
    new ProblemDetailWithStudentScore(3, "3번 문제", 5, 15),
    new ProblemDetailWithStudentScore(4, "4번 문제", 1, 20)
  ];

  export default {
    components: {
      ProblemItemBox
    },
    data() {
      return {
        problems: problems
      }
    }
  }
</script>

<style scoped>
  .header {
    margin-bottom: 6rem;
  }

  .problem-box {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
</style>
