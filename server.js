const express = require("express");
const expressHTTP = require("express-graphql");
const schema = require("./schema/schema");
const port = process.env.PORT || 4000;

const app = express();

app.use(
  "/graphql",
  expressHTTP({
    schema,
    graphiql: true
  })
);

app.listen(port, () => {
  console.log("listennig on port " + port);
});
