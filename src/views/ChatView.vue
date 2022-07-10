<script setup lang="ts">
import TheChat from "@/components/TheChat.vue";
import TheMessageInput from "@/components/TheMessageInput.vue";
import { ref } from "vue";
import { useChatStore } from "@/stores/chat";

const chatStore = useChatStore();

const newMessageActive = ref(false);
</script>

<template>
  <div :class="{ main: true, newMessageActive }">
    <TheChat class="convo" :messages="chatStore.getMessages" />
    <TheMessageInput
      class="new-message"
      @focus="(isFocused) => (newMessageActive = isFocused)"
      @send="(newMessage) => chatStore.addMessage({ raw: newMessage, response: false })"
    />
  </div>
</template>

<style scoped>
.main {
  height: 100%;
}

.main .new-message {
  height: 5rem;
}

.main .convo {
  height: calc(100% - 5rem);
  overflow: scroll;
}

.main.newMessageActive .new-message {
  height: 8rem;
}
.main.newMessageActive .convo {
  height: calc(100% - 8rem);
}
</style>
