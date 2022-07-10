<script setup lang="ts">
import ChatMessage from "./ChatMessage.vue";
</script>

<template>
  <div class="chat-container">
    <ChatMessage message="vodka for dad's gift in wire basket in basement" />
    <ChatMessage
      message="pineapple floaty in bin furthest from front door on middle shelf in breezeway"
    />
    <ChatMessage message="where is vodka for dad" />
    <ChatMessage message="in wire basket in basement" :isResponse="true" />
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
