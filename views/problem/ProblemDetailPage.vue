<template>
  <div class="page">
    <div class="header">
      <v-tabs
        v-model="activeProblemIndex"
        show-arrows
      >
        <v-tab
          v-for="problemDetail in problemDetails"
          :key="problemDetail.id"
        >
          {{problemDetail.title}}
        </v-tab>
      </v-tabs>
      <sui-dropdown
        class="header__lang-button"
        :options="dropdownOptionsFromLang"
        v-model="currentLangName"
        button
        pointing
      ></sui-dropdown>
    </div>
    <div class="content">
      <split>
        <split-area>
          <markdown-view
            class="container"
            :value="currentProblem.content"
          />

        </split-area>
        <split-area>
          <split direction="vertical">
            <split-area :size="65">
              <code-editor
                v-show="pendingToGetCodeList.length === 0"
                :lang="currentLang"
                v-model="code"
              />
              <div
                v-show="pendingToGetCodeList.length !== 0"
                class="progress-bar">
                <v-progress-circular
                  :size="70"
                  :width="7"
                  indeterminate
                ></v-progress-circular>
              </div>
            </split-area>
            <split-area :size="35">
              <div class="result">
                <div class="result__header">
                  <h3>실행결과</h3>
                </div>
                <v-divider></v-divider>
                <div class="result__content">
                  <div class="progress-bar">
                    <v-progress-circular
                      v-show="pendingToGetCodeResultList.length !== 0"
                      :size="35"
                      :width="4"
                      indeterminate
                    ></v-progress-circular>
                  </div>
                  <execute-result
                    v-show="pendingToGetCodeResultList.length === 0"
                    :test-case-results="testCaseResults"
                  />
                </div>
              </div>
            </split-area>
          </split>
        </split-area>
      </split>
    </div>
    <div class="footer">
      <div>
        <v-btn color="blue-grey lighten-5">질문하기</v-btn>
      </div>
      <div>
        <v-btn @click="runCode" color="blue-grey lighten-5">실행하기</v-btn>
        <v-btn color="info">제출하기</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
  import MarkdownView from "@/components/MarkdownView";
  import CodeEditor from "@/components/problem/CodeEditor";
  import ExecuteResult from "@/components/problem/ExecuteResult";
  import Language from "@/models/enums/problem/Language";
  import ProblemDetail from "@/models/problem/ProblemDetail";
  import SuiDropdown from "semantic-ui-vue/dist/commonjs/modules/Dropdown/Dropdown";

  let problemDetails = [
    new ProblemDetail(1, "1번 문제", "# 이 문제를 풀어보시오.", 0),
    new ProblemDetail(2, "2번 문제", "## 이 문제를 풀어보시오.", 1),
    new ProblemDetail(3, "3번 문제", "### 이 문제를 풀어보시오.", 2)
  ];

  export default {
    components: {
      SuiDropdown,
      ExecuteResult,
      CodeEditor,
      MarkdownView
    },
    data() {
      return {
        languages: [Language.JAVA, Language.CPP, Language.JAVASCRIPT],
        currentLangName: Language.JAVA.name,
        activeProblemIndex: 0,
        problemDetails: problemDetails,
        testCaseResults: [],
        codes: {},
        pendingToGetCodeList: [],
        pendingToGetCodeResultList: []
      }
    },
    computed: {
      currentProblem() {
        return this.problemDetails[this.activeProblemIndex];
      },
      currentLang() {
        return Language.valueOf(this.currentLangName);
      },
      dropdownOptionsFromLang() {
        return this.languages.map(lang => {
          return {
            text: lang.value,
            value: lang.name
          }
        })
      },
      code: {
        get: function () {
          let problem = this.currentProblem;
          let lang = this.currentLang;

          return this.codes[problem.id + lang.name]
            || this.$set(this.codes, problem.id + lang.name, this.getCodeFromServer(problem, lang));
        },
        set: function (newValue) {
          let problemId = this.currentProblem.id;
          let langName = this.currentLang.name;

          this.codes[problemId + langName] = newValue;
        }
      }
    },
    methods: {
      getCodeFromServer(problemDetail, lang) {
        this.pendingToGetCodeList.push(true);

        setTimeout(() => this.pendingToGetCodeList.pop(), 1000);

        return null || lang.initCode;
      },
      runCode() {
        this.testCaseResults = this.getCodeResultFromServer(this.currentProblem, this.currentLang);
      },
      getCodeResultFromServer(problemDetail, lang) {
        this.pendingToGetCodeResultList.push(true);

        setTimeout(() => this.pendingToGetCodeResultList.pop(), 3000);

        return Array.apply(null, {length: Math.floor(Math.random() * 10) + 2})
          .map(() => Math.random() < 0.5);
      },
    },
    mounted() {
      // init for codes data
      for (let problem in this.problemDetails) {
        for (let lang in Language.values) {
          this.$set(this.codes, problem.id + lang.name, '');
        }
      }
    }
  }
</script>

<style scoped>
  .page {
    height: 100%;
    display: flex;
    flex-direction: column;

    background-color: white;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  .header__lang-button {
    font-size: 1.1rem;
    margin: auto 0.2rem;
  }

  .content {
    height: inherit;
    border-top: lightgray solid 0.1rem;
    border-bottom: lightgray solid 0.1rem;
  }

  .progress-bar {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .result__header {
    margin: 0.8rem 1rem;
  }

  .result__content {
    font-size: 1.15rem;
    padding: 1rem;
  }

  .footer {
    display: flex;
    justify-content: space-between;

    padding-bottom: 0.3rem;
  }
</style>
