import { NodeServer } from "@prop_c/node-server";
const app = new NodeServer();
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/post-route", (req, res) => {
  const body = req.body;
  res.status(200).json({
    message: "Hello World",
  });
});

app.get('/demo',(req,resp)=>{
    return resp.send('demo text')
})

app.listen(3000, () => {
  console.log("Server running on port 3000");
});