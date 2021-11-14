export default class SocketConnection {
   constructor(url, handler) {
      this.url = url;
      this.ws = new WebSocket(this.url);
      this.ws.addEventListener('message', (message) => {
         if (message.data.startsWith('Error')) {
            window.alert(message.data);
            throw Error(message.data)
         }
         const data = JSON.parse(message.data);
         handler(data);
         // if (data.type === "CURRENT_STATE") {
         //    // show data
         // } else if (data.type === "OPTIMATION_RESULT") {
         //    // show data
         // }
      });
   }
}