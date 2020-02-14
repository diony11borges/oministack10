const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://root:DIONY11BORGES@cluster0-ud74w.mongodb.net/test?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

app.use(express.json());
app.use(routes);
app.listen(3333);

// Métodos Http:    get, post, put, delete

//Tipos de Paramentros:

// Query Params:    request.query ( Filtros, Ordenacao, Paginacao )
// Route Params:    request.params ( Identificar recurso na url )
// Query Params:    request.body ( Dados para criacao ou alteracao de um registro )

// MongoDB (Nao-relacional)

