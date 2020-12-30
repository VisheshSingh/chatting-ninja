<template>
  <div class="chat-window">
    <div class="error" v-if="error">{{ error }}</div>
    <div v-if="documents" class="messages" ref="messages">
      <div v-for="document in formattedDocs" :key="document.id" class="single">
        <span class="created-at">{{ document.createdAt }}</span>
        <span class="name">{{ document.name }}</span>
        <span class="message">{{ document.message }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import getCollection from '../composables/getCollection';
import { formatDistanceToNow } from 'date-fns';
import { computed, onUpdated, ref } from 'vue';

export default {
  name: 'ChatWindow',
  setup() {
    const { error, documents } = getCollection('message');
    const messages = ref(null);

    const formattedDocs = computed(() => {
      if (documents.value) {
        return documents.value.map((doc) => {
          let time = formatDistanceToNow(doc.createdAt.toDate());
          return { ...doc, createdAt: time };
        });
      }
    });

    onUpdated(() => {
      messages.value.scrollTop = messages.value.scrollHeight;
    });

    return { error, documents, formattedDocs, messages };
  },
};
</script>

<style>
.chat-window {
  padding: 30px 20px;
  background: #fafafa;
}

.single {
  margin: 18px 0;
}

.created-at {
  display: block;
  color: #999;
  font-size: 14px;
  margin-bottom: 4px;
}

.name {
  font-weight: bold;
  margin-right: 6px;
}

.messages {
  max-height: 300px;
  overflow: auto;
}
</style>
