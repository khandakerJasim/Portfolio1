const App = require("./app");

const PORT = process.env.PORT || 6000;

App.listen(PORT, () => {
  console.log(`the server is running at port is ${PORT}`);
});
