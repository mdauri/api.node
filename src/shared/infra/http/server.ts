import { app } from "./app";

const port = process.env.PORT || 3333;

app.listen(port, () =>
  console.log(`PeopleLink server is running on port ${port}!`)
);
