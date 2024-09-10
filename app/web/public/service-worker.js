self.addEventListener("push", function (event) {
  const data = event.data.json();

  // Send a message to the app
  self.clients.matchAll().then((clients) => {
    clients.forEach((client) => {
      client.postMessage({
        title: data.title,
        body: data.body,
      });
    });
  });
});
