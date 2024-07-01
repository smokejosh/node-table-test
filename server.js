const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());

// Endpoint to receive Smartsheet webhooks
app.post('/webhook', (req, res) => {
    const { body } = req;
    if (body.challenge) {
        res.status(200).send(body.challenge);
        return;
    }
    // Handle webhook events here
    console.log('Webhook event received:', body);
    res.status(200).send();
});

// Endpoint to serve data to the frontend
app.get('/api/data', async (req, res) => {
    try {
        const response = await axios.get('https://api.smartsheet.com/2.0/sheets/hxqJ4g9RmqwjR48g4J9pj558cG5GW5GqH86JvCg1', {
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
