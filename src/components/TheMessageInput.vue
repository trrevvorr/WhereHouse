<script setup lang="ts">
import { computed, ref } from "vue";
const emit = defineEmits(["send", "focus"]);

const input = ref("");
const textMode = computed(() => !!input.value);

function onSend() {
  if (input.value) {
    emit("send", input.value);
    input.value = "";
  }
}

function onMic() {
  alert("voice input not yet supported");
}
</script>

<template>
  <div class="new-message-container">
    <textarea
      v-model="input"
      class="input"
      @focus="emit('focus', true)"
      @blur="emit('focus', !!input)"
      @keyup.enter="onSend"
    ></textarea>
    <button v-if="textMode" :disabled="!input" class="send-button" @click="onSend">
      <fa-icon icon="paper-plane" size="2x" />
    </button>
    <button v-else class="mic-button" @click="onMic">
      <fa-icon icon="microphone" size="3x" />
    </button>
  </div>
</template>

<style scoped>
.new-message-container {
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 1rem;
}

.input {
  color: var(--color-accent);
  border-radius: 20px;

  border-color: var(--color-accent);
  background-color: transparent;

  font-size: 1rem;
  padding: 0.5rem;
}

.input:focus {
  outline: none;
}

button {
  background-color: transparent;
  border: none;
  color: var(--color-accent);
}
</style>
