const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/image-proxy', async (req, res) => {
    try {
        const imageUrl = decodeURIComponent(req.query.url);
        const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });

        res.set('Content-Type', response.headers['content-type']);
        res.send(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch image' });
    }
});

module.exports = router;
