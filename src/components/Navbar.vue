<template>
  <nav>
    <div>
      <p>hey there... display name here</p>
      <p class="email">You are logged in as... email</p>
    </div>
    <button>Logout</button>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
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
