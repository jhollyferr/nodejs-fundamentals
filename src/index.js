const express = require('express');

const app = express();

app.use(express.json());

app.post('/account', (request, response) => {
    const { name, cpf } = request.body;

    
});

app.listen(3333, () => {
    console.log('Server running on port 3333');
})