import connStr from '../../../config/dbconfig';
const sql = require("mssql");



export default async function handler(request, response) {
    const { id } = request.query
    let pool = await sql.connect(connStr)
        let analistas = await pool.request()
          .query(`Select * from Rede_WAnalistas WHERE cod_analista = ${id}`);
        const resultado = analistas.recordsets
    
    response.setHeader('Cache-Control','s-maxage=10,stale-while-revalidate');
    
    response.json(resultado[0]);
    
  }