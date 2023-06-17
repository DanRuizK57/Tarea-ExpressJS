function getDescription(req, res){
    const student = "Daniel Ruiz Kemp";
    const title = "Calculadora ExpressJS";

    res.send({ student, title })
}

export default getDescription;
