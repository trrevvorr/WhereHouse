import { defineStore } from "pinia";
import type Message from "@/types/Message";

export const useChatStore = defineStore({
  id: "chat",
  state: () => ({
    messages: new Array<Message>(),
  }),
  getters: {
    messages: (state) => state.messages,
  },
  actions: {
    addMessage(message: Message) {
      this.messages.push(message);
    },
  },
});
