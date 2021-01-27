const express = require("express");
const app = express();
const port = 8000;

// para cargar página web estática
app.use(express.static(__dirname + "/static"));



// PARA PROBAR MI SERVIDOR ----
app.get("/in", (req, res) => {
  res.json({ message: "Hello World" });
});


app.listen(port, () => console.log(`Listening on port: ${port}`));