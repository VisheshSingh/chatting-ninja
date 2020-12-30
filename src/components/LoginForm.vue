<template>
  <form @submit.prevent="handleSubmit">
    <input type="email" required placeholder="email" v-model="email" />
    <input type="password" required placeholder="password" v-model="password" />
    <div class="error" v-if="error">{{ error }}</div>
    <button>Login</button>
  </form>
</template>

<script>
import { ref } from 'vue';
import useLogin from '../composables/useLogin';

export default {
  name: 'LoginForm',
  setup() {
    const email = ref('');
    const password = ref('');

    const { error, login } = useLogin();

    const handleSubmit = async () => {
      const res = await login(email.value, password.value);
      console.log(res);
    };

    return { email, password, handleSubmit, error };
  },
};
</script>

<style></style>
