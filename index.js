const express = require('express');
const app = express();

app.get('/fahrenheit/:valor/celsius',(req,res) => {

    const valor = req.params.valor;
    const celsius = (valor - 32) * 5 / 9;
    res.json({valor})  
});

app.get('/celsius/:valor/fahrenheit',(req,res) => {

    const valor = req.params.valor;
    const fahrenheit = (valor * 9 / 5 ) + 32;
    res.json({fahrenheit})  
});


app.listen(8080, () => {

        console.log('Servidor rodando na porta 8080.')

});


// localhost:8080/fahrenheit/27/celsius

// localhost:8080/celsius/132/fahrenheit

// docker build -t api-conversao:v1 .