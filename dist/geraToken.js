const jwt = require('jsonwebtoken');
let payload = {
    iss: "algumacoisa.com",
    iat: new Date().getSeconds,
    exp: new Date().setMinutes(60),
    name: "João Paulo",
    email: "joaopaulooliveira@protonmail.com"
};
var token = jwt.sign(payload, "node-ts");
console.log(token);
