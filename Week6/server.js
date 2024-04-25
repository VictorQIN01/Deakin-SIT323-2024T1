const express = require('express');
const app = express();


// Addition
const addTwoNumbers = (num1, num2) => {
    return num1 + num2;
};
app.get('/addTwoNumbers', (req, res) => {
    try{
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);

        // Error Handling
        if(isNaN(n1)) {
            throw new Error("n1 incorrectly defined");
        }
        if(isNaN(n2)) {
            throw new Error("n2 incorrectly defined");
        }

        const result = addTwoNumbers(n1, n2);
        res.status(200).json({statuscode: 200, data: result});
    } 
    catch (error) {
        console.error(error);
        res.status(500).json({statuscode: 500, msg: error.toString()});
    }


});

// Subtraction
const subtractTwoNumbers = (num1, num2) => {
    return num1 - num2;
};
app.get('/subTwoNumbers', (req, res) => {
    try{
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);

        // Error Handling
        if(isNaN(n1)) {
            throw new Error("n1 incorrectly defined");
        }
        if(isNaN(n2)) {
            throw new Error("n2 incorrectly defined");
        }

        const result = subtractTwoNumbers(n1, n2);
        res.status(200).json({statuscode: 200, data: result});
    } 
    catch (error) {
        console.error(error);
        res.status(500).json({statuscode: 500, msg: error.toString()});
    }


});

// Multiplication
const multiplyTwoNumbers = (num1, num2) => {
    return num1 * num2;
};
app.get('/mulTwoNumbers', (req, res) => {
    try{
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);

        // Error Handling
        if(isNaN(n1)) {
            throw new Error("n1 incorrectly defined");
        }
        if(isNaN(n2)) {
            throw new Error("n2 incorrectly defined");
        }

        const result = multiplyTwoNumbers(n1, n2);
        res.status(200).json({statuscode: 200, data: result});
    } 
    catch (error) {
        console.error(error);
        res.status(500).json({statuscode: 500, msg: error.toString()});
    }


});

// Division
const divideTwoNumbers = (num1, num2) => {
    return num1 / num2;
};
app.get('/divTwoNumbers', (req, res) => {
    try{
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);
        // Error Handling
        if(isNaN(n1)) {
            throw new Error("n1 incorrectly defined");
        }
        if(isNaN(n2)) {
            throw new Error("n2 incorrectly defined");
        }
        if(n2 == 0) {
            throw new Error("Divide by zero error");
        }

        const result = divideTwoNumbers(n1, n2);
        res.status(200).json({statuscode: 200, data: result});
    } 
    catch (error) {
        console.error(error);
        res.status(500).json({statuscode: 500, msg: error.toString()});
    }


});

// Exponentiation
app.get('/powTwoNumbers', (req, res) => {
    try{
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);
        // Error Handling
        if(isNaN(n1)) {
            throw new Error("n1 incorrectly defined");
        }
        if(isNaN(n2)) {
            throw new Error("n2 incorrectly defined");
        }

        const result = Math.pow(n1, n2);
        res.status(200).json({statuscode: 200, data: result});
    } 
    catch (error) {
        console.error(error);
        res.status(500).json({statuscode: 500, msg: error.toString()});
    }


});
// Modulo
const modTwoNumbers = (num1, num2) => {
    return num1 % num2;
};
app.get('/modTwoNumbers', (req, res) => {
    try{
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);

        // Error Handling
        if(isNaN(n1)) {
            throw new Error("n1 incorrectly defined");
        }
        if(isNaN(n2)) {
            throw new Error("n2 incorrectly defined");
        }
        if(n2 == 0) {
            throw new Error('Mod by zero error');
        }

        const result = modTwoNumbers(n1, n2);
        res.status(200).json({statuscode: 200, data: result});
    } 
    catch (error) {
        console.error(error);
        res.status(500).json({statuscode: 500, msg: error.toString()});
    }


});

// Square root
app.get('/sqrtNumber', (req, res) => {
    try {
        const num = parseFloat(req.query.num);
        // Error Handling
        if (isNaN(num)) {
            throw new Error("num is not a number")
        };
        if (num < 0) {
            throw new Error("num is negative")
        };

        const result = Math.sqrt(num);
        res.status(200).json({statuscode: 200, data: result});
    }
    catch (error) {
        res.status(500).json({statuscode: 500, msg: error.toString()});
    }
})

// Server Port Config
app.listen(8000, (req, res)=> {
    console.log("app running on port 8000");
});