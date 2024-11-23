const express = require('express');
const app = express();

const PORT = 3000;

app.use(express.json());

app.use('/todo', todoRoutes);
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('index');
});


app.listen(PORT, () =>
    console.log(`Server berjalan di port : http://localhost:${PORT}`));