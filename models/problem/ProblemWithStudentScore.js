import Problem from "@/models/problem/Problem";

export default class ProblemWithStudentScore extends Problem {
  constructor(id, title, score, maxScore) {
    super(id, title, maxScore);
    this.score = score;
  }
}
