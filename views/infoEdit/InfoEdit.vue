<template>
  <div class="content">
    <h2 class="padding-30p">개인정보 수정</h2>
    <form class="ui form">
      <div class="field">
        <label>아이디</label>
        <input v-model="userId" type="text" :disabled="isInputDisabled" placeholder="아이디">
      </div>
      <div class="field">
        <label>닉네임</label>
        <input v-model="nickName" type="text" placeholder="닉네임">
      </div>
      <div class="field">
        <label>이메일</label>
        <input v-model="email" type="email" placeholder="이메일">
      </div>
      <div class="field">
        <label>기존 비밀번호</label>
        <input v-model="password" type="password" placeholder="비밀번호">
        <div v-if="passwordIsBlank" class="ui pointing red basic label">
          기존 비밀번호를 입력해주세요.
        </div>
      </div>
      <div class="field">
        <label>새 비밀번호</label>
        <input v-model="newPassword" type="password" placeholder="비밀번호">
      </div>
      <div class="field">
        <label>새 비밀번호 확인</label>
        <input v-model="newPasswordCheck" type="password" placeholder="비밀번호 확인">
        <div v-if="!isPasswordCorrect" class="ui pointing red basic label">
          비밀번호가 일치하지 않습니다.
        </div>
      </div>
      <div class="field">
        <button
          type="submit"
          class="ui primary button"
          :class="{disabled: isDisabledEdit}">
          개인정보 수정
        </button>
      </div>
    </form>
    <br/>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        userId: '',
        nickName: '',
        email: '',
        password: '',
        newPassword: '',
        newPasswordCheck: '',
        isInputDisabled: true
      }
    },
    methods: {},
    computed: {
      // 버튼 활성화 여부
      isDisabledEdit() {
        if (this.userId.length <= 0 || this.nickName.length <= 0 || this.email.length <= 0
          || this.password.length <= 0  || !(this.newPassword === this.newPasswordCheck)) {
          return true;
        }
      },
      //새 비밀번호와 새비밀번호 확인 일치 여부 확인
      isPasswordCorrect() {
        if (this.newPassword === this.newPasswordCheck) {
          return true;
        }
      },
      passwordIsBlank() {
        if(this.password.length <= 0) {
          return true;
        }
      }
    },
    created() {
      axios.get('http://localhost:8080/server/userInfo.json')
        .then((response) => {
          this.userId = response.data.userId;
          this.nickName = response.data.nickName;
          this.email = response.data.email;
          console.log(this.userId);
        })
    }
  }
</script>

<style scoped>
  .content {
    margin: 5% 35%;
  }
  .button {
    width: 100%
  }
  .padding-30p {
    padding: 0 30%;
  }
  a {
    text-decoration: none;
    transition: .06s;
    transition-duration: 0.06s;
    transition-property: all;
    transition-timing-function: ease-in-out;
    transition-delay: initial;
  }
  .login {
    font-size: 13px;
    text-align: center;
    color: #98A8B9;
  }
  .login a {
    padding-left: 0.25rem;
    font-weight: 500;
    color: #263747;
    text-decoration: none;
  }
  .login a:hover {
    color: #0078FF;
  }
  .login a:after {
    transition-duration: 0.06s;
    transition-property: all;
    transition-timing-function: ease-in-out;
    transition-delay: initial;
    display: inline-block;
    vertical-align: top;
    margin-left: 0.25rem;
    content: ' > ';
  }
  .login a:hover:after {
    transform: translateX(0.25rem);
  }
</style>
