const Server = process.env.SERVER;
const Database = process.env.DATABASE;
const User = process.env.USER;
const Password = process.env.PASSWORD;
const sql = require("mssql");
const connStr = `Server=${Server};Database=${Database};User Id=${User};Password=${Password};`;


export default async function handler(request, response) {
    const { id } = request.query
    let pool = await sql.connect(connStr)
        let pacientes = await pool.request()
          .query(`Select * from Rede_WPacientes WHERE cod_pac = ${id}`);
        const resultado = pacientes.recordsets
    
    response.setHeader('Cache-Control','s-maxage=10,stale-while-revalidate');
    
    response.json(resultado[0]);
    
  }