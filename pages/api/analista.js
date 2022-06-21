const Server = process.env.SERVER;
const Database = process.env.DATABASE;
const User = process.env.USER;
const Password = process.env.PASSWORD;
const sql = require("mssql");
const connStr = `Server=${Server};Database=${Database};User Id=${User};Password=${Password};`;



async function analista(request, response){
    if(request.query.SECRET_KEY!== process.env.SECRET_KEY) {
      return response.status(401).send('Você não tem autorização para usar esta API')
    }
    sql.connect(connStr)
         .then(conn => console.log("conectou!"))
         .catch(err => console.log("erro! " + err));
       
                  
        let pool = await sql.connect(connStr)
        let analistas = await pool.request()
          .query('Select * from Rede_WAnalistas');
        const resultado = analistas.recordsets
    
    response.setHeader('Cache-Control','s-maxage=10,stale-while-revalidate');
    
    response.json(resultado[0]);
    
}

export default analista;