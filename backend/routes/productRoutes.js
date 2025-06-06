const express = require('express');
const axios = require('axios'); // ✅ Ensure this is here

const router = express.Router();
const FAKESTORE_API = 'https://dummyjson.com/products';

router.get('/', async (req, res) => {
    try {
        const response = await axios.get(FAKESTORE_API);
        res.json(response.data.products);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch products' });
    }
});

module.exports = router;
