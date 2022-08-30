const Server = process.env.SERVER;
const Database = process.env.DATABASE;
const User = process.env.USER;
const Password = process.env.PASSWORD;
const connStr = `Server=${Server};Database=${Database};User Id=${User};Password=${Password};`;
export default connStr;
