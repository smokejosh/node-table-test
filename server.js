const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint to fetch Smartsheet data
app.get('/sheets/:sheetId', async (req, res) => {
    try {
        const response = await axios.get(`https://api.smartsheet.com/2.0/sheets/${req.params.sheetId}`, {
            headers: {
                'Authorization': 'Bearer gQ3HdjTb6CnJdZVR3pWWU0VjhyCciSOFoN03j'}
        });

        res.json(response.data);
    } catch (error) {
        console.error('Error fetching Smartsheet data:', error.message);
        res.status(500).json({ error: 'Failed to fetch Smartsheet data' });
    }
});

// Define your other routes or middleware as needed

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
