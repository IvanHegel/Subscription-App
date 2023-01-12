import express from "express";
import authRoutes from "./routes/auth";
import subsRoutes from "./routes/subs";
import articlesRoutes from "./routes/articles"
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

mongoose.set('strictQuery', false);
dotenv.config();

mongoose.connect(
    process.env.MANGO_URI as string
)
.then(()=>{
    console.log("Connected to mangoDB");
    const app = express();

    app.listen(8080, ()=>{
        

app.use(express.json());
app.use(cors());
app.use("/auth", authRoutes);
app.use("/subs", subsRoutes);
app.use("/articles", articlesRoutes);

        console.log("Now listenig on a port 8080");
    });
})
.catch((error)=>{
    console.log({error})
    throw new Error(error)
})
