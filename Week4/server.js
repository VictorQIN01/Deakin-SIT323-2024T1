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
app.get('/subtractTwoNumbers', (req, res) => {
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
app.get('/multiplyTwoNumbers', (req, res) => {
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
app.get('/divideTwoNumbers', (req, res) => {
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

// Server Port Config
app.listen(8000, (req, res)=> {
    console.log("app running on port 8000");
});