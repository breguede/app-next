import connStr from '../../config/dbconfig';
const sql = require("mssql");


async function pacientes(request, response) {
  const {
    query: { name },
    method,
  } = request;

  switch (method) {
    case "GET":
      if (name) {
        sql
        .connect(connStr)
        .then((conn) => console.log("conectou!"))
        .catch((err) => console.log("erro! " + err));

      let pool = await sql.connect(connStr);
      let pacientes = await pool
        .request()
        .query(`Select * from Rede_WPacientes WHERE nom_pac LIKE '%${name}%'`);
      const resultado = pacientes.recordsets;

      response.setHeader("Cache-Control", "s-maxage=10,stale-while-revalidate");

      response.json(resultado[0]);
      break;
      }
      sql
        .connect(connStr)
        .then((conn) => console.log("conectou!"))
        .catch((err) => console.log("erro! " + err));

      let pool = await sql.connect(connStr);
      let pacientes = await pool
        .request()
        .query("Select * from Rede_WPacientes WHERE cod_pac > 18000 ");
      const resultado = pacientes.recordsets;

      response.setHeader("Cache-Control", "s-maxage=10,stale-while-revalidate");

      response.json(resultado[0]);
      break;
  }
}

export default pacientes;
