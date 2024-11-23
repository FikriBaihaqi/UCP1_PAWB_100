import express, { Router } from "express";
const router = express.Router();
const pupuk = [
  {
    id: 1,
    namaPupuk: "TSP",
    jenisPupuk: "Kimia",
    warna: "putih",
  
  },
  {
    id: 2,
    namaPupuk: "Kompos",
    jenisPupuk: "Organik",
    warna: "hitam"
  },
  {
    id: 3,
    namaPupuk: "NPK",
    jenisPupuk: "Kimia",
    warna: "cokelat"
  }
];


export default router;