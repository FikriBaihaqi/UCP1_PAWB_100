import express from "express";
import bodyParser from 'body-parser';
import bibitRoute from "./routes/bibit.js";
import pupukRoute from "./routes/pupuk.js";

const app = express();
const port = 8000;

app.use(bodyParser.json());
