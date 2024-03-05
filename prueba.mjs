import mysql from "mysql2/promise";

export const connection =await mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "crud"
});
const adress = 'pipe@gmail.com';
const pass = '1234';
const [sql2] = await connection.query('SELECT addressCust, passCust FROM customer WHERE addressCust = ? AND passCust = ? ',[adress, pass]
);

console.log(sql2)



// const sql = await connection.query('SELECT addressCust, passCust FROM customer WHERE addressCust = ? AND passCust = ?', [adress, pass]);
// if(sql.length < 1){
// console.log('No se encontro')

// // }

// console.log(sql)

// const result = sql.find(data => data.addressCust === adress );
// console.log(result);