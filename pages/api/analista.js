const Server = process.env.SERVER;
const Database = process.env.DATABASE;
const User = process.env.USER;
const Password = process.env.PASSWORD;
const connStr = `Server=${Server};Database=${Database};User Id=${User};Password=${Password};`;
const sql = require("mssql");

async function analista(request, response){
    sql.connect(connStr)
         .then(conn => console.log("conectou!"))
         .catch(err => console.log("erro! " + err));
    const dynamicData = new Date();

    
                  
        let pool = await sql.connect(connStr)
        let analistas = await pool.request()
          .query('Select * from Rede_WAnalistas');
        const resultado = analistas.recordsets
        
    response.json({
        resultado
    })
}

export default analista;