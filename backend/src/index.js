const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes')

const app = express();

mongoose.connect('mongodb+srv://danielsoares:danielsoares@cluster0-2ylps.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(cors()); // liberar o acesso externo para todo tipo de aplicação
app.use(express.json());
app.use(routes);


app.listen(3333);