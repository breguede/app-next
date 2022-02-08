const Server = process.env.SERVER;
const Database = process.env.DATABASE;
const User = process.env.USER;
const Password = process.env.PASSWORD;
const sql = require("mssql");
const connStr = `Server=${Server};Database=${Database};User Id=${User};Password=${Password};`;

async function paciente(request, response){
    sql.connect(connStr)
         .then(conn => console.log("conectou!"))
         .catch(err => console.log("erro! " + err));
       
                  
        let pool = await sql.connect(connStr)
        let pacientes = await pool.request()
          .query('Select * from Rede_WPacientes');
        const resultado = pacientes.recordsets
    
    response.setHeader('Cache-Control','s-maxage=10,stale-while-revalidate');
    
    response.json(resultado[0]);
    
}

export default paciente;