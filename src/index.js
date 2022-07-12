const express = require('express');

const app = express();

app.use(express.json());

app.get('/courses', (request, response) => {
    const {page = 1, limit = 10} = request.query;

    return response.json(
        [
            'Curso 1',
            'Curso 2',
            'Curso 3'
        ]
    )
});

app.post('/courses', (request, response) => {

    const { name, age } = request.body;

    return response.json(
        [
            'Curso 1',
            'Curso 2',
            'Curso 3',
            'Curso 4'
        ]
    )
})

app.put('/courses/:id', (request, response) => {

    const {id} = request.params;
    
    return response.json(
        [
            'Curso 6',
            'Curso 2',
            'Curso 3',
            'Curso 4'
        ]
    )
})

app.patch('/courses/:id', (request, response) => {
    return response.json(
        [
            'Curso 6',
            'Curso 2',
            'Curso 3',
            'Curso 4'
        ]
    )
})

app.delete('/courses/:id', (request, response) => {
    return response.json(
        [
            'Curso 6', 
            'Curso 2',
            'Curso 4'
        ]
    )
})

app.listen(3333, () => {
    console.log('Server running on port 3333');
})