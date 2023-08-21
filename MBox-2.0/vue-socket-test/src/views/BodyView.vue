<template>
  <div className="socket-listener">
    <h2>Socket Listener</h2>
    <p>Received Socket Message: {{ receivedMessage }}</p>

    <h2>Socket Listener emitter</h2>
    <p>Received Socket Message: {{ emitterMessage }}</p>
  </div>
</template>

<script>
import io from "socket.io-client";

export default {
  name: "SocketListener",
  data() {
    return {
      receivedMessage: null,
      emitterMessage: null,
    };
  },
  created() {
    const socket = io("/");

    // Прослуховування події "message" з сокет-сервера
    socket.on("time", (message) => {
      this.receivedMessage = message;
    });
    socket.on("message", (message) => {
      this.emitterMessage = message;
      console.log(message);
    });
  },
};
</script>

<style scoped>
.socket-listener {
  text-align: center;
  margin-top: 20px;
}
</style>
