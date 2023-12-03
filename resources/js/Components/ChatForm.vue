<template>
  <div class="input-group">
<<<<<<< HEAD
    <input id="btn-input" type="text" name="message" class="form input-sm" placeholder="Type your message here..."
      v-model="newMessage" @keyup.enter="sendMessage" />
=======
    <input
      id="btn-input"
      type="text"
      name="message"
      class="form input-sm"
      placeholder="Type your message here..."
      v-model="newMessage"
      @keyup.enter="sendMessage"
    />
>>>>>>> 39a8b60fc9187ffe8bbc9f31cd7ca7b112b96018
    //Button
    <span class="input-group-btn">
      <button class="btn btn-primary btn-sm" id="btn-chat" @click="sendMessage">
        Send
      </button>
    </span>
  </div>
</template>
<script>
export default {
  props: ["user"],
  data() {
    return {
      newMessage: "",
    };
  },
  methods: {
    sendMessage() {
      this.$emit("messagesent", {
        user: this.user,
        message: this.newMessage,
      });
      this.newMessage = "";
    },
  },
};
</script>
