module.exports = reqMidderware = (req, res, Next) => {
    if(!req.query.age){
        res.send("plase Enter the age");
    }
    else if(req.query.age >=18){
        res.send("age is valid");
    }
    else if(req.query.age <= 18){
        res.send("age is Invalid");
    }
    else{
        Next();
    }
}

