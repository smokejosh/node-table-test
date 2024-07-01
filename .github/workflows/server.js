const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 3000;

const accessToken = 'gQ3HdjTb6CnJdZVR3pWWU0VjhyCciSOFoN03j';

app.use(cors());

app.get('/sheets/:sheetId', async (req, res) => {
    const sheetId = req.params.sheetId;

    try {
        const response = await axios.get(`https://api.smartsheet.com/2.0/sheets/${sheetId}`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            }
        });

        res.json(response.data);
    } catch (error) {
        res.status(error.response.status).send(error.response.statusText);
    }
});

app.listen(port, () => {
    console.log(`Proxy server running at http://localhost:${port}`);
});
