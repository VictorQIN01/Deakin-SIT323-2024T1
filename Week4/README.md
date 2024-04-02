## Week 4 Tasks Documentation
### 4.1P

A Node.js app with 4 endpoints that takes two numbers as parameters and performs basic arithmetic operations: addition, subtraction, multiplication, division.\
**Endpoints:**
- `addTwoNumbers`: accepts two params `n1` and `n2`, returns `n1 + n2`. Throws error if either `n1` or `n2` is not a number.
- `subTwoNumbers`: accepts two params `n1` and `n2`, returns `n1 - n2`. Throws error if either `n1` or `n2` is not a number.
- `mulTwoNumbers`: accepts two params `n1` and `n2`, returns `n1 * n2`. Throws error if either `n1` or `n2` is not a number.
- `divTwoNumbers`: accepts two params `n1` and `n2`, returns `n1 / n2`. Throws error if either `n1` or `n2` is not a number, or `n2` is equal to 0.

<!---->
**Examples:**
- `localhost:8000/addTwoNumbers?n1=2&n2=1` result: `{"statuscode":200, "data": 3}`
- `localhost:8000/mulTwoNumbers?n1=2&n2=a` result: `{"statuscode": 500, "msg": "n2 incorrectly defined"}`
- `localhost:8000/divTwoNumbers?n1=2&n2=0` result: `{"statuscode": 500, "msg": "Divide by zero error"}`
<!---->
As shown in the examples, if two parameters are given correctly, the result of arithmetic operation will be printed in json format. If the parameter is not a number, an error will be thrown and printed on screen.
For division operation, additional error condition is created to prevent **divideByZero** error.

---
### 4.2C

In addition to 4.1P, three new endpoints are created for exponentiation, square root, and modulo operations.\
**Endpoints:**
- `powTwoNumbers`: accepts two params `n1` and `n2`, returns `Math.pow(n1, n2)`. Throws error if either `n1` or `n2` is not a number.
- `sqrtNumber`: accepts one param `num`, returns `Math.sqrt(num)`. Throws error if either `num` is not a number or `num` is a nagative number.
- `modTwoNumbers`: accepts two params `n1` and `n2`, returns `n1 % n2`. Throws error if either `n1` or `n2` is not a number, or `n2` is equal to 0.
