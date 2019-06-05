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
        <label>비밀번호</label>
        <input v-model="password" type="password" placeholder="비밀번호">
      </div>
      <div class="field">
        <label>비밀번호 확인</label>
        <input v-model="passwordCheck" type="password" placeholder="비밀번호 확인">
        <div v-if="!isPasswordCorrect" class="ui pointing red basic label">
          비밀번호가 일치하지 않습니다.
        </div>
      </div>
      <div class="field">
        <button
          type="submit"
          class="ui primary button"
          :class="{disabled: isDisabledRegister}">
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
        passwordCheck: '',
        isInputDisabled: true
      }
    },
    methods: {},
    computed: {
      isDisabledRegister() {
        if (this.userId.length <= 0 || this.nickName.length <= 0 || this.email.length <= 0
          || this.password.length <= 0 || this.passwordCheck.length <= 0  || !(this.password === this.passwordCheck)) {
          return true;
        }
      },
      isPasswordCorrect() {
        if (this.password === this.passwordCheck) {
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
          this.password = response.data.password;
          this.passwordCheck = response.data.password;
          console.log(this.userId);
        })
    }
  }
</script>

<style scoped>
  .content {
    margin: 0 35%;
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
