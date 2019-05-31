<template>
  <div class="container">
    <div class="container__left">
      <h1 class="header">
        {{ lectureTitle }}
      </h1>
      <div class="content">
        <markdown-view
          class="content__markdown-view"
          :value="description"
        />
      </div>
    </div>
    <div class="container__right">
      <v-icon
        v-text="selectedIcon"
        size="10rem">

      </v-icon>

    </div>
  </div>
</template>

<script>
  import MarkdownView from '@/components/MarkdownView.vue'

  let icons = ['gavel', 'chrome_reader_mode', 'local_florist', 'local_offer', 'account_balance'];

  export default {
    components: {
      MarkdownView,
    },
    data() {
      return {
        lectureTitle: 'Java Programming',
        description: '#### 자바 언어의 기본 문법과 객체 지향 프로그래밍 개념을 단계별로 정립합니다. \n # 12312 \n',
        selectedIcon: '',
      }
    },

    created() {
      const idx = Math.floor(Math.random() * icons.length)
      this.selectedIcon = icons[idx]
    }
  };
</script>

<style scoped>
  .container {
    height: 100%;
    background-color: #F3E5F5;
    display: flex;
    flex-direction: row;
  }

  .container__left {
    flex: 3 3 auto;

  }

  .container__right {
    display: flex;
    items-align: center;
  }


  .header {
    color: #7B1FA2;
  }


  .content {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .content__markdown-view {
    height: 100%;
    overflow: auto;
    color: black;
  }
</style>
