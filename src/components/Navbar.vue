<template>
  <nav>
    <div>
      <p>hey there... display name here</p>
      <p class="email">You are logged in as... email</p>
    </div>
    <div class="error" v-if="error">{{ error }}</div>
    <button @click="handleLogout">Logout</button>
  </nav>
</template>

<script>
import useLogout from '../composables/useLogout';
import { useRouter } from 'vue-router';

export default {
  name: 'Navbar',
  setup() {
    const { error, logout } = useLogout();
    const router = useRouter();

    const handleLogout = async () => {
      await logout();
      router.push('/');
    };
    return { error, handleLogout };
  },
};
</script>

<style>
nav {
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
}

nav p {
  margin: 2px auto;
  color: #444;
}

nav p.email {
  color: #999;
  font-size: 14px;
}
</style>
