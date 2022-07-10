<script setup lang="ts">
defineProps({
  message: String,
  isResponse: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div :class="{ row: true, response: isResponse }">
    <div class="message-bubble">{{ message }}</div>
    <br />
  </div>
</template>

<style scoped>
.row {
  justify-content: right;
  display: flex;
}
.row.response {
  justify-content: left;
}

.row .message-bubble {
  color: var(--color-heading);
  position: relative;
  margin-top: 1rem;
  display: flex;
  justify-content: right;
  align-items: end;
  max-width: calc(min(80%, 100rem));
  background-color: var(--color-accent);
  border-radius: 20px 20px 0 20px;
  padding: 0.5rem 1rem;
}
.row.row.response .message-bubble {
  justify-content: left;
  background-color: var(--color-border);
  border-radius: 20px 20px 20px 0;
}
</style>
