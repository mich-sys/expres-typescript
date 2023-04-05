import express, {Request, Response} from "express";

const app =  express();

app.use(express.json());

 app
 .route("/")
 .get((req: Request, res:Response) => {
    return res.send("You made a GET request")
 })
 .post((req: Request, res:Response) => {
  return res.send("You made a POST request")
})
.put((req: Request, res:Response) => {
  return res.send("You made a PUT request")
});

// express handling async errors

async function throwsError()  {
  throw new Error("boom!!")
}

app.get("/error", async(req:Request, res:Response) => {
  try {
    await throwsError();
    res.sendStatus(200)
  } catch (e) {
    res.status(400).send("Something bad happened")
  } 
})

// express handling errors

app.get("/error", () => {
  throw new Error ("boom!!")
})

app.listen(3000, ()=> {
  console.log('app listens at port http://localhost:3000');
});


