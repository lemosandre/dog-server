const express = require("express");
const app = express();

//localhost:300
app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

//doglist
app.get("/doglist", (req, res) => {
  const model = {
    pageTitle: "Dogs",
    components: [
      {
        type: "title",
        data: {
          title: "Akita",
        },
      },
      {
        type: "titleAndSubtitle",
        data: {
          title: "Akita",
          subTitle:
            "The Akita is distinctive large and powerful dog with an aloof attitude.  The Akita can be territorial and the dog is not usually welcoming of strangers.",
        },
      },
    ],
  };

  res.json(model);
});

app.listen(3000, () => {
  console.log("Server is running...");
});
