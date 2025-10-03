const express = require('express');
const cors = require('cors');
const fs = require('fs');


const app = express();
const PORT = 4001;


app.use(cors());

// Get data gallert from gallery.json
app.get('/api/gallery', (req, res) => {
    fs.readFile('gallery.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading gallery.json:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }   
        try {
            const gallery = JSON.parse(data);
            res.json(gallery);
        } catch (parseErr) {
            console.error('Error parsing JSON:', parseErr);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});