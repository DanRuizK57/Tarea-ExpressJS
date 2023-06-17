function getDescription(req, res){
    const student = "Daniel Ruiz Kemp";
    const title = "Calculadora ExpressJS";

    res.send({ student, title })
}

function sumar(req, res){
    const number1 = req.body.number1;
    const number2 = req.body.number2;

    const result = number1 + number2;

    if (isNaN(number1)) {
        res.status(400).send("ERROR: number1 debe ser un número!")
    } else if (isNaN(number2)) {
        res.status(400).send("ERROR: number2 debe ser un número!")
    }
    else {
        res.send({ result })
    }

}

function restar(req, res){
    const number1 = req.body.number1;
    const number2 = req.body.number2;

    const result = number1 - number2;

    res.send({ result })
}

function multiplicar(req, res){
    const number1 = req.body.number1;
    const number2 = req.body.number2;

    const result = number1 * number2;

    res.send({ result })
}

function dividir(req, res){
    const number1 = req.body.number1;
    const number2 = req.body.number2;

    const result = number1 / number2;

    res.send({ result })
}

export { getDescription, sumar, restar, multiplicar, dividir };
