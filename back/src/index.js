require('dotenv').config();

const app = require('./app');
require('./database');

async function main(){
    const port = process.env.PORT || 4000;
    const host = process.env.HOST || '0.0.0.0';
    await app.listen(port, host, () => {
        console.log('escuchando el port ', port);
    });
    
}

main();