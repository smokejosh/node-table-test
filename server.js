const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());

// Endpoint to serve data to the frontend
app.get('/api/data', async (req, res) => {
    try {
        const response = await axios.get('https://api.smartsheet.com/2.0/sheets/hxqJ4g9RmqwjR48g4J9pj558cG5GW5GqH86JvCg1 {
            headers: {
                'Authorization': 'Bearer gQ3HdjTb6CnJdZVR3pWWU0VjhyCciSOFoN03j'
            }
        });
        const data = response.data;
        res.json(data);
    } catch (error) {
        console.error('Error fetching Smartsheet data:', error);
        res.status(500).send('Internal Server Error');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});