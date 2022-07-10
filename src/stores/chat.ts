import { defineStore } from "pinia";
import type Message from "@/types/Message";

export const useChatStore = defineStore({
  id: "chat",
  state: () => ({
    messages: new Array<Message>(
      { raw: "vodka for dad's gift in wire basket in basement", response: false },
      {
        raw: "pineapple floaty in bin furthest from front door on middle shelf in breezeway",
        response: false,
      },
      { raw: "where is vodka for dad", response: false },
      { raw: "in wire basket in basement", response: true },
      { raw: "move pineapple floaty to bin A2 in basement", response: false },
      { raw: "pineapple floaty", response: false },
      { raw: "bin A2 in basement", response: true }
    ),
  }),
  getters: {
    getMessages: (state) => state.messages,
  },
  actions: {
    addMessage(message: Message) {
      this.messages.push(message);
    },
  },
});
