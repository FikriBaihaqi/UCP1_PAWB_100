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
router.get("/", (req, res) => {
    res.send(pupuk);
});

router.post('/', (req, res) => { 
    const newPupuk = { 
        id: pupuk.length + 1, 
        namaPupuk: req.body.namaPupuk, 
        jenisPupuk: req.body.jenisPupuk,
        warna: req.body.warna
    }; 
    pupuk.push(newPupuk); 
    res.status(201).json(newPupuk); 
});

router.put('/:id', (req, res) => { 
    const pupukIndex = pupuk.findIndex(t => t.id === parseInt(req.params.id)); 
    if (!pupukIndex === -1) 
        return res.status(404).json({ message: 'Pupuk tidak ditemukan' }); 
 
    pupuk[pupukIndex] = { 
        ...pupuk[pupukIndex], 
        namaPupuk: req.body.namaPupuk || pupuk[pupukIndex].namaPupuk, 
        jenisPupuk: req.body.jenisPupuk || pupuk[pupukIndex].jenisPupuk,
        warna: req.body.warna || pupuk[pupukIndex].warna
    }; 
 
    res.status(200).json({ 
        message: `Tugas dengan ID '${req.params.id}' telah diperbarui`, 
        updatedpupuk: pupuk[pupukIndex], 
    });
    
    router.delete('/:id', (req, res) => { 
        const pupukIndex = pupuk.findIndex(t => t.id === parseInt(req.params.id)); 
        if (pupukIndex === -1) return res.status(404).json({ message: 'Pupuk tidak ditemukan' }); 
     
        const deletepupuk = pupuk.splice(pupukIndex, 1)[0]; // Menghapus dan menyimpan todo yang dihapus 
        res.status(200).json({ message: `Tugas '${deletepupuk.NamaPupuk}' telah dihapus`
        }); 
     
    });
});

export default router;