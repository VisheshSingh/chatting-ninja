<template>
  <form>
    <textarea
      placeholder="Type a message and hit enter to send..."
      v-model="message"
      @keypress.enter.prevent="handleSubmit"
    ></textarea>
    <div class="error" v-if="error">{{ error }}</div>
  </form>
</template>

<script>
import { ref } from 'vue';
import { timestamp } from '../firebase/config';
import useCollection from '../composables/useCollection';
import getUser from '../composables/getUser';

export default {
  name: 'NewChatForm',
  setup() {
    const message = ref('');
    const { error, addDoc } = useCollection('message');
    const { user } = getUser();

    const handleSubmit = async () => {
      const chat = {
        createdAt: timestamp(),
        name: user.value.displayName,
        message: message.value,
      };

      await addDoc(chat);
      message.value = '';
    };

    return { message, handleSubmit, error };
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
