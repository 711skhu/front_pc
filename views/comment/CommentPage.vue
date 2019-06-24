<template>
  <div class="container">
    <breadcrumb-tail></breadcrumb-tail>
    <br>
    <div class="comment-upper">
      <a href="#">
        <v-icon>keyboard_arrow_left</v-icon>
        강좌로 돌아가기
      </a>
    </div>
    <br>
    <div class="comment-medium">
      <comment-input></comment-input>
    </div>
    <div class="comment-footer">
      <comment
        v-for="item in items"
        :key="item.commentItem.userName"
        :comment="item.commentItem"
        :recomments="item.recomments"
      />
    </div>
  </div>
</template>

<script>
  import BreadcrumbTail from '@/components/breadcrumb/BreadcrumbTail'
  import Comment from '@/components/comment/Comment'
  import CommentInput from '@/components/comment/CommentInput'
  import CommentItem from '@/models/comment/CommentItem'

  let commentItems = [
    new CommentItem('wlgus123', '2019.03.02', '문제2번이 효율성이 떨어진다고 그러네요'),
    new CommentItem('ejiji031', '2019.03.03', 'java결과값을 String에 담아 리턴하면 왜 안되나요?'),
    new CommentItem('jo_123', '2019.03.04', '채점 기준이 궁금합니다'),
    new CommentItem('hehe23', '2019.04.23', 'hashmap 오류'),
    new CommentItem('djkdj3jk', '2019.04.30', 'if문이 작동을 안합니다. 왜그럴까요?'),
  ];

  let recomments = [
    new CommentItem('heyharoo123', '2019.4.30 09:28', '1,2,3,4,9,11번 케이스만 통과합니다..'),
    new CommentItem('Cal-D', '2019.4.24 15:12', '이클립스에서는 돌아가는데 프로그래머스 실행시 오류'),
    new CommentItem('hhwaaaa1', '2019.04.20 23:54', '어떤 부분이 틀렸는지 모르겠어요, 시간이 5ms 이상인 테스트 케이스는 틀렸다고 되어..'),
  ];

  export default {
    name: "CommentPage",
    components: {
      BreadcrumbTail,
      Comment,
      CommentInput
    },
    data() {
      return {
        items: [
          {
            commentItem: commentItems[0],
            recomments: recomments
          },
          {
            commentItem: commentItems[1],
            recomments: recomments
          },
          {
            commentItem: commentItems[2],
            recomments: recomments
          },
          {
            commentItem: commentItems[3],
            recomments: recomments
          },
          {
            commentItem: commentItems[4],
            recomments: recomments
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .comment-upper {
    font-size: medium;
  }

  .comment-upper:hover {
    color: #0275d8;
  }

  .comment-medium {
    height: 32vh;
  }
</style>
