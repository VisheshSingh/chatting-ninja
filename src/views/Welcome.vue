<template>
  <div class="welcome container">
    <div v-if="showLogin">
      <h2>Login</h2>
      <LoginForm @login="enterChat" />
      <p>No account? <span @click="showLogin = false">Signup</span> instead</p>
    </div>
    <div v-else>
      <h2>Sign up</h2>
      <SignupForm @signup="enterChat" />
      <p>
        Already registered? <span @click="showLogin = true">Login</span> instead
      </p>
    </div>
  </div>
</template>

<script>
import SignupForm from '../components/SignupForm.vue';
import LoginForm from '../components/LoginForm.vue';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

export default {
  name: 'Welcome',
  components: { SignupForm, LoginForm },
  setup() {
    const showLogin = ref(true);

    const router = useRouter();

    const enterChat = () => {
      router.push({ name: 'Chatroom' });
    };

    return { showLogin, enterChat };
  },
};
</script>

<style>
.welcome {
  text-align: center;
  padding: 20px 0;
}

.welcome form {
  width: 300px;
  margin: 20px auto;
}

.welcome input {
  width: 100%;
  border-radius: 20px;
  border: 1px solid #eee;
  padding: 10px;
  margin: 10px 0;
  outline: none;
  color: #999;
}

.welcome button {
  margin: 20px auto;
}

.welcome span {
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}
</style>
