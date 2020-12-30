<template>
  <form @submit.prevent="handleSubmit">
    <input
      type="text"
      required
      placeholder="display name"
      v-model="displayName"
    />
    <input type="email" required placeholder="email" v-model="email" />
    <input type="password" required placeholder="password" v-model="password" />
    <div v-if="error" class="error">{{ error }}</div>
    <button>Sign up</button>
  </form>
</template>

<script>
import { ref } from 'vue';
import useSignup from '../composables/useSignup';

export default {
  name: 'SignupForm',
  setup() {
    const displayName = ref('');
    const email = ref('');
    const password = ref('');

    const { error, signup } = useSignup();

    const handleSubmit = async () => {
      const res = await signup(email.value, password.value, displayName.value);
      console.log(res);
    };

    return { displayName, email, password, handleSubmit, error };
  },
};
</script>

<style></style>
