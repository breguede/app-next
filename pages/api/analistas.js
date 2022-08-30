const sql = require("mssql");
import connStr from '../../config/dbconfig';

async function analistas(request, response) {
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
        let analistas = await pool
          .request()
          .query(
            `Select * from Rede_WAnalistas where nom_analista LIKE '%${name}%'`
          );
        const resultado = analistas.recordsets;

        response.setHeader(
          "Cache-Control",
          "s-maxage=10,stale-while-revalidate"
        );

        response.json(resultado[0]);
        break;
      }
      sql
        .connect(connStr)
        .then((conn) => console.log("conectou!"))
        .catch((err) => console.log("erro! " + err));

      let pool = await sql.connect(connStr);
      let analistas = await pool
        .request()
        .query(`Select * from Rede_WAnalistas`);
      const resultado = analistas.recordsets;

      response.setHeader("Cache-Control", "s-maxage=10,stale-while-revalidate");

      response.json(resultado[0]);
      break;
    default:
      response.setHeader("Allow", ["GET"]);
      response.status(405).end(`Method ${method} Not Allowed`);
  }
}

export default analistas;
