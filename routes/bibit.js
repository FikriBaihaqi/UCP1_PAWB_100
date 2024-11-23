import express, { Router } from "express"; 
const router = express.Router(); 
const bibit = [ 
    { 
        id: 1,
        namabibit: "alpukat",  
        jenis: "buah", 
        usia: 20, 
    }, 
    { 
        id: 2, 
        namabibit: "Gersen", 
        jenis: "buah", 
        usia:  10,
        
        id: 3, 
        namabibit: "Kentang", 
        jenis: "Sayuran", 
        usia: 15,
    }, 
]; 
router.get("/", (req, res) => { 
    res.send(bibit); 
}); 
 
router.post('/', (req, res) => { 
    const newbibit = { 
        id: bibit.length + 1, 
        namabibit: req.body.namabibit, 
        jenis: req.body.jenis, 
        usia: req.body.usia
    }; 
    bibit.push(newbibit); 
    res.status(201).json(newbibit); 
}); 
 
router.put('/:id', (req, res) => { 
    const bibitIndex = bibit.findIndex(t => t.id === parseInt(req.params.id)); 
    if (!bibitIndex === -1) 
        return res.status(404).json({ message: 'Tugas tidak ditemukan' }); 
 
    bibit[bibitIndex] = { 
        ...bibit[bibitIndex], 
        namabibit: req.body.namabibit || bibit[bibitIndex].namabibit, 
        jenis: req.body.jenis || bibit[bibitIndex].jenis, 
        usia: req.body.usia || bibit[bibitIndex].usia, 
    }; 
 
    res.status(200).json({ 
        message: `Tugas dengan ID '${req.params.id}' telah diperbarui`, 
        updateBibit: bibit[bibitIndex], 
    }); 
}); 
 
router.delete('/:id', (req, res) => { 
    const bibitIndex = bibit.findIndex(t => t.id === parseInt(req.params.id)); 
    if (bibitIndex === -1) return res.status(404).json({ message: 'Tugas tidak ditemukan' }); 
 
    const deleteBibit = bibit.splice(bibitIndex, 1)[0]; // Menghapus dan menyimpan todo yang dihapus 
    res.status(200).json({ message: `Tugas '${deleteBibit.namabibit}' telah dihapus` }); 
 
}); 
export default router;