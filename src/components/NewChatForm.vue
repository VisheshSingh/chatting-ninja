<template>
  <form>
    <textarea
      placeholder="Type a message and hit enter to send..."
      v-model="message"
      @keypress.enter.prevent="handleSubmit"
    ></textarea>
  </form>
</template>

<script>
import { ref } from 'vue';
export default {
  name: 'NewChatForm',
  setup() {
    const message = ref('');

    const handleSubmit = () => {
      console.log(message.value);
      message.value = '';
    };

    return { message, handleSubmit };
  },
};
</script>

<style>
form {
  margin: 10px;
}

form textarea {
  padding: 10px;
  margin: 4px auto;
  width: 100%;
  box-sizing: border-box;
  outline: none;
  border-radius: 20px;
  border: 0;
  font-family: inherit;
  resize: none;
}
</style>
