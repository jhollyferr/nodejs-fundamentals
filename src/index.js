const express = require('express');
const { v4: uuidv4 } = require('uuid');
const app = express();

const customers = [];

app.use(express.json());

app.post('/account', (request, response) => {
    
    const { name, cpf } = request.body;

    const id = uuidv4();

    customers.push({
        id,
        name,
        cpf,
        statement: []
    })

    console.log(customers);

    return response.status(201).send();
});

app.listen(3333, () => {
    console.log('Server running on port 3333');
})