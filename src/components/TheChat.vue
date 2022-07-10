<script setup lang="ts">
import { onMounted, ref, toRefs, watch } from "vue";
import ChatMessage from "./ChatMessage.vue";

const props = defineProps({
  messages: Array,
});

const messageList = ref(null);
watch(props, () => setTimeout(() => scrollToBottom(), 0));

onMounted(() => {
  scrollToBottom();
});

function scrollToBottom() {
  if (messageList.value) {
    (messageList.value as Element).scrollTop = (messageList.value as Element).scrollHeight;
  }
}
</script>

<template>
  <div class="chat-container" ref="messageList">
    <ChatMessage
      v-for="(message, i) in messages"
      :key="i"
      :message="(message as any).raw"
      :isResponse="(message as any).response"
    />
  </div>
</template>

<style scoped>
.chat-container {
  max-width: 50rem;
  margin: auto;
  background-color: var(--color-background-soft);
  padding: 1rem;
}
</style>
