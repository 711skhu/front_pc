<template>
  <problem-item-box
    class="problem-box"
  >
    <h2>{{problem.title}}</h2>
    <v-progress-circular
      :rotate="-90"
      :size="80"
      :width="5"
      :value="problem.score / problem.maxScore * 100"
    >
      {{`${problem.score}/${problem.maxScore}`}}
    </v-progress-circular>
  </problem-item-box>
</template>

<script>
  import ProblemItemBox from "@/components/problem/ProblemItemBox";
  import ProblemWithStudentScore from "@/pc/models/problem/ProblemWithStudentScore";

  export default {
    components: {
      ProblemItemBox
    },
    props: {
      problem: {
        type: ProblemWithStudentScore,
        required: true,
        description: "학생 본인의 성적이 포함된 문제 정보"
      }
    }
  }
</script>

<style scoped>
  .problem-box {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
</style>
